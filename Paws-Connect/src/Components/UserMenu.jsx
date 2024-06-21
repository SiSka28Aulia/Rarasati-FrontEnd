import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import axios from "axios";

const UserMenu = ({ logoutButtonText }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("https://via.placeholder.com/150"); // Default avatar URL
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("token");
      if (user) {
        setIsLoggedIn(true);
        setAvatarSrc(user.avatar || "https://via.placeholder.com/150"); // Use user's avatar or default
      } else {
        setIsLoggedIn(false);
        setAvatarSrc("https://via.placeholder.com/150"); // Default avatar when logged out
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 200) {
        localStorage.removeItem("token"); // Remove user data from localStorage
        setIsLoggedIn(false); // Update state to reflect logged out status
        setAvatarSrc("https://via.placeholder.com/150"); // Reset avatar source to default
        navigate("/login"); // Redirect to login page
      } else {
        console.error("Logout gagal");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat logout:", error);
    }
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-end font-satoshi-light">
      <div tabIndex={0} role="button">
        <Avatar src={avatarSrc} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {isLoggedIn ? (
          <>
            <Link to="/profile">
              <li>
                <a>Profil</a>
              </li>
            </Link>
            <hr />

            <li>
              <a onClick={handleLogout}>Keluar</a>
            </li>
          </>
        ) : (
          <Link to="/login">
            <li>
              <a>Masuk</a>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default UserMenu;
