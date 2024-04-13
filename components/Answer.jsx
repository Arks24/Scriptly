'use client'
import Image from 'next/image'
import React, {useState, useRef } from 'react'
import Botlogo from '/image/scripty-light-logo.png'
import Copylogo from '/image/copy.png'

const Answer = ({ answer }) => {
    const [copy, setcopy] = useState(false)
    const ansData = useRef()
    const handleCopy = () => {
        navigator.clipboard.writeText(ansData.current.innerText)
        setcopy(true)
        setTimeout(()=>{
            setcopy(false)
        },1000)
    }
    return (
        <div className='w-full  bg-white rounded-xl shadow-md shadow-black/30 m-2 my-3 p-3'>

            <div className=' relative '>
                <Image src={Botlogo} width={100} height={20} alt='preview-logo' className='rounded-full  w-12 h-12 inline object-center' />

                <p className='inline'>Genetating Time 2.004sec</p>
                {!copy ?
                    <button onClick={() => handleCopy()} className='absolute right-2 flex top-2 p-2 bg-bgColor/10 rounded-xl'>
                        <Image src={Copylogo} width={4} height={4} className='w-6 h-6 bg-opacity-0' alt='edit-logo ' />
                        <span className='mx-1'>Copy</span>
                    </button>

                    :
                    <button onClick={() => handleCopy()} className='absolute right-2 flex top-2 p-2 bg-bgColor/10 rounded-xl'>
                        <Image src={Copylogo} width={4} height={4} className='w-6 h-6 bg-opacity-0' alt='edit-logo ' />
                        <span className='mx-1'>Copied</span>
                    </button>
                }
            </div>
            <p ref={ansData} className=' text-lg mx-2 w-full font-normal p-2 leading-8'>{answer.content}</p>
        </div>
    )
}

export default Answer