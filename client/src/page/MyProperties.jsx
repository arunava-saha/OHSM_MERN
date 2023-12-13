import React, { useEffect, useState } from "react";
import { Card } from "../components";

export const MyProperties = () => {
  const email = "draru1999@gmail.com";
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://ohsm-backend.onrender.com/property/mybusiness/${email}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProperties(result);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {properties.map((item, i) => (
        <Card item={item} key={i} />
      ))}
    </div>
  );
};
