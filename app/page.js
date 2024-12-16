"use client";
import { Container } from "@mui/material";
import { login, signup } from "./login/actions";

export default function Home() {
	return (
		<Container className="flex justify-center items-center min-h-screen px-4">
			<div className="bg-primary p-8 rounded-xl shadow-lg w-full max-w-lg">
				<header className="mb-8 text-center">
					<h1 className="text-3xl sm:text-4xl font-semibold text-white">
						Welcome to Project Nexus!
					</h1>
				</header>
				<form className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<label htmlFor="email" className="text-lg font-medium">
							Email:
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							className="px-4 py-2 rounded-md border border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-black"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="password" className="text-lg font-medium">
							Password:
						</label>
						<input
							id="password"
							name="password"
							type="password"
							required
							className="px-4 py-2 rounded-md border border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-black"
						/>
					</div>

					<div className="flex justify-between gap-4 mt-6">
						<button
							type="submit"
							formAction={login}
							className="bg-blue-400 text-white py-2 px-6 rounded-md w-full sm:w-auto hover:bg-blue-500 transition duration-300"
						>
							Log In
						</button>
						<button
							type="submit"
							formAction={signup}
							className="bg-green-700 text-white py-2 px-6 rounded-md w-full sm:w-auto hover:bg-green-800 transition duration-300"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</Container>
	);
}
