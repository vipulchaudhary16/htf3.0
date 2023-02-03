import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Provider = () => {
  const { name } = useParams();
  const [fetchedData, setFetchedData] = useState([
    {
      name: "Tiffin 404",
      price: 70,
      ingredients: [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
      ],
    },
    {
      name: "Tiffin 404",
      price: 70,
      ingredients: [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
      ],
    },
    {
      name: "Tiffin 404",
      price: 70,
      ingredients: [
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit",
      ],
    },
  ]);
  return (
    <div>
      <h1 className="text-2xl m-4 bold font-mono">
        Tiffins provided by {name}
      </h1>
      <section class="text-gray-600 body-font overflow-hidden flex flex-wrap justify-center">
        {fetchedData.map((item) => {
          return (
            <div class="p-6 m-4 rounded-lg border-2 overflow-hidden">
              {/* <span class="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span> */}
              <h2 class="text-sm tracking-widest title-font mb-1 font-medium">
                {item.name}
              </h2>
              <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>{item.price}</span>
                <span class="text-lg ml-1 font-normal text-gray-500">
                  /1 Tiffin
                </span>
              </h1>
              {item.ingredients.map((ing) => {
                return (
                  <p class="flex items-center text-gray-600 mb-2">
                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2.5"
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {ing}
                  </p>
                );
              })}
              <button class="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded m-2 mt-8">
                Order Once
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <button class="flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded m-2">
                Monthly Order
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          );
        })}
      </section>{" "}
    </div>
  );
};

export default Provider;
