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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='h-full w-full'
          >
            <Outlet />
          </motion.div>
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/login',
          element: (
            // <motion.div
            //   initial={{ opacity: 0 }}
            //   animate={{ opacity: 1 }}
            //   exit={{ opacity: 0 }}
            // >
            <LoginPage />
            // </motion.div>
          ),
        },
        {
          path: '/',
          element: (
            // <motion.div
            //   initial={{ opacity: 0 }}
            //   animate={{ opacity: 1 }}
            //   exit={{ opacity: 0 }}
            // >
            <LandingPage />
            // </motion.div>
          ),
        },
        {
          path: '/events',
          element: (
            // <motion.div
            //   initial={{ opacity: 0 }}
            //   animate={{ opacity: 1 }}
            //   exit={{ opacity: 0 }}
            // >
            <EventsPage />
            // </motion.div>
          ),
        },
        {
          path: '/sponsors',
          element: (
            // <motion.div
            //   initial={{ opacity: 0 }}
            //   animate={{ opacity: 1 }}
            //   exit={{ opacity: 0 }}
            // >
            <SponsorsPage />
            // </motion.div>
          ),
        },
      ],
    },
  ]);

  return (
    <AnimatePresence mode='wait'>
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
