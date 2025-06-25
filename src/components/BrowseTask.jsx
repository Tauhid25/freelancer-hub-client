import React from "react";
import { Link } from "react-router"; // fixed wrong import

const BrowseTask = ({ task }) => {
  const { _id, taskTitle, category, description, deadline, budget } = task;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 max-w-md w-full mx-auto p-6 dark:bg-gray-800 dark:text-white dark:border dark:border-white">
      {/* Badge */}
      <span className="inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full mb-3 dark:bg-gray-800 dark:text-white dark:border dark:border-white">
        Most Recent
      </span>

      {/* Title & Budget */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">{taskTitle}</h2>
        <span className="text-lg font-semibold text-blue-600 dark:text-white">${budget}</span>
      </div>

      {/* Task Info */}
      <ul className="space-y-2 text-sm text-gray-600 dark:text-white">
        <li>
          <strong>Category:</strong> <span className="text-gray-700 dark:text-white">{category}</span>
        </li>
        <li>
          <strong>Description:</strong>{" "}
          <span className="block text-gray-700 truncate dark:text-white">{description}</span>
        </li>
        <li>
          <strong>Deadline:</strong> <span className="text-gray-700 dark:text-white">{deadline}</span>
        </li>
      </ul>

      {/* Button */}
      <div className="mt-6">
        <Link to={`/taskDetails/${_id}`}>
          <button className="w-full py-2 bg-[#009fff] hover:bg-[#007dff] text-white font-medium rounded-lg transition duration-300">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrowseTask;

