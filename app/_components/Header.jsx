import React from "react";

function Header() {
  return (
    <header className={`bg-white`}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8  ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12"></div>
          <img src="/logo.svg" alt="logo" width={150} height={100} />
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm"></ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow "
                href="/"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-white   px-5 py-2.5 text-sm font-medium text-blue-500 dark:bg-gray-800 dark:text-white dark:border-blue-500 dark:hover:text-white/75"
                  href="/"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
