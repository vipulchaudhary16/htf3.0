import React, { useEffect, useState } from "react";
import "./navbar.css";
import tiffin from "../../assests/tiffin.png";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../appwrite/AppWriteConfig";
export default function Navbar() {
  const [isLoogedIn, setIsLoggedIn] = React.useState(false);
  useEffect(() => {
    const getData = account.get();
    getData
      .then((res) => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setIsLoggedIn(false);
      });
  }, []);
  return (
    <div>
      <header class="bg-slate-300 text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={tiffin} alt="logo" className="logo h-12" />
            <span class="ml-3 text-xl">Tiffin</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/signup-admin">
              <a class="mr-5 hover:text-gray-900 cursor-pointer">
                Signup As Provider
              </a>
            </Link>
          </nav>

          {isLoogedIn == false ? (
            <>
              <Link to="/login">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  Login
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>

              <Link to="/signup">
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 mx-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  SignUp
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </>
          ) : (
            <>
              <button
                class="inline-flex text-white items-center bg-red-700 border-0 py-1 mx-2 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
                onClick={async () => {
                  await account.deleteSession("current");
                  window.location.reload();
                }}
              >
                Logout
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </>
          )}
        </div>
      </header>
      </div>
  );
}
