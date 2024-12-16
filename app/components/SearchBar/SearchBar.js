"use client";
import { Input } from "@mui/base/Input";
import { Button } from "@mui/base/Button";

export default function SearchBar({ value, handleChange, handleSubmit }) {
	return (
		<section>
			<form onSubmit={handleSubmit}>
				<Input value={value} onChange={handleChange} />
				<Button type="submit">Search</Button>
			</form>
		</section>
	);
}
