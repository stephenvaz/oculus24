import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ErrorPage from './Pages/ErrorPage';
import EventsPage from './Pages/EventsPage';
import SponsorsPage from './Pages/SponsorsPage';
import LoginPage from './Pages/LoginPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import space from './assets/space1.jpg';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Appear from './animated-components/Appear';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          {/* <Appear> */}
            <Outlet />
          {/* </Appear> */}
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/login',
          element: (
            <LoginPage />
          ),
        },
        {
          path: '/',
          element: (
            <LandingPage />
          ),
        },
        {
          path: '/events',
          element: (
            <EventsPage />
          ),
        },
        {
          path: '/sponsors',
          element: (
            <SponsorsPage />
          ),
        },
      ],
    },
  ]);

  return (
    <AnimatePresence >
      <div className="h-screen w-full">
        <img
          style={{
            height: '100%',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
          src={space}
          alt=""
        />
        <div className="h-full w-full">
          <RouterProvider router={router} />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
