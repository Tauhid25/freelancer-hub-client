import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyPostedTasks = () => {
  const { user } = useContext(AuthContext);
  const allTasks = useLoaderData();

  const [tasks, setTasks] = useState([]);
  // const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [bidCountInModal, setBidCountInModal] = useState(0);

  useEffect(() => {
    if (user?.email) {
      const userTasks = allTasks.filter(
        (task) => task.userEmail === user.email
      );
      setTasks(userTasks);
    }
  }, [user?.email, allTasks]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#009fff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://freelancer-hub-server.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your task has been removed.", "success");
              const remaining = tasks.filter((task) => task._id !== id);
              setTasks(remaining);
            }
          });
      }
    });
  };

  const handleViewBids = (taskId) => {
    // setSelectedTaskId(taskId);

    fetch(`https://freelancer-hub-server.vercel.app/bids?taskId=${taskId}`)
      .then((res) => res.json())
      .then((data) => {
        setBidCountInModal(data.length);
        document.getElementById("bid_modal").showModal();
      })
      .catch((err) => {
        console.error("Failed to fetch bid count", err);
        setBidCountInModal(0);
        document.getElementById("bid_modal").showModal();
      });
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-8 bg-gray-50 min-h-screen dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        My Posted Tasks
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl dark:bg-gray-800 dark:text-white dark:border dark:border-white">
        <table className="min-w-full text-sm md:text-base">
          <thead className="bg-blue-100 text-gray-700 dark:bg-gray-800 dark:text-white">
            <tr>
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Task Title</th>
              <th className="p-3 text-left">Budget ($)</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr
                  key={task._id}
                  className="border-t"
                >
                  <td className="p-3">{task.userName}</td>
                  <td className="p-3">{task.category}</td>
                  <td className="p-3">{task.taskTitle}</td>
                  <td className="p-3 font-semibold text-blue-600 dark:text-white">
                    ${task.budget}
                  </td>
                  <td className="p-3 space-x-2">
                    <Link to={`/updateTask/${task._id}`}>
                      <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="px-3 py-1 my-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleViewBids(task._id)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md"
                    >
                      Bids
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-4 text-center text-gray-500 font-medium"
                >
                  You haven't posted any tasks yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <dialog id="bid_modal" className="modal">
        <div className="modal-box dark:bg-gray-600 dark:text-white dark:border dark:border-white">
          <h3 className="font-bold text-lg mb-2 ">Bids for This Task</h3>
          <p className="text-gray-700 dark:text-white">
            Total Bids:{" "}
            <span className="text-blue-600 font-semibold dark:text-white">
              {bidCountInModal}
            </span>
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyPostedTasks;

