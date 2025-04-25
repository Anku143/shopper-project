import React from "react";

const LoginSignup = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col items-center justify-center h-[50%] w-[40%] mx-auto bg-white shadow-lg rounded-md p-8 my-[80px] border-r-4 border-l-4 border-gray-300 gap-5">
          <h1>Sign Up</h1>
          <div>
            <form action="">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border border-gray-300 rounded-md p-2"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" className="text-xs">
                    by continuing, i agree to the term of use & privacy policy
                  </label>
                </div>
                <button className="bg-orange-500 mb-[20px] text-white py-2 px-4 rounded-md cursor-pointer hover:bg-orange-600 transition-all duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span className="text-orange-500 cursor-pointer hover:text-orange-700 transition-all duration-300 ease-in-out font-[700]">
                    Log In
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
