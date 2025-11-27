import React from 'react'
import Link from "next/link"
import Button from '@/components/Button'
import { FcGoogle } from "react-icons/fc";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">

      {/* login card */}
      <div className="w-full max-w-xs bg-white rounded-2xl border border-gray-200 p-6">

        {/* welcome message */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-black mb-2">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Sign in to access your dashboard</p>
        </div>

        {/* login with google */}
        <div className='flex flex-col gap-4 items-center'>
          <Button clas={"mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-center gap-2"} name="Continue With Google" icon={<FcGoogle />} />
          <div className='w-full flex justify-evenly items-center'>
            <div className='dash'></div>
            <span className="text-gray-500 text-sm">Or</span>
            <div className='dash'></div>
          </div>
        </div>

        {/* form */}
        <form className="flex flex-col gap-4">

          {/* email */}
          <div className="flex flex-col">
            <label htmlFor='email' className="text-gray-700 text-sm mb-1">Email</label>
            <input
              id='email'
              type="email"
              placeholder="you@example.com"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* password */}
          <div className="flex flex-col">
            <div className='flex justify-between'>
              <label htmlFor='password' className="text-gray-700 text-sm mb-1">Password</label>
              <Link className='text-gray-700 text-sm mb-1 hover:underline transition-colors' href={"/auth/reset"}>Forget password?</Link>
            </div>
            <input
              id='password'
              type="password"
              placeholder="••••••••"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* sign button */}
          <Button clas={"mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-center gap-2"} type={"submit"} name="Sign In" />
        </form>

        {/* route to create */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          <Link href="/auth/register">
            Don&apos;t have an account? <span className="text-indigo-600 hover:underline">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page