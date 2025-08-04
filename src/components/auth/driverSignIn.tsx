import { Link } from "react-router"; // ✅ Corrected import
import axiosInstance from "../../../utils/axiosInstance";
import React from "react";

export const DriverSignIn = () => {
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log("Driver SignIn Data:", data);

    try {
      const res = await axiosInstance.post(
        `${import.meta.env.VITE_BASE_URL}/driver/signIn`,
        { data },
        { withCredentials: true }
      );
      localStorage.setItem("accessToken", res.data.token);
      console.log("Driver Signed In", res.data);
      window.location.href = "/dashboard";

      // redirect if needed
      // window.location.href = "/driver-dashboard"; 
    } catch (err) {
      console.error("Driver Sign In Failed", err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Driver Sign In</h1>
      <form
        onSubmit={handleSignIn}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign In as Driver
        </button>
      </form>

      <Link to="/signIn" className="block text-center mt-4 text-blue-600">
        Sign In as User
      </Link>
    </div>
  );
};
