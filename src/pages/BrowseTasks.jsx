import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BrowseTask from "../components/BrowseTask";

const BrowseTasks = () => {
  const initialTasks = useLoaderData();
  console.log(initialTasks);
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="bg-gray-100 px-4 md:px-12 lg:px-16 py-4 md:py-6 dark:bg-gray-800 dark:text-white">
      <h1 className="text-xl md:text-2xl text-center font-bold pb-4">Browse Tasks</h1>
      <div className="bg-white px-4 md:px-12 lg:px-10 py-4 md:py-6 lg:py-10 rounded-2xl dark:bg-gray-800 dark:text-white dark:border dark:border-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <BrowseTask
              key={task._id}
              task={task}
              setTasks={setTasks}
            ></BrowseTask>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseTasks;
