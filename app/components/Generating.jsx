import React from 'react'
import Copylogo from '/image/copy.png'
import Image from 'next/image'
import { SpinnerCircularFixed } from 'spinners-react'

const Generating = ({isStopLoading,setisStopLoading}) => {

    
    const handleStop = () => {
        setisStopLoading(false)
       
    }
    return (
        <div className='w-full flex items-center bg-white rounded-xl shadow-md shadow-black/30 m-2 my-3 p-3'>

            <SpinnerCircularFixed size={30} thickness={120} speed={100} color="#EE51B2" secondaryColor="#ffffff" />

            <div className='w-full inline relative mx-2'>

                <p className=' text-lg w-full font-normal inline p-2'>Generating...</p>
                {isStopLoading ?

                    <button onClick={() => handleStop()} className='absolute right-2 flex -top-2 p-2 bg-bgColor/10 rounded-xl'>
                        <Image src={Copylogo} width={4} height={4} className='w-6 h-6 bg-opacity-0' alt='edit-logo ' />
                        <span className='mx-1'>Stop</span>
                    </button>
                    :
                    <button onClick={() => handleStop()} className='absolute right-2 flex -top-2 p-2 bg-bgColor/10 rounded-xl'>
                        <Image src={Copylogo} width={4} height={4} className='w-6 h-6 bg-opacity-0' alt='edit-logo ' />
                        <span className='mx-1'>Stoped</span>
                    </button>
                }
            </div>
        </div>
    )
}

export default Generating