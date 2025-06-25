import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; // fixed import
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUser, loginWithGoogle } =
    useContext(AuthContext);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
    if (password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }
    return errors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const errors = validatePassword(password);
    if (errors.length > 0) {
      setPasswordErrors(errors);
      return;
    } else {
      setPasswordErrors([]);
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "Congratulations!",
          text: "You have registered successfully!",
          icon: "success",
        });
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            setError(errorCode);
            toast.error("Update User failed: " + errorCode);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast.error("Create User has failed: " + errorCode);
      });
  };
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("You have logged in with Google successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast.error("Google login failed: " + errorCode);
      });
  };

  return (
    <div className="flex justify-center items-center pb-8 dark:bg-gray-800">
      <div className="card bg-base-100 mx-4 w-full max-w-sm py-5 dark:bg-gray-800 dark:text-white dark:border dark:border-white">
        {/* <Helmet>
          <title>Event Explorer | Register</title>
        </Helmet> */}
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label dark:text-white">Name</label>
            <input
              name="name"
              type="text"
              className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white"
              placeholder="Name"
            />
            <label className="label dark:text-white">Email</label>
            <input
              name="email"
              type="email"
              className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white"
              placeholder="Email"
            />

            <label className="label dark:text-white">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white"
              placeholder="Photo URL"
            />

            <label className="label dark:text-white">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white"
                placeholder="Password"
              />
              <button
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="btn btn-xs absolute top-2 right-6"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordErrors.length > 0 && (
              <ul className="text-xs text-error mt-1 list-disc list-inside">
                {passwordErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit"
              className="btn bg-[#009fff] text-white mt-4 hover:bg-[#007dff]  transition duration-200 "
            >
              Register
            </button>

            <p className="font-semibold text-center pt-5">
              Already Have an Account?{" "}
              <Link className="text-[#009dff]" to={"/auth/login"}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
        <div className="flex items-center">
          <div className="w-full border-t border-[#00aaff] dark:border-white my-6"></div>
          <p className="px-2">OR</p>
          <div className="w-full border-t border-[#00aaff] dark:border-white my-6"></div>
        </div>

        <button
          onClick={handleLoginWithGoogle}
          type="button"
          className="btn bg-[#009fff] text-white w-10/12 mx-auto hover:bg-[#007dff] transition duration-200"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
