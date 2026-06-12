import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Content */}
      <div className="mx-auto max-w-3xl py-28 sm:py-36 lg:py-44">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-4 py-2 text-sm text-gray-400 ring-1 ring-white/10">
            Welcome to our course management system.{" "}
            <Link
              to="/course-details"
              className="font-semibold text-indigo-400"
            >
              View Courses →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Manage Your Online Courses Easily
          </h1>

          <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl">
            Add courses, view course details, update course information and
            manage your learning platform in a simple way.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/add"
              className="rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400"
            >
              Add Course
            </Link>

            
            <Link
              to="/cd"
              className="text-sm font-semibold text-white hover:text-indigo-400"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
        />
      </div>
    </div>
  );
}
