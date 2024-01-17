import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ErrorPage from './Pages/ErrorPage';
import EventsPage from './Pages/EventsPage';
import SponsorsPage from './Pages/SponsorsPage';
import LoginPage from './Pages/LoginPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import space from './assets/space1.jpg'

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
    <div
    // style={{
    //   backgroundImage: `url(${space})`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   height: '100%',
    //   width: '100%',
    //   position: 'fixed',
    //   top: 0,
    //   left: 0,
    //   zIndex: -1,
    // }}
    className="h-screen w-full">
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
      // src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt="" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
