import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/UserSlice";

export const Header = ({ className }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className={`flex w-[1440px] z-10 items-center gap-[202px] text-white px-[80px] py-[24px] relative ${className}`}
    >
      <div className="flex items-center gap-[24px] relative flex-1 grow">
        <div className="relative w-fit mt-[-1.00px] text-2xl font-semibold whitespace-nowrap">
          <a href="/">OHSM</a>
        </div>
      </div>
      <div className="inline-flex justify-center flex-[0_0_auto] items-center gap-[16px] relative">
        <div className="inline-flex items-center gap-[8px] px-[8px] py-[12px] relative self-stretch flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-button-m whitespace-nowrap">
            <a href="/solutions">Solutions</a>
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-[8px] py-[12px] relative self-stretch flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-button-m  whitespace-nowrap">
            Company
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-[8px] py-[12px] relative self-stretch flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] whitespace-nowrap ">
            <a href="/pricing">Pricing</a>
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-[8px] py-[12px] relative self-stretch flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] whitespace-nowrap ">
            <a href="/properties">My Business</a>
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-[8px] py-[12px] relative self-stretch flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] whitespace-nowrap ">
            <a href="/resources">Resources</a>
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-[8px] py-[12px] relative self-stretch flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-button-m">
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex justify-end flex-1 grow items-center gap-[16px] relative">
        {!user ? (
          <>
            <button className="px-[8px] py-[12px] ml-[-104.50px] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[8px] box-border">
              <div className="inline-flex items-center justify-center px-[16px] py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-button-m">
                  <a href="/signin">Log In</a>
                </div>
              </div>
            </button>
          </>
        ) : (
          <></>
        )}

        <button className="p-[12px] bg-gray-700 hover:bg-slate-400 border border-solid border-blue-gray600 inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[8px] all-[unset] box-border">
          <div className="inline-flex items-center justify-center px-[16px] py-0 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-button-m ">
              Request a demo
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
