import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";

const UserMenu = ({ logoutButtonText = "Keluar" }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("https://via.placeholder.com/150"); // Default avatar URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fungsi untuk memeriksa status login pengguna
    const checkLoginStatus = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setIsLoggedIn(true);
        setAvatarSrc(user.avatar || "https://via.placeholder.com/150"); // Gunakan avatar pengguna atau default
      } else {
        setIsLoggedIn(false);
        setAvatarSrc("https://via.placeholder.com/150"); // Default avatar ketika logout
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

      if (response.ok) {
        localStorage.removeItem("user"); // Hapus data pengguna dari localStorage
        setIsLoggedIn(false); // Perbarui state untuk mencerminkan status logout
        setAvatarSrc("https://via.placeholder.com/150"); // Setel ulang avatar ke default
        navigate("/login"); // Arahkan ke halaman login
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
