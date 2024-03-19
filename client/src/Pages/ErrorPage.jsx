import { Link } from "react-router-dom";
import ParticleRing from "../Components/background/ParticleRing";
import NotFoundImage from "../assets/site404.png";

export default function ErrorPage() {
  return (
    <div className="relative">
      {/* ParticleRing component is positioned behind the main content */}
      <ParticleRing className="absolute inset-0 z-0" />

      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 z-10 relative">
        <img
          src={NotFoundImage}
          alt="404"
          className="h-40 lg:h-80 sm:h-40 mx-auto max-w-full"
        />

        <div className="text-center">
          {/* <p className="text-base text-white font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1> */}
          <p className="mt-6 text-base leading-7 text-white">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="z-3 mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <button className="event-btn bg-primary-purple">
                Go Back Home
              </button>
            </Link>
            <Link
              to="/contact"
              className="cursor-pointer text-sm font-semibold text-white"
            >
              <button className="event-btn bg-primary-purple">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
