import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import { Languages } from './pages/languages';
import { Technologies } from './pages/technologies';
import { SoftSkills } from './pages/softskills';
import { GameDev } from './pages/gamedev';
import { Navigation } from './components/navigation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/languages',
    element: <Languages/>,
  },
  {
    path: '/technologies',
    element: <Technologies/>
  },
  {
    path: '/softskills',
    element: <SoftSkills/>
  },
  {
    path: '/gamedevelopment',
    element: <GameDev/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
