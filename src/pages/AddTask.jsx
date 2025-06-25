import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

function AddTask() {
  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        userName: user.displayName || "",
        userEmail: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://freelancer-hub-server.vercel.app/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
         Swal.fire({
          title: "Good job!",
          text: "You have added a new task!",
          icon: "success",
          timer: 2000
        });
          setFormData({
            userName: user.displayName || "",
            userEmail: user.email || "",
            taskTitle: "",
            category: "",
            description: "",
            deadline: "",
            budget: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error submitting task:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while adding the task!",
        });
      });
  };

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 md:px-8 lg:px-0 dark:bg-gray-800 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-2xl mx-auto p-6 sm:p-8 rounded-xl shadow space-y-4 dark:bg-gray-800 dark:text-white dark:border dark:border-white"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          Add New Task
        </h2>

        <div>
          <label className="block mb-1 text-sm font-medium">User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100 text-sm dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100 text-sm dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Task Title</label>
          <input
            type="text"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            placeholder="Task title"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm dark:bg-gray-800 dark:text-white"
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
          <label className="block mb-1 text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded text-sm"
            placeholder="Task details"
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Budget (USD)
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded text-sm"
              placeholder="Estimated budget"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#009fff] text-white py-2 rounded hover:bg-[#007dff] transition text-sm sm:text-base"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;

