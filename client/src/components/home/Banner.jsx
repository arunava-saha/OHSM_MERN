import React from "react";

export const Banner = ({ query, handleSearch }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h2 className="text-4xl font-medium text-white text-center leading-tight">
        Properties Here
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center bg-slate-500 ml-5 align-baseline text-[0.75em] font-bold leading-none text-primary-700">
          Explore New
        </span>
      </h2>

      <form>
        <div className="relative my-4">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Properties..."
            onChange={handleSearch}
            value={query}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
