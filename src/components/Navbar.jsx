import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/brandLogo.png";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import DarkMoodToggler from "./DarkMoodToggler";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("You have logged out successfully!");
        setTimeout(() => {
          navigate("/");
        }, 100);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout failed. Please try again.");
      });
  };

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-[#007dff] dark:text-white border-b-2" : "text-black dark:text-white";

  return (
    <div className="px-4 md:px-12 lg:px-16 bg-gray-100 py-4 md:py-6 dark:bg-gray-800 dark:text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="logo" className="h-10" />
          <h1 className="text-2xl md:text-3xl font-bold"><a data-tooltip-id="my-tooltip" data-tooltip-content="Since 1992">Freelance Hub</a></h1>
          <Tooltip id="my-tooltip" style={{ backgroundColor: "rgb(0,170,255)", color: "#222" }} />
        </div>

        {/* Hamburger menu (Mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu items (Desktop) */}
        <ul className="hidden lg:flex items-center gap-8 text-lg">
          <li>
            <NavLink className={navLinkClasses} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClasses} to="/addTask">
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClasses} to="/browseTasks">
              Browse Tasks
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClasses} to="/myPostedTasks">
              My Posted Tasks
            </NavLink>
          </li>
        </ul>

        {/* Emergency Button (hidden on small) */}
        <div className="hidden lg:block">
          <div className="hidden lg:flex items-center gap-8 text-lg">
            {user && (
              <div className="relative group w-fit">
                <img
                  className="w-12 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName}
                />
                <div className="absolute bottom-1 right-6 -translate-x-1/2 bg-[#009fff] text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName}
                </div>
              </div>
            )}

            {user && (
              <button
                onClick={handleLogout}
                className="bg-[#009fff] text-white px-4 py-1 rounded-lg text-lg hover:bg-[#007dff]"
              >
                Logout
              </button>
            )}

            {!user && (
              <Link to="/auth/login">
                <button className="bg-[#009fff] text-white px-4 py-1 rounded-lg text-lg hover:bg-[#007dff]">
                  LogIn
                </button>
              </Link>
            )}
            {!user && (
              <Link to="/auth/register">
                <button className="bg-[#009fff] text-white px-4 py-1 rounded-lg text-lg hover:bg-[#007dff]">
                  Register
                </button>
              </Link>
            )}
            <DarkMoodToggler />
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <ul className="lg:hidden mt-4 space-y-4 text-lg px-2">
          <li>
            <NavLink className={navLinkClasses} to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navLinkClasses}
              to="/addTask"
              onClick={toggleMenu}
            >
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navLinkClasses}
              to="/browseTasks"
              onClick={toggleMenu}
            >
              Browse Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navLinkClasses}
              to="/myPostedTasks"
              onClick={toggleMenu}
            >
              My Posted Tasks
            </NavLink>
          </li>

          <div className="lg:hidden">
            <div>
              {user && (
                <div className="relative group w-fit pt-2 pb-4">
                  <img
                    className="w-12 rounded-full"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                  <div className="absolute bottom-1 right-4 -translate-x-1/2 bg-[#009fff] text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {user.displayName}
                  </div>
                </div>
              )}

              {user && (
                <button
                  onClick={handleLogout}
                  className="bg-[#009dff] text-white px-4 py-1 rounded-lg text-lg hover:bg-[#007dff]"
                >
                  Logout
                </button>
              )}
             <div className="flex flex-col lg:flex-row gap-4">
               {!user && (
                <Link to="/auth/login">
                  <button className="bg-[#009dff] text-white px-4 py-1 rounded-lg text-lg hover:bg-[#007dff] mr-4">
                    LogIn
                  </button>
                </Link>
              )}
              {!user && (
                <Link to="/auth/register">
                  <button className="bg-[#009fff] text-white px-4 py-1 rounded-lg text-lg hover:bg-[#007dff]">
                    Register
                  </button>
                </Link>
              )}
             <div className="mt-4">
               <DarkMoodToggler />
             </div>
             </div>
            </div>
          </div>
        </ul>
      )}
      <div className="w-full border-b border-[#009fff] mt-3 dark:border-white" />
    </div>
  );
};

export default Navbar;
