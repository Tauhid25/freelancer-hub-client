import React from "react";
import NotFoundImg from "../assets/NotFound.jpg";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 px-6 sm:px-8 lg:px-12 py-12 text-center min-h-screen dark:bg-gray-800 dark:text-white">
      <div className="bg-white mx-auto p-4 sm:p-8 lg:p-4 rounded-2xl max-w-lg sm:max-w-xl lg:max-w-2xl">
        <img
          className="mx-auto w-9/12 h-auto"
          src={NotFoundImg}
          alt="Page not found"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-red-500 text-center pt-6">
        404 - Page Not Found
      </h1>
      <p className="font-semibold text-center pt-4 text-xl sm:text-2xl text-gray-600 dark:text-white">
        Oops! This page you're looking for doesn't exist.
      </p>
      <div className="pt-4">
        <Link to="/">
          <button className="btn bg-[#176AE5] text-lg sm:text-xl text-white px-6 py-4 sm:px-8 sm:py-6 rounded-lg">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
