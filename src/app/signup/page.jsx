"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import userImage from "../../../public/user.png";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const isAuthToken = document.cookie.includes("authToken");
    const isLoggedIn = document.cookie.includes("isLoggedIn");
    if (isAuthToken && isLoggedIn) {
      router.push("/profile");
    }
  }, [router]);

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setUser({ ...user, confirmPassword });

    if (confirmPassword !== user.password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.username ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const newUserData = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    document.cookie = `authToken=${JSON.stringify(
      newUserData
    )}; path=/; max-age=${60 * 60 * 24 * 7}`;

    setError("");
    toast.success("Successfully signed up");

    router.push("/login");
  };

  return (
    <div className="px-4 py-6 sm:py-12">
      <div className="relative flex flex-col justify-center items-center w-full max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-8 gap:-2 xl:gap-4">
        <div className="flex flex-col justify-center items-center w-full mb-4">
          <Image src={userImage} alt="user" className="w-[60px]" />
          <p className="text-xl sm:text-2xl">Create your account</p>
        </div>

        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          {/* Username input */}
          <label htmlFor="username" className="text-sm sm:text-base">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={user.username}
            className="h-[40px] sm:h-[45px] border rounded-sm p-2 sm:p-3 text-sm sm:text-base"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          {/* Email input */}
          <label htmlFor="email" className="text-sm sm:text-base">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={user.email}
            className="h-[40px] sm:h-[45px] border rounded-sm p-2 sm:p-3 text-sm sm:text-base"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          {/* Password input */}
          <label htmlFor="password" className="text-sm sm:text-base">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            className="h-[40px] sm:h-[45px] border rounded-sm p-2 sm:p-3 text-sm sm:text-base"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          {/* Confirm password input */}
          <label htmlFor="cnfpassword" className="text-sm sm:text-base">
            Confirm Password
          </label>
          <input
            type="password"
            id="cnfpassword"
            value={user.confirmPassword}
            className="h-[40px] sm:h-[45px] border rounded-sm p-2 sm:p-3 text-sm sm:text-base"
            onChange={handleConfirmPassword}
          />

          {/* Error message */}
          <h1 className="text-xs sm:text-sm text-red-500">{error}</h1>

          {/* Signup button */}
          <button
            type="submit"
            className="border-2 p-2 sm:p-3 bg-blue-500 mt-3 hover:bg-green-600 text-white transition-all duration-500 ease-in-out rounded-sm text-sm sm:text-base"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
