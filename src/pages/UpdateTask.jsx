import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

function UpdateTask() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const task = useLoaderData(); // Loaded task from route loader
  

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    taskTitle: "",
    category: "",
    description: "",
    deadline: "",
    budget: "",
  });

  const categories = [
    "Web Development",
    "Design",
    "Writing",
    "Marketing",
    "SEO",
    "Video Editing",
  ];

  // Pre-fill form with task and user data
  useEffect(() => {
    if (task && user) {
      setFormData({
        userName: user.displayName || task.userName || "",
        userEmail: user.email || task.userEmail || "",
        taskTitle: task.taskTitle || "",
        category: task.category || "",
        description: task.description || "",
        deadline: task.deadline || "",
        budget: task.budget || "",
      });
    }
  }, [task, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://freelancer-hub-server.vercel.app/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Updated!",
            text: "Task updated successfully!",
          });
          navigate("/myPostedTasks"); // redirect if needed
        }
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while updating the task!",
        });
      });
  };

  return (
  <div className="dark:bg-gray-800 pb-4">
      <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 border rounded-xl shadow space-y-4 dark:bg-gray-800 dark:text-white"
    >
      <h2 className="text-xl font-semibold text-center">Update Task</h2>

      <div>
        <label className="block mb-1">User Name</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          readOnly
          className="w-full border px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label className="block mb-1">User Email</label>
        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          readOnly
          className="w-full border px-3 py-2 rounded bg-gray-100 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label className="block mb-1">Task Title</label>
        <input
          type="text"
          name="taskTitle"
          value={formData.taskTitle}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:text-white"
          required
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          rows="4"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Deadline</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Budget (USD)</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#009fff] text-white py-2 rounded hover:bg-[#007dff] transition"
      >
        Update Task
      </button>
    </form>
  </div>
  );
}

export default UpdateTask;



