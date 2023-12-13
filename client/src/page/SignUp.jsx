import React from "react";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // fetch(`https://ohsm-backend.onrender.com/auth/register`, {
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
    //       alert("signUp ...");
    //     }
    //     reset();
    //   });
  };
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="flex gap-3 mt-4 justify-center w-full">
            <div className=" w-7 bg-[#e7319d] rounded-full h-7" />
            <div className="[font-family:'DM_Sans-Bold',Helvetica] font-bold text-[#e7319d] text-[28px] tracking-[0] leading-[29px] whitespace-nowrap">
              OHSM
            </div>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="Full Name"
                  required=""
                />
              </div>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  {...register("conformpassword")}
                  id="confirm-password"
                  placeholder="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-6">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-5 h-5 rounded-md border-gray-300 border-2 bg-gray-50 focus:ring-3 "
                    required=""
                  />
                </div>
                <div className="ml-3 text-base font-semibold">
                  <label htmlFor="terms" className="text-gray-900">
                    Yes, I want to receive email
                  </label>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-6">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-5 h-5 rounded-md border-gray-300 border-2 bg-gray-50 focus:ring-3 "
                    required=""
                  />
                </div>
                <div className="ml-3 font-semibold text-base">
                  <label for="terms" className="text-gray-900">
                    I accept the{" "}
                    <a className="text-[#e7319d] hover:underline" href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
              <p className="text-base text-center pt-9 font-medium text-gray-900 ">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="font-medium text-[#e7319d] hover:underline"
                >
                  SignIn
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
