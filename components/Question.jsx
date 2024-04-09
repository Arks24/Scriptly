import React from 'react'
import Image from 'next/image'
import PreviewLogo from '/image/scripty-preview-logo.png'
import Editlogo from '/image/edit-icon.png'

const Question = ({ question }) => {
   
    return (
        <div className='w-full flex items-center bg-white rounded-xl shadow-md shadow-black/30 m-2 my-3 p-3'>
            <div className='border rounded-full w-10 h-10'>
                <Image src={PreviewLogo} width={20} height={20} alt='preview-logo' className='rounded-full w-full h-full inline' />
            </div>
            <div className='w-full inline relative mx-2'>

                <p className=' text-lg w-full font-normal inline p-2'>{question.content}</p>
                <button className='absolute right-2'>
                    <Image src={Editlogo} width={4}height={4} className='w-5 h-5' alt='edit-logo' />
                </button>
            </div>
        </div>
    )
}

export default Question