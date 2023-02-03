import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [providers, setProviders] = useState([
    {
      name: "Name-1",
      address: "address-1",
      image: "",
    },
    {
      name: "Name-2",
      address: "address-2",
      image: "",
    },
  ]);

  return (
    <div>
      <h1 className="text-2xl m-4 bold font-mono ">Available providers</h1>
      <div class="flex flex-wrap flex flex-wrap justify-center">
        {providers.map((provider) => {
          return (
            <>
              <div class="p-4">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            Name
                          </h2> */}
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      {provider.name}
                    </h1>
                    <p class="leading-relaxed mb-3">{provider.address}</p>
                    <div class=" ">
                      <Link
                        to={`/providers/${provider.name}`}
                        class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                        onClick={() => {}}
                      >
                        Order Now
                        <svg
                          class="w-4 h-4 ml-2 "
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
