import React from "react";
import { useLoaderData } from "react-router";
import FeaturedTask from "./FeaturedTask";

const FeaturedTasks = () => {
  const featuredTasksData = useLoaderData();

  return (
    <div className="bg-gray-100 w-full dark:bg-gray-800 dark:text-white">
      <div className="rounded-2xl px-4 sm:px-6 md:px-8 lg:px-16 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-3">
          Our Featured Tasks
        </h1>
        <p className="text-center text-gray-600 dark:text-white mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Discover top featured tasks from trusted clients, showcasing
          high-quality freelance opportunities across various categories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTasksData?.map((task) => (
            <FeaturedTask task={task} key={task._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTasks;
