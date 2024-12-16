"use client";

import { Container } from "@mui/material";
import { login, signup } from "./login/actions";

export default function Home() {
	return (
		<Container className="flex justify-center items-center min-h-screen px-4">
			<div className="bg-primary text-white p-8 rounded-md shadow-lg w-full max-w-lg">
				<header className="mb-8 text-center">
					<h1 className="text-3xl font-semibold">Welcome to Project Nexus!</h1>
				</header>
				<form className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<label htmlFor="email" className="text-lg">
							Email:
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							className="px-4 py-2 rounded-md border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="password" className="text-lg">
							Password:
						</label>
						<input
							id="password"
							name="password"
							type="password"
							required
							className="px-4 py-2 rounded-md border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>

					<div className="flex justify-between gap-4 mt-6">
						<button
							type="submit"
							formAction={login}
							className="bg-blue-400 text-white py-2 px-6 rounded-md w-full hover:bg-blue-500 transition"
						>
							Log In
						</button>
						<button
							type="submit"
							formAction={signup}
							className="bg-green-400 text-white py-2 px-6 rounded-md w-full hover:bg-green-500 transition"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</Container>
	);
}
