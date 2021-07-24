import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { FormikConsumer, useFormik } from "formik";

function LoginPageFormik() {
  const [enabled, setEnabled] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("form submitted");
    },
  });
  return (
    <>
      <div className="flex box-border">
        <div className="w-2/4 flex flex-col min-h-full">
          <div className="my-0 mx-auto max-w-480 min-w-311 min-h-full h-screen">
            <div className="items-center flex min-h-full min-w-full py-3 px-11">
              <div className="block w-full">
                <p className="text-darkblue text-4xl mb-2 pb-5 font-medium leading-5 mt-0">
                  Log In to{" "}
                  <a
                    className="text-headingLink text-4xl font-medium"
                    href={"#"}
                  >
                    CORK
                  </a>
                </p>
                <p className="text-darkblue font-bold mb-12 mt-0">
                  New Here?{" "}
                  <a className="text-headingLink underline" href={"#"}>
                    Create an account
                  </a>
                </p>
                <form
                  onSubmit={formik.handleSubmit}
                  className="box-border text-left"
                >
                  <div className="flex relative pt-3 px-0 pb-4 border-b-2 mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      id="email"
                      name="email"
                      placeholder="Username"
                      type="text"
                      className="inline-block align-middle min-w-50 max-w-635 w-full min-h-35 text-darkblue font-semibold pb-3 pl-9"
                      height={"calc(1.4em + 1.4rem + 2px"}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="flex relative pt-3 px-0 pb-4 border-b-2 mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    >
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                    </svg>
                    <input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      className="inline-block align-middle min-w-50 max-w-635 w-full min-h-35 text-darkblue font-semibold pb-3 pl-9"
                      height={"calc(1.4em + 1.4rem + 2px"}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <div className="flex justify-between box-border text-left">
                    <div className="flex text-left">
                      <p className="items-center font-semibold py-3">
                        Show Password
                      </p>
                      <div className="p-3">
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${
                            enabled ? "bg-blue-900" : "bg-green-700"
                          }
          relative inline-flex flex-shrink-0 h-[15px] w-[35px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span
                            aria-hidden="true"
                            className={`${
                              enabled ? "translate-x-5" : "translate-x-0"
                            }
            pointer-events-none inline-block h-[10px] w-[10px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                          />
                        </Switch>
                      </div>
                    </div>
                    <div className="p-2">
                      <button
                        className="p-0 align-middle cursor-pointer bg-headingLink text-white shadow-lg py-1 px-2 inline-block text-center m-0 box-border overflow-visible rounded-2xl"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                  <div className="mt-16 text-center">
                    <label className="cursor-pointer relative inline-flex mr-6 mb-2 pl-8 font-thin">
                      <input type="checkbox" className="absolute opacity-0" />
                      <span className="border-r-2 border-solid block h-18 w-18 rounded cursor-pointer text-center after:top-2/4 after:block after:left-2/4 after: absolute after:border-r-4 text-sm"></span>
                      Keep me logged In
                    </label>
                  </div>
                  <div>
                    <a
                      className="w-full font-bold text-center text-headingLink block text-base mt-6"
                      href={"#"}
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
                <p className="max-w-480 mx-auto text-sm text-darkblue font-semibold mt-24 box-border">
                  © 2020 All Rights Reserved.{" "}
                  <a className="text-headingLink font-semibold">CORK</a> is a
                  product of Designreset.{" "}
                  <a className="text-headingLink font-semibold">
                    Cookie Preferences
                  </a>
                  , <a className="text-headingLink font-semibold">Privacy</a>{" "}
                  and <a className="text-headingLink font-semibold">Terms</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col fixed justify-center items-center right-0 h-full w-2/4 min-h-auto box-border bg-imagebackground">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png"
            alt=""
            className="absolute h-4/6 w-4/6 align-middle justify-around text-center m-autoblock"
          />
        </div>
      </div>
    </>
  );
}

export default React.memo(LoginPageFormik);
