import React from "react";
import banner from "../../public/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row ">
        <div className="order-2 md:order-1 w-full md:w-1/2  mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              totam qui repellendus saepe sit perferendis nostrum incidunt modi
              error fuga!
            </p>
            <label className="input validator dark:bg-slate-900 dark:text-white shadow-lg">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Email" required />
            </label>
          </div>
          <button className="btn btn-secondary mt-5 border-0">Secondary</button>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img className="md:w-[550px] md:h-[460px] md:ml-12 mt-20" src={banner} alt="image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
