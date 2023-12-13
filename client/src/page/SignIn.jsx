import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // fetch(`https://ohsm-backend.onrender.com/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     if (result) {
    //       alert("signIn ...");
    //     }
    //     reset();
    //   });
  };
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col items-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="flex gap-3 mt-4 justify-center w-full">
            <div className=" w-7 bg-[#e7319d] rounded-full h-7" />
            <div className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#e7319d] text-[28px] tracking-[0] leading-[29px] whitespace-nowrap">
              OHSM
            </div>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl">
              Sign in to OHSM
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Username or email"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-3 sm:text-sm rounded-lg block w-full p-2.5 "
                  required=""
                />
              </div>
              <div className="flex items-end justify-end w-full">
                <a
                  href="/forgetpassword"
                  className="text-sm font-medium text-[#e7319d] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="text-gray-300 text-base font-medium leading-normal">
                  or continue with
                </div>
                <button
                  type="submit"
                  className="w-full text-black bg-slate-100 hover:bg-slate-200 font-medium rounded-lg items-center flex mt-10 justify-center px-5 py-2.5 gap-x-2 "
                >
                  <FaGoogle /> Continue with Google
                </button>
                <p className="text-sm font-base mt-20 text-gray-900">
                  Don’t have an account yet?{" "}
                  <a
                    href="/signup"
                    className="font-medium text-[#e7319d] hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
