'use client'
import React, {useContext, useState } from 'react'
import Image from 'next/image'
import sendImage  from '/image/send-image.svg'
import { SkryptlyContext } from '@/context/ContextProvider'

const InputElement = ({handleQuery, setisAnsGenerated, setisStopLoading }) => {
    const [query, setquery] = useState('')
    const {currentChannelId,currentSessionId} = useContext(SkryptlyContext)
    const role = 'user'
    const handleChange = (e) => {
        setquery(e.target.value)
        if (e.keys === "Enter") handleQuery(e.target.value,role)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleQuery(query, role)
        setquery('')
        if(!currentChannelId || !currentSessionId) return 
        setisAnsGenerated(true)
        setisStopLoading(true)
    }
    return (
        <>
       
        <div className=' w-4/5 mx-auto p-3 ' >
            <form onSubmit={handleSubmit}>
                <div className='relative input-part '>

                    <input type='text' value={query} onChange={(e) => handleChange(e)} className='text-lg bg-white text-textColor border border-black/70 shadow-lg shadow-black/40 p-4 w-full inline rounded-full border-none focus:border-none' placeholder='Get Started here... ' />

                    <Image src={sendImage} onClick={handleSubmit} width={100} height={0} className='w-8 h-8 cursor-pointer absolute inline right-3 top-3 mx-3 text-center fill-transparent ' alt='message-icon' />
                </div>

            </form>
        </div>
        </>
    )
}

export default InputElement