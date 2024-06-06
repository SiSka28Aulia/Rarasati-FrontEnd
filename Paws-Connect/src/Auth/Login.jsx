import React from "react";
import UseForm from "../hooks/UseForm";
import { login } from "../assets/index.js";
import { Link } from "react-router-dom";
const Login = () => {
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
          <h5 className="text-xl text-center font-bold text-black mt-20 mb-8">Masuk untuk melanjutkan</h5>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <input
                name="username"
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
            <div className="mt-4 flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
              </label>
              <a href="#" className="text-sm text-greyLight">Lupa kata sandi?</a>
            </div>
            <p className="text-sm text-secondary font-bold mt-1">Belum punya akun?
              <Link to="/register">
              <a href="#" className="font-light text-primary underline ">

              Mulai mendaftar</a>
              </Link>
              </p>
            <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-purple">
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
