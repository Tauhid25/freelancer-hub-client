import React from "react";
import { Link } from "react-router";

const FeaturedTask = ({ task }) => {
  const { taskTitle,userName, deadline, budget, thumbnail } = task;
  return (
    <div className="bg-white rounded-2xl px-3 py-6 dark:bg-gray-800 dark:border dark:border-white">
      <div>
        <img
          className="w-[350px] h-[200px] rounded-lg mx-auto"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="px-8 pt-4">
        <p className="font-semibold text-lg">{taskTitle}</p>
        <p className="text-lg">{userName}</p>
        <div className="lg:flex gap-x-3">
          <p>Deadline : {deadline}</p>
          <p>Budget :$ {budget}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTask;
