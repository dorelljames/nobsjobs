import React from "react";
import Layout from "./components/Layout";
import "./assets/main.css";

function App() {
  return (
    <Layout>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <div className="relative h-16 flex justify-between">
            <div className="relative z-10 px-2 flex lg:px-0">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                  alt="Workflow logo"
                />
              </div>
            </div>
            <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
              <div className="w-full sm:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                  </div>
                  <input
                    id="search"
                    className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm leading-5 placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="relative z-10 flex items-center lg:hidden">
              <button
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="block h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
              <button className="flex-shrink-0 border-2 border-transparent rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <span className="sr-only">Notifications</span>

                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <div className="flex-shrink-0 relative ml-4">
                <div>
                  <button
                    className="border-2 border-transparent rounded-full flex focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div
                    className="bg-white rounded-md shadow-xs py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Your Profile
                    </a>

                    <a
                      href="#"
                      className="block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Settings
                    </a>

                    <a
                      href="#"
                      className="block py-2 px-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="hidden lg:py-2 lg:flex lg:space-x-8"
            aria-label="Global"
          >
            <a
              href="#"
              className="bg-gray-100 rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Team
            </a>

            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Projects
            </a>

            <a
              href="#"
              className="rounded-md py-2 px-3 inline-flex items-center text-sm leading-5 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Calendar
            </a>
          </nav>
        </div>

        <nav className="hidden lg:hidden" aria-label="Global">
          <div className="pt-2 pb-3 px-2 space-y-1">
            <a
              href="#"
              className="block bg-gray-100 rounded-md py-2 px-3 text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-200 focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="block rounded-md py-2 px-3 text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Team
            </a>

            <a
              href="#"
              className="block rounded-md py-2 px-3 text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Projects
            </a>

            <a
              href="#"
              className="block rounded-md py-2 px-3 text-base leading-6 font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
            >
              Calendar
            </a>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-4 flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-6 text-gray-800">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-5 text-gray-500">
                  tom@example.com
                </div>
              </div>
              <button className="ml-auto flex-shrink-0 border-2 border-transparent rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out">
                <span className="sr-only">Notifications</span>

                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Your Profile
              </a>

              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Settings
              </a>

              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out"
              >
                Sign out
              </a>
            </div>
          </div>
        </nav>
      </header>
    </Layout>
  );
}

export default App;
