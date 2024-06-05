import { useEffect, useRef } from 'react';
import './App.css';
import React from 'react';

function App(){
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
    <div className="App">
      <header>
        <nav>
          <div id="mainnav">
            <a href="/">
              <h1>MyBlog</h1>
            </a>
            <figure id="menubutton" onClick={() => EventClickHandler()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </figure>
          </div>
          <div id="subnav" className="subnavclass">
            <a href="/languages">
              <p>Languages</p>
            </a>
            <a href="/technologies">
              <p>Technologies</p>
            </a>
            <a href="/softskills">
              <p>Soft Skills</p>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div id="content"></div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
