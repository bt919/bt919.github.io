import { createFileRoute } from "@tanstack/react-router";

import "@/styles/projects.css";
import { ProjectCard } from "@/components/project-card";
import { Carousel } from "@/components/carousel";
import Logo from "../logo.svg";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="projects-container">
			<ProjectCard
				srcList={[Logo, Logo, Logo]}
				title="Da Project"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
				]}
				githubLink="https://www.google.com"
				demoLink="https://www.google.com"
			/>
			<ProjectCard
				srcList={[Logo, Logo, Logo]}
				title="Da Project"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
				]}
				githubLink="https://www.google.com"
				demoLink="https://www.google.com"
			/>
			<ProjectCard
				srcList={[Logo, Logo, Logo]}
				title="Da Project"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
				]}
				githubLink="https://www.google.com"
				demoLink="https://www.google.com"
			/>
			<ProjectCard
				srcList={[Logo, Logo, Logo]}
				title="Da Project"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
				]}
				githubLink="https://www.google.com"
				demoLink="https://www.google.com"
			/>
			<ProjectCard
				srcList={[Logo, Logo, Logo]}
				title="Da Project"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
				]}
				githubLink="https://www.google.com"
				demoLink="https://www.google.com"
			/>
			<ProjectCard
				srcList={[Logo, Logo, Logo]}
				title="Da Project"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
				]}
				githubLink="https://www.google.com"
				demoLink="https://www.google.com"
			/>
			<ProjectCard
				srcList={[Logo, Logo, Logo]}
				title="Da Project"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
				]}
				githubLink="https://www.google.com"
				demoLink="https://www.google.com"
			/>
			<ProjectCard
				srcList={[Logo, Logo, Logo]}
				title="Da Project"
				skills={[
					"React",
					"TypeScript",
					"Express.js",
					"Prisma ORM",
					"PostgreSQL",
					"Tailwind CSS",
				]}
				bulletpoints={[
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
					"Worked across the stack in a 11-person project",
				]}
				githubLink="https://www.google.com"
				demoLink="https://www.google.com"
			/>
		</div>
	);
}
