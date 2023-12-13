import React from "react";

export const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="text-white w-96 h-96">
      <div className="flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 md:max-w-xl md:flex-row">
        {item.logo === "" ? (
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/images/Linear.jpg"
            alt="Property Logo"
          />
        ) : (
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={item.logo}
            alt="Property Logo"
          />
        )}
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-50">
            {item.pName}
          </h5>
          <p className="mb-4 text-base h-10 text-neutral-200">{item.address}</p>
          <p className="mb-4 text-base  text-neutral-200">{item.ptype}</p>
          <p className="text-xl text-green-300">
            <a href={`/property/${item._id}`}>Details</a>
          </p>
        </div>
      </div>
    </div>
  );
};
