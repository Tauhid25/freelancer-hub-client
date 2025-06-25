import React from "react";
import logoImg from "../assets/brandLogo.png";
import { NavLink } from "react-router"; // fixed import
import {
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-[#009fff] border-b-2 dark:text-white dark:border-white" : "text-black dark:text-white";

  return (
    <div className="bg-gray-100 px-6 sm:px-10 md:px-16 dark:bg-gray-800 dark:text-white">
      <div className="w-full border-t border-[#009fff] dark:border-white" />
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10">
        {/* Logo Section */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <div className="flex items-center gap-3">
            <img className="w-10" src={logoImg} alt="Event Logo" />
            <h2 className="text-2xl font-bold">
              <a data-tooltip-id="my-tooltip" data-tooltip-content="Since 1992">
                Freelance Hub
              </a>
            </h2>
            <Tooltip
              id="my-tooltip"
              style={{ backgroundColor: "rgb(0,170,255)", color: "#222" }}
            />
          </div>
          <div className="text-sm leading-relaxed pt-4">
            <p>Email: support@freelancehub.com</p>
            <p>Phone: +1 (234) 567-8901</p>
            <p>Address: 123 Freedom St, Tech City, Bangladesh</p>
          </div>
          
        </div>

        {/* Company Links */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <h3 className="text-lg font-bold pb-3">Company</h3>
          <ul className="space-y-1">
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
        </div>

        {/* Legal Links */}
        <div className="lg:col-span-3 text-center lg:text-left md:-mt-12 lg:mt-0">
          <h3 className="text-lg font-bold pb-3">Legal</h3>
          <ul className="space-y-1">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <h3 className="text-lg font-bold pb-3">Social Media</h3>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="https://web.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="text-blue-600 hover:scale-110 transition dark:text-white"
                size={28}
              />
            </a>
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter
                className="text-black hover:scale-110 transition dark:text-white"
                size={28}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-blue-700 hover:scale-110 transition dark:text-white"
                size={28}
              />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="text-red-600 hover:scale-110 transition dark:text-white"
                size={28}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#009fff] my-6 dark:border-white" />
      <div className="text-center pb-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} - All rights reserved by Freelancer
          Hub Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;


