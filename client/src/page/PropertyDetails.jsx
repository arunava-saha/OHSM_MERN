import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
export const PropertyDetails = () => {
  const [property, setProperty] = useState({});
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch(`https://ohsm-backend.onrender.com/property/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProperty(result.property);
        setInventory(result.property.Inventory);
      });
  }, []);
  const { id } = useParams();
  console.log(property);
  console.log(inventory);
  return (
    <div className="text-white p-9">
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {property.pName}
            </h2>
            <div className="mt-6 flex justify-center gap-24 py-10 text-lg font-bold leading-8 text-gray-300">
              <p>{property.ptype}</p>
              <p>{property.phone}</p>
              <p>{property.email}</p>
            </div>
            <div className="mt-6 flex justify-center gap-12 py-2 text-lg font-bold leading-8 text-gray-300">
              <p>{property.address}</p>
              <p>{property.state}</p>
              <p>{property.city}</p>
              <p>{property.pincode}</p>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-wrap gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {inventory.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col flex-wrap overflow-hidden px-4 py-2 w-60 h-60 rounded bg-slate-700"
                >
                  <dt className="text-base leading-7 text-gray-300">
                    {item.sname}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {item.stype}
                  </dd>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {item.status}
                  </dd>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {item.capacity}
                  </dd>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {item.amenities}
                  </dd>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {item.notes}
                  </dd>
                </div>
              ))}
              <div></div>
            </div>
            <img
              src={property.logo}
              alt=""
              className="absolute top-0 right-0 h-[60%] w-[40%] -z-10 object-cover object-right md:object-center"
            />
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href={`/inventory/${property._id}`}
                className="left-[24px] top-[1158px] flex-col justify-start items-start gap-2.5 inline-flex"
              >
                <div className="self-stretch px-1.5 py-1 bg-gray-50 rounded-2xl border border-green-600 justify-center items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-1 flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-5 h-5 text-2xl font-semibold text-green-600 left-[1px] top-[1px] absolute">
                        <CiCirclePlus />
                      </div>
                    </div>
                    <div className="text-center text-green-600 text-sm font-medium leading-normal">
                      Add Inventory
                    </div>
                  </div>
                </div>
              </a>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
