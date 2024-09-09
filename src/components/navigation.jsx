import { useRef, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export const Navigation = () => {
    const menuButton = useRef(null);
    const subnav = useRef(null);

    useEffect(() => {
        menuButton.current = document.getElementById("menubutton");
        subnav.current = document.getElementById("subnav");
        window.addEventListener('resize', EventResizeHandler);
        EventResizeHandler();
    }, [])

    const EventClickHandler = () => {
        if (subnav.current?.classList.contains('remove-div')) {
            subnav.current?.classList.remove('remove-div');
        } else {
            subnav.current?.classList.add('remove-div');
        };
    };
    const EventResizeHandler = () => {
        if (window.innerWidth > 600) {
            subnav.current?.classList.remove('remove-div');
            menuButton.current?.classList.add('remove-div');
        } else {
            subnav.current?.classList.add('remove-div');
            menuButton.current?.classList.remove('remove-div');
        };
    };

    return (
        <>
            <header>
                <nav>
                    <div id="mainnav">
                        {/* <a href="/LearningBlog/">
                            <h1>Gabriel's Blog</h1>
                        </a> */}
                        <Link to='/'>
                            <h1>Gabriel's Blog</h1>
                        </Link>
                        <figure id="menubutton" onClick={() => EventClickHandler()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </figure>
                    </div>
                    <div id="subnav" className="subnavclass">
                        {/* <a href="/LearningBlog/languages">
                            <p>Languages</p>
                            </a>
                            <a href="/LearningBlog/technologies">
                            <p>Technologies</p>
                            </a>
                            <a href="/LearningBlog/softskills">
                            <p>Soft Skills</p>
                            </a>
                            <a href="/LearningBlog/gamedevelopment">
                            <p>Game Development</p>
                        </a> */}
                        <Link to='/languages'>
                            <p>Languages</p> 
                        </Link>
                        <Link to='/technologies'>
                            <p>Technologies</p> 
                        </Link>
                        <Link to='/softskills'>
                            <p>Soft Skills</p> 
                        </Link>
                        <Link to='/learn'>
                            <p>Aprender</p> 
                        </Link>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </>
    )
}