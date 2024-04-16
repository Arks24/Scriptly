'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useClerk } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'
import { retrieveStripeCheckoutSession } from '@/lib/stripe'

export default function Checkout() {
    const { session } = useClerk()
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('sessionId')

    useEffect(() => {
        if (!sessionId || !session) return
        retrieveStripeCheckoutSession(sessionId).then(({ success, error }) => {
            if (success) {
              session?.reload()
            }
      
            if (error) {
              console.error('Failed to retrieve checkout session!')
            }
          })
    }, [sessionId, session])

    return (
        <section className='py-24 '>
            <div className='container border p-5 rounded-xl shadow-bgColor shadow-md mx-auto max-w-3xl'>
                <h1 className='text-center text-lg font-medium '>
                    Payment successful
                </h1>
                <p className='mt-2 text-4xl text-logoColor text-center font-extrabold tracking-tight sm:text-5xl'>
                    Thanks for joining Skryptly.
                </p>
                <p className='mt-2 text-base text-center text-gray-500 dark:text-gray-400'>
                    We&apos;re super stoked to have you here!
                </p>

                <Link
                    href='/home'
                    className='mt-8 flex gap-2 rounded-md justify-center items-center  px-3 py-1 text-black'
                >
                    <button className='bg-logoColor shadow-sm shadow-bgColor  text-white p-3 rounded-xl'>Go back home</button>
                </Link>
            </div>
        </section>
    )
}