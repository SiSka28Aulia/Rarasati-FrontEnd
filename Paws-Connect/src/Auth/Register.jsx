import React from "react";
import UseForm from "../hooks/UseForm";
import { useForm } from "react-hook-form";
import { login } from "../assets/index.js";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,

    formState: { errors },
  } = useForm();


  const { handleChange, handleSubmit, values } = UseForm(() => {
    console.log("Form submitted");
  });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-480px h-613px flex shadow-lg rounded-lg bg-white overflow-hidden">
          <div className="w-1/2 bg-cover bg-center bg-pink" style={{ backgroundImage: `url(${login})` }}>
            <div className="p-10">
              <h1 className="text-3xl font-bold text-white text-center">Selamat Datang</h1>

              <div className="flex mt-4">
                <a href="#" className="text-white text-2xl mr-2"><i className="fa fa-facebook"></i></a>
                <a href="#" className="text-white text-2xl"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-8">
            <h5 className="text-xl text-center font-bold text-black mt-20 mb-8">Mulai mendaftar</h5>

            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={values.username || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mt-4">
                <input
                  name="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-primary"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <p className="text-sm text-secondary font-bold mt-1">Sudah punya akun?
                <Link to="/login">
                  <a href="#" className="font-light text-primary underline ">

                    Masuk</a>
                </Link>
              </p>
              <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-purple">
                Daftar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

