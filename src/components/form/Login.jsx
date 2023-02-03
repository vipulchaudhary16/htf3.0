import React from "react";

function Login() {
    return (<>
        <section>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Login</h1>
                    <div className="relative mb-4">
                        <label htmlFor="phoneNumber" className="leading-7 text-sm text-gray-600 text-left block">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="otp" className="leading-7 text-sm text-gray-600 text-left block">Enter OTP</label>
                        <input type="text" id="otp" name="otp" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                    <p className="text-xs text-gray-500 mt-4">Don't have an account?
                        <a className="text-indigo-500 inline-flex items-center ml-1">Sign UP</a>
                    </p>
                </div>
            </div>
        </section>
    </>);
}

export default Login;