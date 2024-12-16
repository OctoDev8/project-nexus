"use client";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";

const endpoint = process.env.OMDB_ENDPOINT;

export default function MovieList() {
	const [value, setValue] = useState("");
	const [getMovie, setGetMovies] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	async function handleSubmit(e) {
		e.preventDefault();
		const url = `https://www.omdbapi.com/?t=${value}&apikey=7fb4cbbd`;

		const { data } = await axios.get(url);
		if (!data || data.Response === "False") {
			setGetMovies(null);
			return;
		}
		setGetMovies(data);
	}

	useEffect(() => {
		console.log("Updated movie data:", getMovie);
	}, [getMovie]);

	return (
		<>
			<div className="flex flex-col lg:flex-row lg:items-start justify-between lg:space-x-8 px-4 lg:mt-0">
				<div className="w-full lg:w-1/3">
					<SearchBar
						value={value}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
					{getMovie === null && (
						<Typography className="text-lg text-white mt-2 lg:ml-0 ml-[3rem]">
							No movie found, try a different search!
						</Typography>
					)}
				</div>
				<div className="w-full lg:w-2/3 lg:items-start">
					{getMovie ? (
						<Card className="max-w-full lg:max-w-2xl p-6 bg-white shadow-lg rounded-lg w-full">
							<div className="flex flex-col items-center">
								<img
									src={getMovie.Poster}
									alt="Poster"
									className="w-64 h-auto rounded-lg mb-4"
								/>
								<Typography
									variant="h4"
									className="text-2xl font-semibold text-primary mb-2"
								>
									{getMovie.Title} ({getMovie.Year})
								</Typography>
								<Typography className="text-lg text-secondary mb-2">
									Director: {getMovie.Director}
								</Typography>
								<Typography className="text-lg text-secondary mb-2">
									Actors: {getMovie.Actors}
								</Typography>
								<Typography className="text-lg text-secondary mb-2">
									Plot: {getMovie.Plot}
								</Typography>
								<Typography className="text-lg text-secondary mb-2">
									IMDb Rating: {getMovie.imdbRating}
								</Typography>
							</div>
						</Card>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
}
