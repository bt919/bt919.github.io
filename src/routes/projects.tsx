import { createFileRoute } from "@tanstack/react-router";

import "@/styles/projects.css";
import { ProjectCard } from "@/components/project-card";
import Logo from "../logo.svg";
import Dwella1 from "../dwella1.jpeg";
import Dwella2 from "../dwella2.jpeg";
import Dwella3 from "../dwella3.jpeg";
import Wordle1 from "../wordle1.jpeg";
import Wordle2 from "../wordle2.jpeg";
import Wordle3 from "../wordle3.jpeg";
import Wordle4 from "../wordle4.jpeg";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="projects-container">
			<ProjectCard
				srcList={[Dwella1, Dwella2, Dwella3]}
				title="Dwella"
				skills={["React", "Node.js", "Express.js", "PostgreSQL"]}
				bulletpoints={[
					"Capstone project consisting of 10 other teammates.",
					"Produced a website to allow renters and leasers to find each other.",
					"Refactored a feature using pagination which greatly reduced data payload and loading times.",
					"Implemented textsearch features using PostgreSQL.",
					"Implemented a real-time chat feature.",
				]}
				githubLink="https://github.com/codepioneerx/dwella"
			/>
			<ProjectCard
				srcList={[Wordle1, Wordle2, Wordle3, Wordle4]}
				title="Wordle Clone"
				skills={[
					"React",
					"TypeScript",
					"Fastify",
					"PostgreSQL",
					"AWS Lambda",
					"AWS Gateway",
					"Tailwind CSS",
					"Cypress",
				]}
				bulletpoints={[
					"Recreated the popular wordle game using React, Fastify, and Tailwind CSS for animations.",
					"Added a new feature which allows users to create their own wordle and send it to friends.",
					"Implemented tests using Cypress which covers the backend, frontend, as well as end-to-end tests.",
					"Hosted the Fastify backend using AWS Lambda, and AWS API Gateway.",
				]}
				githubLink="https://github.com/bt919/wordle"
				demoLink="https://wordle-d6g.pages.dev"
			/>
			<ProjectCard
				srcList={[Logo]}
				title="Condo Management System"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"10-team project that builds a condo management system via a website and mobile app.",
					"Implemented authentication using JsonWebToken (JWT), and bcrypt for hashing passwords.",
					"Implemented database schemas and queries using PostgreSQL.",
					"Implemented various backend endpoints using Express.js.",
				]}
				githubLink="https://github.com/Irisvella/SOEN-390-W2024"
			/>
		</div>
	);
}
