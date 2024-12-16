"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import MovieList from "../components/MovieList/MoveList";
import { createClient } from "../supabase/client";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

export default function ProtectedPage() {
	const supabase = createClient();
	const [loading, setLoading] = useState(true);

	async function checkLoggedIn() {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data?.user) {
			redirect("/");
		} else {
			setLoading(false);
		}
		console.log(data);
	}

	async function logOut() {
		let { error } = await supabase.auth.signOut();
		console.log(error);
		if (!error) {
			redirect("/");
		}
	}

	useEffect(() => {
		checkLoggedIn();
	}, []);

	if (loading) {
		return (
			<section className="flex flex-col justify-center items-center h-screen bg-tertiary text-black px-4">
				<CircularProgress />
				<p className="mt-4 text-center"></p>
			</section>
		);
	}

	return (
		<>
			<header className="flex flex-col sm:flex-row justify-between items-center p-6 bg-primary text-white shadow-md">
				<Link
					href="/"
					className="text-lg sm:text-xl hover:underline mb-4 sm:mb-0"
				>
					Go back home
				</Link>
				<button
					onClick={logOut}
					className="bg-blue-400 px-4 py-2 rounded-md w-fit hover:bg-blue-500 transition duration-300"
				>
					Logout
				</button>
			</header>
			<main className="bg-secondary text-white min-h-screen p-4 sm:p-8">
				<MovieList />
			</main>
		</>
	);
}
