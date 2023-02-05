import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../App.css';
import './home.css';
import { databases } from "../../appwrite/AppWriteConfig";
import {
  REACT_APP_APPWRITE_DB,
  REACT_APP_PROVIDERS_COL,
  REACT_APP_ROL_COL,
} from "../../appwrite/IDs";
import HeroSection from "./HeroSection";

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
      <HeroSection />
      {/* <h1 className="text-2xl m-4 bold font-mono ">Available providers</h1> */}
      <h2 class="text-2xl md:text-4xl m-4 bold text-center">
        Available Providers
      </h2>
      <div class="flex flex-wrap justify-center mx-5">
        {providers.map((provider) => {
          return (
            <>
              <div class="p-4">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden card-shadow">
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
