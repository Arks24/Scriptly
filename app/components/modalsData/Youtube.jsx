'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import YoutubeImage from '/image/scripty-youtube-logo.png'
import DeleteLogo from '/image/delete.png'

const Youtube = ({closeModal}) => {

  const [totalYoutubeChannel, settotalYoutubeChannel] = useState([])
  const [newChannel, setnewChannel] = useState('')
  
  const handleChange = (e) => {
    setnewChannel(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    settotalYoutubeChannel([...totalYoutubeChannel, newChannel])
    setnewChannel('')
  }
  const handleCloseButton = () => closeModal()
  const handleDeleteChannel=(item)=>{
    const newList = totalYoutubeChannel.filter((each)=>item !== each)
    settotalYoutubeChannel([...newList])
    console.log('delete channel')
  }

  return (
    <>
      <div className='py-1'>
        <div className='flex justify-between border-white border-b'>

        <h1 className='text-white  font-normal text-2xl text-left p-6 my-2'>Youtube Channel <Image src={YoutubeImage} width={100} height={10} className='w-10 h-10 inline align-middle' /> </h1>
        <button onClick={()=>handleCloseButton()}>
         <p className='text-3xl p-4 px-6 text-white'>X</p>
          </button> 
        </div>
        <div className='p-4 px-8 my-2 border-b border-white'>
          <p className='text-[20px] my-4 font-normal text-white '>Enter the URL of the Youtube Channel you want to add below:</p>
          <form onSubmit={handleSubmit}>

            <input type='text' onChange={(e) => handleChange(e)} value={newChannel} className='p-2 px-4 mt-2 mb-4 text-lg w-[70%] rounded-full' placeholder='www.youtube.com/@Wendoverproductions' />
          </form>
        </div>
        <div className='p-4 px-8 my-2'>
          <p className='text-[20px] text-white font-normal my-3 '>Added Channels:</p>
          {totalYoutubeChannel.length > 0 && totalYoutubeChannel.map((item, index) => (
            <div className='flex justify-between my-1 w-3/5' key={index}>
              <p className='text-lg font-normal my-1 text-white'>{item}</p>
              <button onClick={()=>handleDeleteChannel(item)}>
                <Image src={DeleteLogo} width={100} height={10} alt='delete-logo' className='w-6 h-6 text-white' />
              </button>
            </div>
          )
          )}
        </div>
      </div>
    </>
  )
}

export default Youtube