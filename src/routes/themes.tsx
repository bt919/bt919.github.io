import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import "@/styles/themes.css";
import { ThemeButton } from "@/components/theme-button";

export const Route = createFileRoute("/themes")({
	component: RouteComponent,
});

function RouteComponent() {
	const [currentTheme, setCurrentTheme] = useState("");

	useEffect(() => {
		const theme = localStorage.getItem("color") ?? "camping";
		setCurrentTheme(theme);
	});

	return (
		<div className="themes-container">
			<h3>The current theme is {currentTheme}!</h3>
			<div className="buttons-container">
				<ThemeButton
					theme="camping"
					setCurrentTheme={setCurrentTheme}
					bgColor={"#faf1e4"}
					textColor={"#3c403b"}
					subColor={"#c2b8aa"}
					mainColor={"#618c56"}
				/>
				<ThemeButton
					theme="onedark"
					setCurrentTheme={setCurrentTheme}
					bgColor={"#2f343f"}
					textColor={"#98c379"}
					subColor={"#eceff4"}
					mainColor={"#61afef"}
				/>
			</div>
		</div>
	);
}
