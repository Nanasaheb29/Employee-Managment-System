import React from "react";
import WelcomeMenu from "./WelcomeMenu";
import Footer from "./Footer";

function Welcome() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <WelcomeMenu />

      <main className="flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-8 mb-4">
          Welcome to Employee Management System
        </h1>
        <p className="text-gray-600 mb-8 max-w-xl">
          Manage employee records, attendance, and performance efficiently in one place.
        </p>

        <img
          src="/src/assets/ZguYz8t2UUcvBUhF_Employeemanagement.avif"
          alt="Employee Management"
          className="w-full max-w-3xl rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </main>

      <Footer />
    </div>
  );
}

export default Welcome;
