import React from "react";
import MainMenu from "../main-menu/main-menu.jsx"
import ThemeToggle from "../theme-toggle/theme.jsx";

export default function Header(){
    return (
        <section className="flex flex-col w-100/100 gap-y-6 dark:text-muted text-zinc-800 dark:bg-dark bg-light">
            <section className="lg:flex hidden items-center justify-between w-100/100 h-22 rounded-xl dark:shadow-dark shadow-light">
                <div className="flex items-center gap-x-10 mr-10 text-xl">
                    <div className="w-10 h-10 dark:hover:text-primary hover:text-zinc-500">
                        <a href="">
                            <svg className="svg-shadow" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="flex items-center gap-x-10 *:dark:hover:text-primary *:hover:text-zinc-500">
                        <div>
                            <a href="">خانه</a>
                        </div>
                        <div>
                            <a href="">ارتباط با من</a>
                        </div>
                    </div>
                </div>
                <div className="w-10 h-10 ml-4 z-0 dark:hover:text-primary hover:text-zinc-500 cursor-pointer">
                    <ThemeToggle />
                </div>
            </section>
            <MainMenu></MainMenu>
        </section>
    )
}