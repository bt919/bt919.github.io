import { useEffect } from "react";

import "@/styles/theme-button.css";

export function ThemeButton({
	theme,
	setCurrentTheme,
	bgColor,
	textColor,
	subColor,
	mainColor,
}: {
	theme: string;
	setCurrentTheme: () => void;
	bgColor: string;
	textColor: string;
	subColor: string;
	mainColor: string;
}) {
	useEffect(() => {
		const button = document.querySelector(`button.${theme}`);
		if (button) {
			button.style["background-color"] = textColor;
			button.style["color"] = bgColor;
		}
		const bgColorDisplay = button.querySelector(".background-color");
		if (bgColorDisplay) {
			console.log("exists");
			bgColorDisplay.style["background-color"] = bgColor;
		}
		const subColorDisplay = button.querySelector(".sub-color");
		if (subColorDisplay) {
			subColorDisplay.style["background-color"] = subColor;
		}
		const mainColorDisplay = button.querySelector(".main-color");
		if (mainColorDisplay) {
			mainColorDisplay.style["background-color"] = mainColor;
		}
	}, [theme, bgColor, textColor]);

	const handleClick = (e) => {
		const oldTheme = localStorage.getItem("color") ?? "camping";
		const root = document.querySelector("html");
		root?.classList.remove(oldTheme);

		// add new theme
		console.log("adding new theme");
		localStorage.setItem("color", theme);
		root?.classList.add(theme);
		console.log("new theme added");
		setCurrentTheme(theme);
	};

	return (
		<button className={theme} type="button" onClick={handleClick}>
			{theme}
			<div className="background-color" />
			<div className="sub-color" />
			<div className="main-color" />
		</button>
	);
}
