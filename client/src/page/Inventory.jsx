import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Options from "react-select/creatable";

export const Inventory = () => {
  const [selected, setSeleted] = useState("Active");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  const { id } = useParams();
  const onSubmit = (data) => {
    data.status = selected.value;
    fetch(`https://ohsm-backend.onrender.com/property/inventory/${id}`, {
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
          alert("Inventory Posted ...");
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
              Inventory
            </h2>
            <form
              className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Property Spage Name
                </label>
                <input
                  type="text"
                  {...register("sname")}
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
                  Property Inventory Type
                </label>
                <input
                  type="text"
                  {...register("stype")}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Property Type"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="other"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Other Property Inventory Type
                </label>
                <input
                  type="text"
                  {...register("stypeOther")}
                  id="other"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Other Property Type"
                />
              </div>
              <div>
                <label
                  htmlFor="cap"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Capacity
                </label>
                <input
                  type="number"
                  {...register("capacity")}
                  id="cap"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Property Type"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="Amenities"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Amenities
                </label>
                <input
                  type="text"
                  {...register("amenities")}
                  id="Amenities"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Property Type"
                  required=""
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Availability Status
                </label>
                <Options
                  defaultValue={selected}
                  onChange={setSeleted}
                  options={statusOptions}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="Notes"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Notes (if any)
                </label>
                <input
                  type="text"
                  {...register("notes")}
                  id="Notes"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Notes"
                />
              </div>
              <a href="/">
                <div className="w-full border-2 text-slate-600 mt-10 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Cancel
                </div>
              </a>

              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
