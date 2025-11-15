import React from "react";

export default function Menu(){
    return (
        <section className="flex dark:text-primary text-zinc-700 w-100/100 md:px-20 px-10 md:py-15 py-10 rounded-xl dark:shadow-dark shadow-light dark:bg-dark bg-light">
            <div>
                <div>
                <span></span>
                <p className="sm:text-3xl text-xl">خانه اینجاست!</p>
                </div>
                <div>
                    <h1 className="md:text-6xl sm:text-4xl text-3xl font-MorabbaBold md:py-10 py-4 md:leading-22 leading-12">
                        طراحی و توسعه فرانت اند با به روز ترین تکنولوژی ها
                    </h1>
                </div>
                <div className="flex flex-col items-center sm:flex-row sm:justify-evenly gap-y-4 sm:gap-x-10 text-2xl font-mono">
                    <div>
                        <a className="flex items-center gap-x-2 text-secondary hover:text-hover " href="mailto:hossein.k777@gmail.com">
                            <div className="w-10 h-10  z-0 cursor-pointer">
                                <svg className="svg-shadow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <span>hossein.k777@gmail.com</span>
                        </a>
                    </div>
                    <div>
                        <a className="flex items-center gap-x-2 text-secondary hover:text-hover " href="tel:+989175134126">
                            <div className="w-10 h-10  z-0 cursor-pointer">
                                <svg className="svg-shadow" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>
                            <span>09175134126</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap flex-2 items-center justify-center gap-x-4 gap-y-3 mx-auto h-max mt-8 p-4 dark:shadow-neg-dark shadow-neg-light rounded-xl">
                    <div className="sm:w-40 sm:h-40 w-20 h-20">
                        <img className="w-full h-full object-contain block" src="/images/HTML.png" alt="" />
                    </div>
                    <div className="sm:w-40 sm:h-40 w-20 h-20">
                        <img className="w-full h-full object-contain block" src="/images/CSS.png" alt="" />
                    </div>
                    <div className="sm:w-40 sm:h-40 w-20 h-20">
                        <img className="w-full h-full object-contain block" src="/images/TAILWIND.png" alt="" />
                    </div>
                    <div className="sm:w-40 sm:h-40 w-20 h-20">
                        <img className="w-full h-full object-contain block" src="/images/JS.png" alt="" />
                    </div>
                    <div className="sm:w-40 sm:h-40 w-20 h-20">
                        <img className="w-full h-full object-contain block" src="/images/REACT.png" alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <span></span>
                        <p></p>
                    </div>
                    <div>
                        <span></span>
                        <p></p>
                    </div>
                </div>
            </div>

        </section>
    )
}