import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const { login, loginWithGoogle, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("You have logged in successfully!");
        // navigate(`${location.state ? location.state : "/"}`);
        setTimeout(() => {
          navigate(location.state ? location.state : "/");
        }, 100);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast.error("Login failed: " + errorCode);
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("You have logged in with Google successfully!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        toast.error("Google login failed: " + errorCode);
      });
  };

  return (
    <div className="flex justify-center items-center pb-8 dark:bg-gray-800 dark:text-white">
      <div className="card bg-base-100 mx-4 w-full max-w-sm py-5 dark:bg-gray-800 dark:text-white dark:border dark:border-white">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label dark:text-white">Email</label>
            <input
              name="email"
              type="email"
              className="input dark:bg-gray-800 dark:text-white dark:border dark:border-white"
              placeholder="Email"
              required
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
            <div>
              <p>Forgot password?</p>
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit"
              className="btn bg-[#009fff] text-white w-[96%] mt-4 hover:bg-[#007dff] transition duration-200"
            >
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Don't Have an Account ?{" "}
              <Link className="text-[#009dff]" to={"/auth/register"}>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
        <div className="flex items-center">
          <div className="w-full border-t border-[#00aaff] dark:border-white my-6"></div>
          <p className="px-2">OR</p>
          <div className="w-full border-t border-[#00aaff]  dark:border-white my-6"></div>
        </div>
        <button
          onClick={handleLoginWithGoogle}
          type="submit"
          className="btn bg-[#009fff] text-white w-[88%] mx-auto my-2 hover:bg-[#007dff] transition duration-200"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
