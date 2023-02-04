import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { databases } from "../../appwrite/AppWriteConfig";
import {
  REACT_APP_APPWRITE_DB,
  REACT_APP_PROVIDERS_COL,
} from "../../appwrite/IDs";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProviders();
  }, []);

  const loadProviders = async () => {
    await databases
      .listDocuments(REACT_APP_APPWRITE_DB, REACT_APP_PROVIDERS_COL)
      .then((res) => {
        setProviders(res.documents);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-4">Providers</h1>
      <div className="flex flex-wrap justify-center">
        {loading == false ? (
          providers.map((provider) => {
            return (
              <div key={uuidv4()}>
                <div className="p-4">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src="https://dummyimage.com/720x400"
                      alt="blog"
                    />
                    <div className="p-6">
                      {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            Name
                          </h2> */}
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {provider.name}
                      </h1>
                      <p className="leading-relaxed mb-3">{provider.address}</p>
                      <div className=" ">
                        <Link
                          to={`/providers/${provider.name}`}
                          className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                          onClick={() => {}}
                        >
                          Order Now
                          <svg
                            className="w-4 h-4 ml-2 "
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
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
