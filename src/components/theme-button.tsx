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
	setCurrentTheme: (theme: string) => void;
	bgColor: string;
	textColor: string;
	subColor: string;
	mainColor: string;
}) {
	useEffect(() => {
		const button: HTMLButtonElement | null = document.querySelector(
			`button.${theme}`,
		);
		if (!button) {
			return;
		}
		button.style.backgroundColor = textColor;
		button.style.color = bgColor;

		const bgColorDisplay: HTMLDivElement | null =
			button.querySelector(".background-color");
		if (bgColorDisplay) {
			bgColorDisplay.style.backgroundColor = bgColor;
		}
		const subColorDisplay: HTMLDivElement | null =
			button.querySelector(".sub-color");
		if (subColorDisplay) {
			subColorDisplay.style.backgroundColor = subColor;
		}
		const mainColorDisplay: HTMLDivElement | null =
			button.querySelector(".main-color");
		if (mainColorDisplay) {
			mainColorDisplay.style.backgroundColor = mainColor;
		}
	}, [theme, bgColor, subColor, textColor, mainColor]);

	const handleClick = () => {
		const oldTheme = localStorage.getItem("color") ?? "camping";
		const root = document.querySelector("html");
		root?.classList.remove(oldTheme);

		// add new theme
		localStorage.setItem("color", theme);
		root?.classList.add(theme);
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
