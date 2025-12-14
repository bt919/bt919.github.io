import { linkOptions, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import "@/styles/nav-bar.css";

const options = linkOptions([
	{
		to: "/",
		label: "About",
	},
	{
		to: "/projects",
		label: "Projects",
	},
	{
		to: "/themes",
		label: "Themes",
	},
	{
		to: "/contact",
		label: "Contact",
	},
]);

export function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("color") ?? "camping";
        const root = document.querySelector("html");
        root?.classList.add(theme);
    });

	return (
		<div className="header-nav">
			<header>
				<h1>Franky Corby</h1>
				<a href="https://google.com" target="_blank" rel="noreferrer">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
						alt="github repo"
						className="github-icon"
					/>
				</a>

				<a href="https://google.com" target="_blank" rel="noreferrer">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
						alt="linkedin profile"
						className="linkedin-icon"
					/>
				</a>
			</header>

			<div className="menu">
				<button type="button" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="close-icon"
						>
							<title>close menu</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="menu-icon"
						>
							<title>menu</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
							/>
						</svg>
					)}
				</button>
			</div>

			<nav className={` ${isOpen ? "visible" : ""}`}>
				<div className="nav-items">
					{options.map((option) => {
						return (
							<Link
								{...option}
								key={option.to}
								activeProps={{ className: "active-nav-item" }}
							>
								{option.label}
							</Link>
						);
					})}
				</div>
			</nav>
		</div>
	);
}
