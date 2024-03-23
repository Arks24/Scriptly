'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Youtubelogo from '/image/scripty-youtube-logo.png'
import Image from 'next/image'
import ModelWrapper from './ModelWrapper';
import Profilelogo from '/image/scripty-preview-logo.png'
import Logoutlogo from '/image/logouts.png'


const SideBar = () => {

  const [isYoutubeOpen, setisYoutubeOpen] = useState(false)
  const [isProfileOpen, setisProfileOpen] = useState(false)

  const handleYoutubeClick = () => setisYoutubeOpen(true)
  const handleProfileClick = () => setisProfileOpen(true)

   const closeProfileModal=()=> setisProfileOpen(false)
  //  const closeYoutubeModal=()=> setisYoutubeOpen(false)


  return (
    <>
      <ModelWrapper isOpen={isYoutubeOpen} setisOpen={setisYoutubeOpen} ModelType="youtube" />
      <ModelWrapper isOpen={isProfileOpen} setisOpen={setisProfileOpen} closeProfileModal={closeProfileModal} ModelType="profile" />

      <div className={`${(isYoutubeOpen || isProfileOpen )&& 'blur-xs'} m-2 bg-bgColor  h-full  rounded-xl shadow-lg shadow-black`}>

        <div className='p-3 h-[15%] flex flex-col m-1'>
          <Link href='/' className='font-semibold text-white text-3xl tracking-wide my-2'>
            Skryptly<span className='text-logoColor'>.</span>
          </Link>
          <button className='text-start leading-none bg-white text-textColor text-sm font-normal pl-3 mt-3 mx-1 rounded-lg p-2 font-base'>
            <span className='text-xl leading-none '>+</span>  New Chat
          </button>
        </div>
        <div className='flex  justify-between h-4/5 flex-col  '>

          <div className=' flex flex-col p-2 m-1 flex-1'>
            <p className='text-sm font-normal text-white my-3'>Previous Chats</p>
            <button className='text-start bg-white text-textColor text-sm font-normal  pl-4 m-1 rounded-lg p-2 font-base'>🗨️ Current Chat</button>
            <button className='text-start bg-white text-textColor text-sm font-normal  pl-4 m-1 rounded-lg p-2 font-base'>🗨️ Current Chat</button>
            <button className='text-start bg-white text-textColor text-sm font-normal  pl-4 m-1 rounded-lg p-2 font-base'>🗨️ Current Chat</button>
            <button className='text-start bg-white text-textColor text-sm font-normal  pl-4 m-1 rounded-lg p-2 font-base'>🗨️ Current Chat</button>
            <button className='text-start bg-white text-textColor text-sm font-normal  pl-4 m-1 rounded-lg p-2 font-base'>🗨️ Current Chat</button>
          </div>
          <div className=' flex px-3 h-36 justify-between flex-col'>
            <button  className='youtube-btn text-center text-base bg-white  text-textColor pl-4 mx-1 rounded-2xl p-2 font-semibold' onClick={() => handleYoutubeClick()}>Add Youtube Channel <Image src={Youtubelogo} width={40} height={40} alt='youtube-logo' className='inline p-1 mx-2 align-middle' /></button>
            <div className='flex  justify-between profile-part' >
              
              <button onClick={() => handleProfileClick()}  className=' w-3/4 flex items-center   '>
                <Image src={Profilelogo} width={100} height={10} alt='preview-logo' className='h-10 w-10 rounded-full' />
                <p className='text-base font-semibold px-2 mx-1 text-white'>John Smith</p>
              </button>
              <button onClick={() => handleLogoutClick()} className='px-2'>
                <Image src={Logoutlogo} width={100} height={10} alt='logout-logo' className='h-10 w-10 rounded-full' />
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default SideBar