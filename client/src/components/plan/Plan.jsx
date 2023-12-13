import React from "react";
import { check } from "../../assets";

export const Plans = () => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-[10px] px-[81px] py-[80px] relative">
      <div className="inline-flex flex-col items-center gap-[40px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center gap-[10px] relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Avenir-Black',Helvetica] font-black text-transparent text-[40px] text-center tracking-[0] leading-[normal]">
            <span className="text-[#f9f9f9]">Choose Your </span>
            <span className="text-[#f85e9f]">Plan</span>
          </p>
          <div className="relative w-[244.39px] h-[27px] [font-family:'Avenir-Book',Helvetica] font-normal text-[#c0c0c0] text-[20px] text-center tracking-[0.20px] leading-[30px] whitespace-nowrap">
            Switch or cancel* anytime.
          </div>
        </div>
        <div className="relative w-[1278px] h-[577px]">
          <div className="inline-flex items-start gap-[32px] relative left-[45px]">
            <div className="relative w-[199px] h-[577px]">
              <div className="flex flex-col w-[141px] items-center gap-[25px] relative top-[37px] left-[29px]">
                <div className="flex flex-col items-start gap-[28px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Avenir-Black',Helvetica] font-black text-[#f9f9f9] text-[27px] tracking-[0] leading-[38px] whitespace-nowrap">
                    Feature
                  </div>
                  <div className="flex flex-col items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                        Ideal for
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                        Features
                      </div>
                    </div>
                    <div className="flex self-stretch w-full items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px]">
                        Number of properties
                      </div>
                    </div>
                    <div className="flex self-stretch w-full items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px]">
                        Channel management channels
                      </div>
                    </div>
                    <div className="flex self-stretch w-full items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px]">
                        Booking engine (customizable)
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                        API access
                      </div>
                    </div>
                    <div className="flex self-stretch w-full items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px]">
                        Dedicated account manager
                      </div>
                    </div>
                    <div className="flex self-stretch w-full items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <div className="relative flex-1 mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[22.4px]">
                        Priority support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[312px] h-[577px] border border-solid border-[#c0c0c0]">
              <div className="flex flex-col w-[259px] h-[508px] items-center justify-between relative top-[34px] left-[26px]">
                <div className="flex flex-col items-start gap-[28px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Avenir-Black',Helvetica] font-black text-[#f9f9f9] text-[27px] text-center tracking-[0] leading-[38px]">
                    Starter
                  </div>
                  <div className="flex flex-col items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Small businesses
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Basic
                      </div>
                    </div>
                    <div className="inline-flex mr-[-32.00px] items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-[259px] mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px]">
                        1
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Up to 10
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        No
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        No
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        No
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        No
                      </div>
                    </div>
                    <div className="flex self-stretch w-full items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <p className="relative flex-1 mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px]">
                        Starting at 19 points per month
                      </p>
                    </div>
                  </div>
                </div>
                <button className="flex flex-col gap-[10px] px-0 py-[2px] self-stretch w-full flex-[0_0_auto] items-center relative">
                  <div className="inline-flex h-[56px] justify-center p-[16px] bg-indigo-600 rounded-[8px] border border-solid border-indigo-500 items-center relative">
                    <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                        Start a Free 14-day trial
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative w-[312px] h-[577px] border border-solid border-[#c0c0c0]">
              <div className="flex flex-col w-[259px] h-[508px] items-center justify-between relative top-[34px] left-[26px]">
                <div className="flex flex-col items-start gap-[28px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Avenir-Black',Helvetica] font-black text-[#f9f9f9] text-[27px] text-center tracking-[0] leading-[38px]">
                    Pro
                  </div>
                  <div className="flex flex-col items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Growing businesses
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Advanced
                      </div>
                    </div>
                    <div className="inline-flex mr-[-32.00px] items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-[259px] mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px]">
                        Up to 10
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Up to 100
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Yes
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Yes
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        No
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Yes
                      </div>
                    </div>
                    <div className="flex self-stretch w-full items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <p className="relative flex-1 mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px]">
                        Starting at 49 points per month
                      </p>
                    </div>
                  </div>
                </div>
                <button className="flex flex-col gap-[10px] px-0 py-[2px] self-stretch w-full flex-[0_0_auto] items-center relative all-[unset] box-border">
                  <button className="flex w-[233px] h-[56px] justify-center p-[16px] bg-indigo-600 rounded-[8px] border border-solid border-indigo-500 items-center relative all-[unset] box-border">
                    <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                        Talk to sales
                      </div>
                    </div>
                  </button>
                </button>
              </div>
            </div>
            <div className="relative w-[312px] h-[577px] border border-solid border-[#c0c0c0]">
              <div className="flex flex-col w-[259px] h-[508px] items-center justify-between relative top-[34px] left-[26px]">
                <div className="flex flex-col items-start gap-[28px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Avenir-Black',Helvetica] font-black text-[#f9f9f9] text-[27px] text-center tracking-[0] leading-[38px]">
                    Flex
                  </div>
                  <div className="flex flex-col items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Large businesses
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Custom
                      </div>
                    </div>
                    <div className="inline-flex mr-[-32.00px] items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-[259px] mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px]">
                        Unlimited
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        All channels
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Yes
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Yes
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Yes
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <div className="relative w-fit mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px] whitespace-nowrap">
                        Yes
                      </div>
                    </div>
                    <div className="flex self-stretch w-full items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[24px] h-[24px]"
                        alt="Icon jam icons"
                        src={check}
                      />
                      <p className="relative flex-1 mt-[-2.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[25.6px]">
                        Starting at 99 points per month
                      </p>
                    </div>
                  </div>
                </div>
                <button className="flex flex-col gap-[10px] px-0 py-[2px] self-stretch w-full flex-[0_0_auto] items-center relative all-[unset] box-border">
                  <button className="flex w-[233px] h-[56px] justify-center p-[16px] bg-indigo-600 rounded-[8px] border border-solid border-indigo-500 items-center relative all-[unset] box-border">
                    <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0.50px] leading-[24px] whitespace-nowrap">
                        Talk to sales
                      </div>
                    </div>
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
