import React from "react";

export const Resources = ({ items }) => {
  return (
    <>
      <div className="flex flex-wrap justify-around gap-2 mb-10">{items}</div>
    </>
  );
};
