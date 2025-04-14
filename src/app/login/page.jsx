"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    toast.success("Signup successful");
    router.push("/custom-pro-version");
  };

  const gotoLogin = () => {
    router.push("/login");
  };

  return (
    <div className="px-4 py-12">
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 border border-blue-400 hover:shadow-md hover:shadow-green-400">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="text"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="enter the email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="enter the password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={gotoLogin}
            className="text-blue-500 hover:underline font-medium"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
