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
			return <p>No movies found, try a different movie!</p>;
		}
		setGetMovies(data);
	}

	useEffect(() => {
		console.log("Updated movie data:", getMovie);
	}, [getMovie]);

	return (
		<>
			<SearchBar
				value={value}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			{getMovie ? (
				<Card>
					<Typography variant="h4">
						{getMovie.Title} ({getMovie.Year})
					</Typography>
					<img src={getMovie.Poster} alt="Poster" style={{ width: "200px" }} />
					<Typography>Director: {getMovie.Director}</Typography>
					<Typography>Actors: {getMovie.Actors}</Typography>
					<Typography>Plot: {getMovie.Plot}</Typography>
					<Typography>IMDb Rating: {getMovie.imdbRating}</Typography>
				</Card>
			) : (
				<Typography>No movie found, try a different search!</Typography>
			)}
		</>
	);
}
