import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white p-4">
        <div className="w-full max-w-xs bg-white rounded-2xl border border-gray-200 p-6">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold text-black mb-2">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">Sign up to get started</p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-1" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
                type="text"
                name="fullname"
                id="fullname"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
                type="password"
                id="password"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-1" htmlFor="confirmpassword">
                Confirm Password
              </label>
              <input
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
                type="password"
                id="confirmpassword"
              />
            </div>
            <Button clas={"mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-center gap-2"} type={"submit"} name="Create Account" />
          </form>
          <div className="mt-4 text-center text-gray-500 text-sm">
            <Link href={"/auth/login"}>
              Already have an account?
              <span className="text-indigo-600 hover:underline">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
