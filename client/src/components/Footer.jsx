import React from "react";
import { appStore, googlePlay, rightArrow } from "../assets";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col w-[100%] items-start justify-center px-[80px] py-0 relative text-white bg-gray-700">
      <div className="flex items-start gap-[48px] px-0 py-[48px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-blue-gray700">
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-bold">
              Categories
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                User Interface
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                User Experience
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Digital Media
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Lifestyle
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-bold">Product</div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Pricing
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Overview
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Browse
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Accessibility
              </div>
              <div className="inline-flex h-[20px] items-center justify-center p-[4px] relative flex-[0_0_auto] bg-indigo-100 rounded-[4px]">
                <div className="inline-flex items-center justify-center gap-[10px] px-[4px] py-0 relative flex-[0_0_auto] mt-[-2.50px] mb-[-2.50px]">
                  <div className="relative w-fit mt-[-1.00px] font-body-XS font-[number:var(--body-XS-font-weight)] text-indigo-800 text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] whitespace-nowrap [font-style:var(--body-XS-font-style)]">
                    BETA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-bold">
              Solutions
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Brainstorming
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Ideation
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Wireframing
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Research
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-bold">
              Resources
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Help Center
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Blog
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Tutorials
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                FAQs
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-bold">Support</div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Contact Us
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Developers
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Documentation
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Integrations
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start relative flex-1 grow">
          <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-bold">Company</div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                About
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Press
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Events
              </div>
            </div>
            <div className="flex self-stretch w-full items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
              <div className="relative w-fit font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
                Request Demo
              </div>
              <img
                className="relative w-[24px] h-[24px]"
                alt="Icon jam icons"
                src={rightArrow}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[32px] px-0 py-[24px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
          OHSM @ 2023
        </div>
        <div className="flex items-center gap-[32px] relative flex-1 grow">
          <div className="inline-flex items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
              Terms of Service
            </div>
          </div>
          <div className="inline-flex items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
              Privacy Policy
            </div>
          </div>
          <div className="inline-flex items-center gap-[8px] px-0 py-[12px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-m font-[number:var(--body-m-font-weight)] text-blue-gray200 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] whitespace-nowrap [font-style:var(--body-m-font-style)]">
              Manage Cookies
            </div>
          </div>
        </div>
        <FaYoutube />
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
        <div className="inline-flex items-center justify-end gap-[16px] relative flex-[0_0_auto]">
          <img
            className="relative flex-[0_0_auto]"
            alt="Button"
            src={appStore}
          />
          <button className="inline-flex flex-col items-start justify-center gap-[10px] relative flex-[0_0_auto] all-[unset] box-border">
            <div className="relative w-[137px] h-[40px] mr-[-2.00px]">
              <div className={`relative w-[135px] h-[40px] bg-[100%_100%]`}>
                <img
                  className="absolute w-[135px] h-[40px] top-0 left-0"
                  alt="Vector"
                  src={googlePlay}
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
