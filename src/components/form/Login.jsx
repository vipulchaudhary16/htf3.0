import { React, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account, databases } from "../../appwrite/AppWriteConfig";
import { REACT_APP_APPWRITE_DB, REACT_APP_ROL_COL } from "../../appwrite/IDs";
import userContext from "../../context/userContext";

function Login() {
  const context = useContext(userContext);
  const { user, setUser } = context;
  const navigate = useNavigate();
  const [fetchedUser, setFetchedUser] = useState({
    email: "",
    password: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      account
        .createEmailSession(fetchedUser.email, fetchedUser.password)
        .then((res) => {
          user.email = fetchedUser.email;
          databases
            .listDocuments(REACT_APP_APPWRITE_DB, REACT_APP_ROL_COL)
            .then((resDB) => {
              localStorage.setItem("email", fetchedUser.email);
          
              resDB.documents.forEach((doc) => {
                if (doc.email == fetchedUser.email) {
                  if (doc.role === "provider") {
                    user.role = "provider";
                    navigate("/admin");
                  } else {
                    user.role = "user";
                    navigate("/");
                  }
                }
              });
            });
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <form
            className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Login
            </h1>
            <div className="relative mb-4">
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
                  setFetchedUser({ ...fetchedUser, email: e.target.value })
                }
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
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
                  setFetchedUser({ ...fetchedUser, password: e.target.value })
                }
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <input type="submit" value={"LOGIN"}/>
            </button>
            <p className="text-xs text-gray-500 mt-4">
              Don't have an account?
              <a className="text-indigo-500 inline-flex items-center ml-1">
                <Link to="/signup">Sign Up</Link>
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
