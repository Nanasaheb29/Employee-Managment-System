import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [register, setRegister] = useState({
    id:0,
    name: "",
    email: "",
    password: "",
  });

  const nevigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegister((old) => ({ ...old, [name]: value }));
  };

  const emp = (e) => {
    e.preventDefault();

    axios
      .post("https://employee-curd-3.onrender.com/register", {
        id:register.id,
        name: register.name,
        email: register.email,
        password: register.password,
      })
      .then((response) => {
        if (response.data) {
          alert("Registered successfully!");

          nevigate('/login');

        } else {
          alert("User already exists!");
        }
      })
      .catch((error) => alert(error.message || "Something went wrong!"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={emp}
        className="bg-white shadow-lg rounded-2xl px-8 pt-10 pb-8 w-full max-w-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>


        {/* id Field */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">ID</label>
          <input
            type="number"
            name="id"
            onChange={inputHandler}
            placeholder="Enter your id"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Name Field */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            onChange={inputHandler}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={inputHandler}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-600 hover:text-green-800 font-medium"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
