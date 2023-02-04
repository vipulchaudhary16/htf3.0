import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import "./home.css";
import Hero_Img from "../../assests/Hero_Img.png";
import { databases } from "../../appwrite/AppWriteConfig";
import {
  REACT_APP_APPWRITE_DB,
  REACT_APP_PROVIDERS_COL,
  REACT_APP_ROL_COL,
} from "../../appwrite/IDs";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    databases
      .listDocuments(REACT_APP_APPWRITE_DB, REACT_APP_ROL_COL)
      .then((resDB) => {
        resDB.documents.forEach((doc) => {
          if (doc.email == localStorage.getItem("email")) {
            if (doc.role == "provider") {
              navigate("/admin");
              return 1;
            } else {
              return 0;
            }
          }
        });
      });
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
        alert(error);
      });
  };

  return (
    <div>
      {/* Hero - Section Start */}
      <section class="my-10">
        <div class="grid max-w-screen-xl px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="md:mr-auto place-self-center lg:col-span-7 md:ml-7 mx-4">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black text-primary-color text-center md:text-left">
              {" "}
              <span className="text-black">Tiffin.</span>{" "}
              <span className="text-black">Eat.</span> Repeat.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500 text-center md:text-left">
              One stop for your Homemade Healthy Regular meals!!
            </p>
            <a
              href="#"
              class="px-10 py-3 text-base font-medium text-center text-black-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 btn-secondary block mx-auto md:inline-block md:"
            >
              Order Now
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Hero_Img} alt="Hero-Image" />
          </div>
        </div>
      </section>
      {/* Hero - Section End */}
      {/* <h1 className="text-2xl m-4 bold font-mono ">Available providers</h1> */}
      <h2 class="text-2xl md:text-4xl m-4 bold text-center">
        Available Providers
      </h2>
      <div class="flex flex-wrap justify-center mx-5">
        {providers.map((provider) => {
          return (
            <>
              <div class="p-4">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden service-card">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center h-auto .max-w-full"
                    src="https://dummyimage.com/250x350"
                    alt="blog"
                  />
                  <div class="p-6 text-center">
                    <h1 class="title-font text-2xl font-medium text-gray-900 mb-1">
                      {provider.name}
                    </h1>
                    <p class="leading-relaxed mb-3 text-lg">
                      {provider.address}
                    </p>
                    <Link to={`/providers/${provider.name}`}>
                      <button class="text-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded mt-8 btn-primary-solid rounded text-center py-2">
                        Explore Kitchen
                      </button>
                    </Link>
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

export default Home;
