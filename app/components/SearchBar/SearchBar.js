"use client";
import { Input, Button } from "@mui/material";

export default function SearchBar({ value, handleChange, handleSubmit }) {
	return (
		<section className="flex justify-center mt-8 w-full px-4">
			<form
				onSubmit={handleSubmit}
				className="flex items-center gap-4 w-full max-w-md sm:max-w-lg bg-primary p-4 rounded-lg shadow-lg"
			>
				<div className="bg-white p-4 rounded-lg flex items-center gap-4 w-full">
					<Input
						value={value}
						onChange={handleChange}
						className="px-4 py-2 rounded-md border border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-black w-full"
						placeholder="Search for a movie!"
					/>
					<Button
						type="submit"
						className="bg-blue-400 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition duration-300"
					>
						Search
					</Button>
				</div>
			</form>
		</section>
	);
}
