import React from "react";
import { Link } from "react-router-dom";

function WelcomeMenu() {
  return (
    <div className="flex justify-around items-center bg-gray-100  py-6 shadow-md">
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer hover:text-blue-900 transition duration-300">
        Employee
      </h1>{" "}
      <nav className="space-x-6 text-lg font-semibold">
        <Link
          href="/login"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Login
        </Link>
        <span className="text-gray-400">|</span>
        <Link
          href="/register"
          className="text-green-600 hover:text-green-800 transition-colors duration-200"
        >
          Register
        </Link>
      </nav>
    </div>
  );
}

export default WelcomeMenu;
