import axios, { Axios } from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  const [updateemployee, setupdateemployee] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setupdateemployee((old) => ({ ...old, [name]: value }));
  };


  const nevigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getById?id=${id}`)
      .then((response) => setupdateemployee(response.data))
      .catch((error) => alert(error.massage || "somthing went wrong"));
  }, [id]);

  const UpdateUser = (e) => {
    e.preventDefault(); // prevent form reload
    axios
      .put("http://localhost:8080/update", updateemployee)
      .then((response) => {
        alert("User updated successfully!");
        setupdateemployee(response.data);
        nevigate('/dashboard')
      })
      .catch((error) => alert(error.message || "Something went wrong"));
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={UpdateUser} className="bg-white shadow-lg rounded-2xl px-8 pt-10 pb-8 w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">ID</label>
          <input
            type="number"
            name="id"
            readOnly
            value={updateemployee.id}
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
            value={updateemployee.name}
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
            value={updateemployee.email}
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
            value={updateemployee.password}
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
          Update
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
