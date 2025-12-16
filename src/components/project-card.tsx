import { Carousel } from "@/components/carousel";
import "@/styles/project-card.css";

export function ProjectCard({
	srcList,
	title,
	skills,
	bulletpoints,
	githubLink,
	demoLink,
}: {
	srcList: string[];
	title: string;
	skills: string[];
	bulletpoints: string[];
	githubLink?: string;
	demoLink?: string;
}) {
	return (
		<div className="project-card">
			<h2>{title}</h2>
			<Carousel srcList={srcList} />
			<div className="skill-section">
				{skills.map((skill) => (
					<p key={skill}>{`~ ${skill}`}</p>
				))}
			</div>
			<div className="separator" />
			<div className="bulletpoints-section">
				{bulletpoints.map((bulletpoint) => (
					<p key={bulletpoint}>{`~ ${bulletpoint}`}</p>
				))}
			</div>
			<div className="links-section">
				{githubLink ? (
					<a
						href={githubLink}
						target="_blank"
						rel="noreferrer"
						title="github repo"
					>
						{" "}
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
							alt="project's github repo"
						/>
					</a>
				) : null}
				{demoLink ? (
					<a href={demoLink} target="_blank" rel="noreferrer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<title>Demo link</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
							/>
						</svg>
					</a>
				) : null}
			</div>
		</div>
	);
}
