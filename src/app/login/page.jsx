"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const authToken = document.cookie.includes("authToken");
    const isLoggedIn = document.cookie.includes("isLoggedIn=true");

    if (authToken && isLoggedIn) {
      router.push("/profile");
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedAuthToken = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("authToken="))
      ?.split("=")[1];

    if (storedAuthToken) {
      const parsedToken = JSON.parse(decodeURIComponent(storedAuthToken));

      if (
        user.email === parsedToken.email &&
        user.password === parsedToken.password
      ) {
        document.cookie = `authToken=${JSON.stringify(
          parsedToken
        )}; path=/; max-age=${60 * 60 * 24 * 7}`;
        document.cookie = `isLoggedIn=true; path=/; max-age=${
          60 * 60 * 24 * 7
        }`;

        toast.success("Login successful");
        router.push("/profile");
      } else {
        toast.error("Invalid email or password");
      }
    } else {
      toast.error("No account found. Please sign up first.");
    }
  };

  const gotoSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="px-4 py-12">
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 border border-blue-400 hover:shadow-md hover:shadow-green-400">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-6">
          Login to Your Account
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
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={gotoSignup}
            className="text-blue-500 hover:underline font-medium"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
