import React, { useEffect, useState } from "react";
import { Banner, Card } from "../components";
import { Resources } from "./Resources";

export const Home = () => {
  const [catagory, setCatagory] = useState(null);
  const [query, setQuery] = useState("");
  const [properties, setProperties] = useState([]);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    fetch("https://ohsm-backend.onrender.com/property")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Properties);
        setProperties(data.Properties);
      });
  }, []);
  const filteredData = properties.filter(
    (item) =>
      item.address.toLowerCase().trim().indexOf(query.toLowerCase()) !== -1
  );
  const filtering = (query, properties) => {
    let filteredProperties = properties;
    if (query) filteredProperties = filteredData;
    return filteredProperties.map((item, i) => <Card key={i} item={item} />);
  };
  const data = filtering(query, properties);
  return (
    <div>
      <Banner query={query} handleSearch={handleSearch} />
      <div className="md:grid relative text-white grid-cols-3 gap-4">
        <div className="bg-gray-600 rounded-lg flex justify-center">
          <div className="block fixed rounded-lg bg-slate-900 text-center">
            <div className="border-b-2 border-neutral-100 px-6 py-3">
              Featured
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-100">
                Add Properties Here
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              <a href="/setup">Add properties</a>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-white">
          <span className=" capitalize font-semibold text-xl">
            Total Properties: {data.length}
          </span>
          <div className="mt-10">
            <Resources items={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
