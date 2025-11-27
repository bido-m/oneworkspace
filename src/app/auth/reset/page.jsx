'use client'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5"

const page = () => {
    const [openModal, setOpenModal] = useState(true);
    const router = useRouter();

    const closeModal = () => {
    setOpenModal(false)
    router.push('/auth/login')
  };

  return (
    <>
    {openModal && (
        <div className='flex items-center justify-center min-h-screen p-4 z-50 bg-gray-50'>
            <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-xl font-semibold text-gray-900'>Reset Password</h2>
                    <Button 
                      click={closeModal} 
                      clas={"text-gray-400 hover:text-gray-600 transition-colors"} 
                      icon={<IoClose size={20} />} 
                    />
                </div>
                <p className='text-gray-500 text-sm mb-6'>Enter your email address and we&apos;ll send you a link to reset your password.</p>
                <form className='flex flex-col gap-4 mb-6'>
                    <div className='flex flex-col'>
                      <label className='text-gray-700 text-sm font-medium mb-2' htmlFor="email">Email</label>
                      <input 
                        className='px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors' 
                        placeholder='you@example.com' 
                        id='email' 
                        type="email" 
                      />
                    </div>
                </form>
                <div className='flex gap-3'>
                    <Button 
                      clas={"w-full bg-white text-gray-700 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer font-medium"} 
                      click={closeModal} 
                      name={"Cancel"} 
                    />
                    <Button 
                      clas={"w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer font-medium"} 
                      type={"submit"} 
                      name={"Send Reset Link"} 
                    />
                </div>
            </div>
        </div>
        )}
    </>
  )
}

export default page