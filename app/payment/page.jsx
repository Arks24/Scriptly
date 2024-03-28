'use client'
import Image from 'next/image'
import React from 'react'
import Tick from '../../image/tick.png'
import { useRouter } from 'next/navigation'
import { loadStripe } from "@stripe/stripe-js";

const asyncStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Chooseplan = () => {

    const router = useRouter();

    const handlePayment = async (amount) => {
        try {
            const stripe = await asyncStripe;
            const res = await fetch("/api/stripe", {
                method: "POST",
                body: JSON.stringify({
                    amount,
                }),
                headers: { "Content-Type": "application/json" },
            });
            const { sessionId } = await res.json();
            const { error } = await stripe.redirectToCheckout({ sessionId });
            console.log(error)
            if(error) router.push('/')
            console.log('payment succesful');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className='w-3/5 my-5 py-5 mx-auto'>
                <h1 className='text-center text-5xl font-semibold p-2'>Choose your pricing plan. </h1>
                <p className='text-center text-2xl font-normal'>(you will not be charged yet)</p>
            </div>
            <div className='w-3/5 my-2 py-5 flex justify-center mx-auto'>
                <div className='flex w-11/12 gap-10'>
                    <div className='shadow-xl w-3/5 rounded-large  p-5 px-7'>
                        <p className='text-start font-semibold text-lg text-paymenttext'>Monthly</p>
                        <h1 className='text-5xl text-start my-5 font-extrabold'>$14<span className='text-lg font-bold p-1'> /month</span> </h1>
                        <div className='my-2'>
                            <div className='text-start  p-1  flex my-3 w-full'>
                                <span className=' mx-1'><Image src={Tick} alt='tick' className='h-5 w-5 inline bg-bgColor rounded-full p-1' /></span>
                                <p className='text-lg font-semibold mx-1 w-full text-paymenttext'>Access to <span className='text-bgColor font-semibold text-lg'>Skryptly</span></p>
                            </div>
                            <div className='text-start p-1  flex my-3 w-full '>
                                <span className=' mx-1'><Image src={Tick} alt='tick' className='h-5 w-5 inline bg-bgColor rounded-full p-1' /></span>
                                <p className='text-lg mx-1 w-full font-semibold text-paymenttext'>Add unlimited youtube channels</p>
                            </div>
                            <div className='text-start p-1  flex my-3 w-full '>
                                <span className=' mx-1'><Image src={Tick} alt='tick' className='h-5 w-5 inline bg-bgColor rounded-full p-1' /></span>
                                <p className='text-lg font-semibold mx-1 w-full text-paymenttext'>Cancel anytime</p>
                            </div>
                        </div>
                        <div className='mt-16 flex justify-center '>
                            <button onClick={() => handlePayment(14)} className='bg-logoColor mt-7 text-white p-3 px-20 text-lg font-semibold rounded-xl'> Get started</button>
                        </div>
                    </div>
                    <div className=' w-3/5 shadow-xl rounded-large  p-5 px-7'>
                        <p className='text-start font-semibold text-lg text-paymenttext'>Annual</p>
                        <h1 className='text-5xl text-start my-5 font-extrabold'>$126<span className='text-lg font-bold p-1'> /year</span> </h1>
                        <div className='my-2'>
                            <div className='text-start  p-1  flex my-3 w-full'>
                                <span className=' mx-1'><Image src={Tick} alt='tick' className='size-5 inline bg-bgColor rounded-full p-1' /></span>
                                <p className='text-lg font-semibold mx-1 w-full text-paymenttext'>Access to <span className='text-bgColor font-semibold text-lg'>Skryptly</span></p>
                            </div>
                            <div className='text-start p-1  flex my-3 w-full '>
                                <span className=' mx-1'><Image src={Tick} alt='tick' className='h-5 w-5 inline bg-bgColor rounded-full p-1' /></span>
                                <p className='text-lg mx-1 w-full font-semibold text-paymenttext'>Add unlimited youtube channels</p>
                            </div>
                            <div className='text-start p-1  flex my-3 w-full '>
                                <span className=' mx-1'><Image src={Tick} alt='tick' className='h-5 w-5 inline bg-bgColor rounded-full p-1' /></span>
                                <p className='text-lg font-semibold mx-1 w-full text-paymenttext'>Cancel anytime</p>
                            </div>
                            <div className='text-start p-1  flex my-3 w-full '>
                                <span className=' mx-1'><Image src={Tick} alt='tick' className='h-5 w-5 inline bg-green rounded-full p-1' /></span>
                                <p className='text-lg  font-semibold mx-1 w-full underline text-green'>Get 2 months free!</p>
                            </div>
                        </div>
                        <div className='my-10 flex justify-center'>
                            <button onClick={() => handlePayment(126)} className='bg-logoColor text-white p-3 px-20 text-lg font-semibold rounded-xl'> Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chooseplan