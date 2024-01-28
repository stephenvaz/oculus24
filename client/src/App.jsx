import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ErrorPage from './Pages/ErrorPage';
import EventsPage from './Pages/EventsPage';
import SponsorsPage from './Pages/SponsorsPage';
import LoginPage from './Pages/LoginPage';
import ContactPage from './Pages/ContactPage';
import DonationPage from './Pages/DonationPage';
import SchedulePage from './Pages/SchedulePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import space from './assets/space1.jpg';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Appear from './animated-components/Appear';
import rocket from './assets/rocket.png';
import ParticleRing from './Components/background/ParticleRing';
import { NavBarv2 } from './Components/Navbarv2';
import { useSelector } from 'react-redux';

function App() {

  const isNavBarOpen = useSelector(state => state.ui.isNavBarOpen)

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        (

          // !isNavBarOpen ?
          <>

            <NavBarv2 />
            {/* <Navbar /> */}

            {!isNavBarOpen && (
              <>
                <ParticleRing />
                <Outlet />
                <Footer />
              </>)}
          </>
          // :
          // <NavBarv2/>
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
          path: '/schedule',
          element: <SchedulePage />,
        },
        {
          path: '/sponsors',
          element: (
            <SponsorsPage />
          ),
        },
        {
          path: '/contact',
          element: (
            <ContactPage />
          ),
        },
        {
          path: '/schedule',
          element: (
            <SchedulePage />
          ),
        },
        {
          path: '/donations',
          element: (
            <DonationPage />
          ),
        },
      ],
    },
  ]);

  return (
    <AnimatePresence >
      <div className="h-screen w-full"
        style={{
          cursor: 'url("https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png")',
        }}
      >


        <div className="h-full w-full">

          <RouterProvider router={router} />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
