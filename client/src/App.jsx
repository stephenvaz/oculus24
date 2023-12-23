import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ErrorPage from './Pages/ErrorPage';
import EventsPage from './Pages/EventsPage';
import SponsorsPage from './Pages/SponsorsPage';
import LoginPage from './Pages/LoginPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet />
          <Footer/>
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/events',
          element: <EventsPage />,
        },
        {
          path: '/sponsors',
          element: <SponsorsPage />,
        },
      ],
    },
  ]);

  return (
    <div className="h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
