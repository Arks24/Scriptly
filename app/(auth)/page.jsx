import React from 'react'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

const page = () => {
    
    return (

        <div className='flex items-center justify-center flex-col'>
            <div className='w-1/2 mx-auto pt-10  min-h-[500px] flex items-center '>
                <h1 className='text-5xl leading-normal py-3 font-semibold text-center p-5 '>At the beginning is the marketing site that is built by me and hosted in Framer</h1>
            </div>
            <div className='flex w-1/2   mx-auto justify-center items-center'>
                <Link href='/sign-up' >
                    <SignOutButton>

                        <button className='text-5xl  bg-logoColor text-white p-6 rounded-large px-10'>Sign Up</button>
                    </SignOutButton>
                </Link>
            </div>
        </div>
    )
}

export default page