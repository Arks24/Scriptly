import React from 'react'
import { SignOutButton, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

const page = () => {

    return (
        <>
            <div className='flex items-center justify-center flex-col'>
                <div className='w-1/2 mx-auto pt-10  min-h-[500px] flex items-center '>
                    <h1 className='text-5xl leading-normal py-3 font-semibold text-center p-5 '>At the beginning is the marketing site that is built by me and hosted in Framer</h1>
                </div>
                <div className='flex w-1/2   mx-auto justify-center items-center'>
                    <SignOutButton>

                        <Link href='/sign-up' >

                            <button className='text-4xl  bg-logoColor text-white p-4 rounded-large px-10'>Sign Up</button>
                        </Link>
                    </SignOutButton>
                </div>
            </div>
        </>
    )
}

export default page