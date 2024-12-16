/** @type {import('tailwindcss').Config} */
export default {
	content: ["./components/**/*.js", "./app/**/*.js"],
	theme: {
		extend: {
			colors: {
				primary: "#2A3439",
				secondary: "#36454F",
				tertiary: "#D3D3D3",
			},
			fontSize: {
				sm: "0.875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
			},
			spacing: {
				18: "4.5rem",
			},
		},
	},
	plugins: [],
};
