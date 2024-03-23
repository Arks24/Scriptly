import Image from 'next/image'
import React from 'react'
import Botlogo from '/image/scripty-light-logo.png'
import Copylogo from '/image/copy.png'

const Answer = ({ answer }) => {
    return (
        <div className='w-full  bg-white rounded-xl shadow-md shadow-black/30 m-2 my-3 p-3'>
            
            <div className=' relative mx-2'>
                <Image src={Botlogo} width={100} height={20} alt='preview-logo' className='rounded-full  w-12 h-12 inline object-center' />
         
            <p className='inline'>Genetating Time 2.004sec</p>
                <button className='absolute right-2 flex top-2 p-1 bg-bgColor/10 rounded-xl'>
                    <Image src={Copylogo} width={4} height={4} className='w-6 h-6 bg-opacity-0' alt='edit-logo ' />
                    <span className='mx-1'>Copy</span>
                </button>
            </div>
            <p className=' text-lg mx-2 w-full font-normal p-2'>{answer.text}</p>
        </div>
    )
}

export default Answer