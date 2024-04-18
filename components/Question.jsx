import React, { useContext, useState } from 'react'
import Image from 'next/image'
import PreviewLogo from '/image/scripty-preview-logo.png'
import Editlogo from '/image/edit-icon.png'
import { SkryptlyContext } from '@/context/ContextProvider'

const Question = ({ question,setisAnsGenerated,setisStopLoading,handleQuery }) => {
 
    const [query, setquery] = useState(question.content)
    const [isEdit, setisEdit] = useState(false)
    const {currentChannelId,currentSessionId} = useContext(SkryptlyContext)
    const role = 'user'
    const handleEdit = () => {
        setisEdit(true)
    }
    const handleChange = (e) => {
        setquery(e.target.value)
        // if (e.keys === "Enter") 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleQuery(query, role)
        setquery('')
        if(!currentChannelId || !currentSessionId) return 
        setisAnsGenerated(true)
        setisStopLoading(true)
        setisEdit(false)
        setquery(question.content)
        
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') handleSubmit(e)
    }

   
    return (
        <div className='w-full flex  bg-white rounded-xl shadow-md shadow-black/30 m-2 my-3 p-3'>
            <div className='border rounded-full w-10 h-10'>
                <Image src={PreviewLogo} width={20} height={20} alt='preview-logo' className='rounded-full w-full h-full inline' />
            </div>
            <div className='w-full  align-middle relative mx-2'>

                {isEdit ?
                
                <form onKeyDown={handleKeyDown} className='w-full'>
                    <textarea  type='text'  value={query} onChange={(e) => handleChange(e)} className='text-lg w-full font-normal outline-none  p-2' />


                    {/* <Image src={sendImage} onClick={handleSubmit} width={100} height={0} className='w-8 h-8 cursor-pointer absolute inline right-3 top-3 mx-3 text-center fill-transparent ' alt='message-icon' /> */}
                </form>
                :
                <>
                <p className=' text-lg w-[98%] font-normal inline-block p-2'>{question.content}</p>
                
                <button className='absolute inline top-2 right-2'>
                    <Image src={Editlogo} onClick={handleEdit} width={4} height={4} className='w-5 h-5 text-black' alt='edit-logo' />
                </button>
                </>
                }
            </div>
        </div>
    )
}

export default Question