import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";
import Options from "react-select/creatable";

export const PropertySetup = () => {
  const [selected, setSeleted] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const typeOptions = [
    { value: "Real Estate", label: "Real Estate" },
    { value: "Duplex", label: "Duplex" },
    { value: "Apartment", label: "Apartment" },
    { value: "Other", label: "Other" },
  ];
  const onSubmit = (data) => {
    data.ptype = selected.value;
    fetch("https://ohsm-backend.onrender.com/property", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          alert("Property Posted ...");
        }
        reset();
      });
  };
  return (
    <div>
      <section className="bg-gray-950">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
            <h2 className="mb-1 text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Property Setup
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative">
                <label
                  htmlFor="logo"
                  className=" absolute top-[50%] left-[37%] mb-2 text-sm font-medium text-[#e7319d]"
                >
                  Display Logo
                </label>
                <input
                  type="url"
                  className="absolute top-[30%] left-[25%]"
                  id="logo"
                  {...register("logo")}
                />
                <div className="border bg-[#fbabdb] bg-opacity-25 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 h-40" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Property Type
                </label>
                <Options
                  defaultValue={selected}
                  onChange={setSeleted}
                  options={typeOptions}
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Property Type"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Property Name
                </label>
                <input
                  type="name"
                  name="name"
                  {...register("pName")}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Property Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  name="phone"
                  {...register("phone")}
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Phone number"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  {...register("address")}
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Address"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  {...register("state")}
                  id="state"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="State"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  {...register("city")}
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="City"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="pincode"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Pincode
                </label>
                <input
                  type="number"
                  name="pincode"
                  {...register("pincode")}
                  id="pincode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="e.g. 220011"
                  required=""
                />
              </div>
              <div className="left-[24px] top-[1158px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch px-2.5 py-1 bg-gray-50 rounded-2xl border border-green-600 justify-center items-center gap-2.5 inline-flex">
                  <div className="justify-center items-center gap-1 flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-5 h-5 text-2xl font-semibold text-green-600 left-[1px] top-[1px] absolute">
                        <CiCirclePlus />
                      </div>
                    </div>
                    <button
                      disabled
                      className="text-center cursor-not-allowed text-green-600 text-sm font-medium leading-normal"
                    >
                      Add Inventory
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Complete your setup
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
