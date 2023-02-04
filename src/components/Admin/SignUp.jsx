import React, { useState } from "react";
import { account, databases } from "../../appwrite/AppWriteConfig";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import {
  REACT_APP_APPWRITE_DB,
  REACT_APP_PROVIDERS_COL,
  REACT_APP_ROL_COL,
} from "../../appwrite/IDs";

function Login() {
  const navigate = useNavigate();
  const [provider, setProvider] = useState({
    UID: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await account
      .create(uuidv4(), provider.email, provider.password, provider.name)
      .then((res) => {
        provider.UID = res.$id;
        databases
          .createDocument(
            REACT_APP_APPWRITE_DB,
            REACT_APP_PROVIDERS_COL,
            uuidv4(),
            provider
          )
          .then((resDB) => {
            databases
              .createDocument(
                REACT_APP_APPWRITE_DB,
                REACT_APP_ROL_COL,
                uuidv4(),
                {
                  email: provider.email,
                  role: "provider",
                }
              )
              .then((resDB) => {
                navigate("/login");
              })
              .catch((error) => {
                alert(error);
              });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };


  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Sign UP
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form
              className="flex flex-wrap -m-2"
              method="POST"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 text-left block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) =>
                      setProvider({ ...provider, name: e.target.value })
                    }
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 text-left block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) =>
                      setProvider({ ...provider, email: e.target.value })
                    }
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600 text-left block"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) =>
                      setProvider({ ...provider, password: e.target.value })
                    }
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="phoneNumber"
                    className="leading-7 text-sm text-gray-600 text-left block"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={(e) =>
                      setProvider({ ...provider, phone: e.target.value })
                    }
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600 text-left block"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    onChange={(e) =>
                      setProvider({ ...provider, address: e.target.value })
                    }
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <input
                  value={"Submit"}
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
