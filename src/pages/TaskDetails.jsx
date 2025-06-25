import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const TaskDetails = () => {
  const { user } = useContext(AuthContext);
  const task = useLoaderData();

  const {
    _id,
    userName,
    userEmail,
    taskTitle,
    category,
    description,
    deadline,
    budget,
  } = task;

  const [bidCount, setBidCount] = useState(0);

  // Load bid count
  useEffect(() => {
    fetch(`https://freelancer-hub-server.vercel.app/bids?taskId=${_id}`)
      .then((res) => res.json())
      .then((data) => setBidCount(data.length))
      .catch((err) => console.error("Failed to load bid count", err));
  }, [_id]);

  // Handle Bid
  const handleBid = () => {
    const newBid = {
      taskId: _id,
      userEmail: user?.email,
      userName: user?.displayName || "Anonymous",
      bidTime: new Date().toISOString(),
    };

    fetch("https://freelancer-hub-server.vercel.app/bids", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then(() => setBidCount((prev) => prev + 1))
      .catch((err) => console.error("Failed to submit bid", err));
  };

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-8 lg:px-32 dark:bg-gray-800 dark:text-white">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10 dark:bg-gray-800 dark:border dark:border-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Task Details
        </h2>
        <p className="text-xs md:text-lg font-bold text-center mb-6 text-gray-800 dark:text-white">
          <span className="font-semibold">You bid for</span>{" "}
          <span className="text-[#009fff] font-semibold">{bidCount}</span> <span className="font-semibold">opportunities</span>
        </p>

        <ul className="space-y-4 text-gray-700 text-sm md:text-base dark:text-white">
          <li>
            <p>
              <span className="font-semibold">Title:</span> {taskTitle}
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Description:</span> {description}
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Deadline:</span> {deadline}
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Budget:</span>{" "}
              <span className="text-blue-600 font-semibold">${budget}</span>
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Posted By:</span> {userName} (
              {userEmail})
            </p>
          </li>
        </ul>

        <div className="mt-6">
          <button
            onClick={handleBid}
            className="w-full md:w-auto px-6 py-2 bg-[#009fff] hover:bg-[#007dff] text-white font-semibold rounded-lg transition duration-300"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
