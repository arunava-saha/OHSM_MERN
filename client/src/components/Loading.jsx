import React from "react";

export const Loading = () => {
  return (
    <div className="w-full bg-white h-screen flex justify-center items-center relative">
      <div className="fixed w-[140px] h-[46px]">
        <div className="absolute w-12 bg-[#e7319d] rounded-full h-12 top-0 left-0" />
        <div className="absolute top-3 left-14 [font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#e7319d] text-[38px] text-center tracking-[0] leading-[29px] whitespace-nowrap">
          OHSM
        </div>
      </div>
    </div>
  );
};
