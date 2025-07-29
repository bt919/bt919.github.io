import { createFileRoute } from "@tanstack/react-router";

import "@/styles/projects.css";
import { Carousel } from "@/components/carousel";
import Logo from "../logo.svg";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Carousel srcList={[Logo, Logo, Logo]} />
		</div>
	);
}
