import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<p>~ Get in touch at barthan.thiru@gmail.com or through LinkedIn</p>
		</div>
	);
}
