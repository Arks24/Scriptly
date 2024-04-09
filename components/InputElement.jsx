'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import SendMessageIcon from '/image/message-icon.png'

const InputElement = ({handleQuery, setisAnsGenerated, setisStopLoading }) => {
    // const { handleQuery } = useContext(SkryptlyContext)
    const [query, setquery] = useState('')
    const role = 'user'
    const handleChange = (e) => {
        setquery(e.target.value)
        if (e.keys === "Enter") handleQuery(e.target.value,role)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleQuery(query, role)
        setisAnsGenerated(true)
        setquery('')
        setisStopLoading(true)
    }
    return (
        <div className=' w-4/5 mx-auto p-3 ' >
            <form onSubmit={handleSubmit}>
                <div className='relative input-part '>

                    <input type='text' value={query} onChange={(e) => handleChange(e)} className='text-lgw-fullbg-white border border-black shadow-2xl p-4 w-full inline rounded-full border-none focus:border-none' placeholder='Get Started here... ' />

                    <Image src={SendMessageIcon} onClick={handleSubmit} width={100} height={0} className='w-8 h-8 cursor-pointer absolute inline right-3 top-3 mx-3 text-center ' alt='message-icon' />
                </div>

            </form>
        </div>
    )
}

export default InputElement