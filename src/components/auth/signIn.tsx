// import axios from "axios";
import { Link } from "react-router";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";

export const SignIn = () => {
	const handleSignIn = async (e: React.FormEvent) => {
		try {
			e.preventDefault();
			const formData = new FormData(e.target as HTMLFormElement);
			const data = Object.fromEntries(formData);
			console.log(data);
			console.log("Base URL:", import.meta.env.VITE_BASE_URL);
			const res = await axiosInstance.post(
				`${import.meta.env.VITE_BASE_URL}/signIn`,
				{ data },
				{ withCredentials: true }
			);
			localStorage.setItem("accessToken", res.data.token);
            window.location.href = "/";
		} catch (err) {
			console.log(err);
			toast.error("Sign In Failed");
		}
	};
	return (
		<div>
			<h1 className="text-3xl font-bold text-center my-8">Sign In</h1>
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
					/>
				</div>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
				>
					Sign In
				</button>
			</form>
			<Link to="/driverSignIn" className="block text-center mt-4">
				Sign In as Driver
			</Link>
		</div>
	);
};
