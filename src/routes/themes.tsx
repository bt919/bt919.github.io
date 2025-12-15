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
                    setCurrentTheme={(theme: string) => setCurrentTheme(theme)}
                    bgColor={"#faf1e4"}
                    textColor={"#3c403b"}
                    subColor={"#c2b8aa"}
                    mainColor={"#618c56"}
                />
                <ThemeButton
                    theme="onedark"
                    setCurrentTheme={(theme: string) => setCurrentTheme(theme)}
                    bgColor={"#2f343f"}
                    textColor={"#98c379"}
                    subColor={"#eceff4"}
                    mainColor={"#61afef"}
                />

                <ThemeButton
                    theme="superuser"
                    setCurrentTheme={(theme: string) => setCurrentTheme(theme)}
                    bgColor={"#262a33"}
                    textColor={"#e5f7ef"}
                    subColor={"#526777"}
                    mainColor={"#43ffaf"}
                />
                <ThemeButton
                    theme="retro"
                    setCurrentTheme={(theme: string) => setCurrentTheme(theme)}
                    bgColor={"#dad3c1"}
                    textColor={"#1d1b17"}
                    subColor={"#918b7d"}
                    mainColor={"#1d1b17"}
                />
                <ThemeButton
                    theme="dracula"
                    setCurrentTheme={(theme: string) => setCurrentTheme(theme)}
                    bgColor={"#282a36"}
                    textColor={"#f8f8f2"}
                    subColor={"#6272a4"}
                    mainColor={"#bd93f9"}
                />
                <ThemeButton
                    theme="taro"
                    setCurrentTheme={(theme: string) => setCurrentTheme(theme)}
                    bgColor={"#b3baff"}
                    textColor={"#130f1a"}
                    subColor={"#6f6c91"}
                    mainColor={"#130f1a"}
                />
            </div>
        </div>
    );
}
