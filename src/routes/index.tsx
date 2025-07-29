import { createFileRoute } from "@tanstack/react-router";
// import logo from "../logo.svg";

import "@/styles/index.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="about">
			<p>
				~ Recent Software Engineering graduate (BEng) from Concordia University.
			</p>
			<p>
				~ Currently interested in full-stack webdev, and exploring rabbit holes
				related to frontend, backend, databases, and AWS.
			</p>
			<p>~ Below are my current skills</p>
			<div className="skills-container">
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
					alt="JavaScript"
					title="JavaScript"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
					alt="TypeScript"
					title="TypeScript"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
					alt="Node.js"
					title="Node.js"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
					alt="HTML"
					title="HTML"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
					alt="CSS"
					title="CSS"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
					alt="PostgreSQL"
					title="PostgreSQL"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
					alt="React"
					title="React"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
					alt="Express.js"
					title="Express.js"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain-wordmark.svg"
					alt="Fastify"
					title="Fastify"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
					alt="Git"
					title="Git"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
					alt="Tailwind CSS"
					title="Tailwind CSS"
				/>

				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original-wordmark.svg"
					alt="Prisma ORM"
					title="Prisma ORM"
				/>
				<img
					src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
					alt="AWS"
					title="AWS"
				/>
			</div>
		</div>
	);
}
