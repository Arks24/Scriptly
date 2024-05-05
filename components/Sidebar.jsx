'use client'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Youtubelogo from '/image/scripty-youtube-logo.png'
import Image from 'next/image'
import Profilelogo from '/image/scripty-preview-logo.png'
import Logoutlogo from '/image/logouts.png'
import ProfileModal from './modals/ProfileModal'
import YoutubeModal from './modals/YoutubeModal'
import DeleteChatModal from './modals/DeleteChatModal'
import MessageModelWrapper from './modals/MessageModalWrapper'
import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { SkryptlyContext } from '@/context/ContextProvider'
import messageIcon from '/image/message-icon.svg'
import plusIcon from '/image/plus-icon.svg'
import { getTimeStamp } from '@/lib/utils'
// import { nextButton } from '../app/components/utils/Tour'


const SideBar = ({ handleSessionClick, handleNewChat, allSessions }) => {

  const [isYoutubeOpen, setisYoutubeOpen] = useState(false)
  const [isProfileOpen, setisProfileOpen] = useState(false)
  const [isChatHistory, setisChatHistory] = useState(false)
  const [isInformation, setisInformation] = useState(false)
  const [messageInformation, setmessageInformation] = useState({ type: '', text: '' })

  const handleYoutubeClick = () => setisYoutubeOpen(true)
  const handleProfileClick = () => setisProfileOpen(true)

  const closeProfileModal = () => setisProfileOpen(false)
  const openChatHistory = () => setisChatHistory(true)
  const closeChatHistory = () => setisChatHistory(false)

  const { signOut } = useClerk()
  const router = useRouter()
  const { userName } = useContext(SkryptlyContext)

  const handleLogout = () => {
    signOut()
    router.push("/")
  }


  function getYouTubeChannelName(url) {
    // Extract the channel name from the URL
    const channelName = url.match(/@([a-zA-Z0-9_-]+)$/)[1];
    return channelName;
  }

  return (
    <>
      <YoutubeModal isOpen={isYoutubeOpen} setisOpen={setisYoutubeOpen} />
      <ProfileModal isOpen={isProfileOpen} setisOpen={setisProfileOpen} closeProfileModal={closeProfileModal} openChatHistory={openChatHistory} setmessageInformation={setmessageInformation} setisInformation={setisInformation} />

      <div className={`${(isYoutubeOpen || isProfileOpen || isChatHistory || isInformation) && 'blur-xs'} m-2 bg-bgColor h-full  rounded-xl shadow-lg shadow-black`}>

        <div className='p-3 flex flex-col m-1 h-[15%]'>
          <Link href='/' className='font-semibold text-white text-3xl tracking-wide my-2'>
            Skryptly<span className='text-logoColor'>.</span>
          </Link>
          <button onClick={handleNewChat} className='text-start leading-none bg-white text-textColor text-sm font-normal pl-3 mt-3 mx-1 rounded-lg p-2 font-base'>
            <span className='text-xl leading-none '><Image src={plusIcon} width={100} height={0} className='w-5 h-5 inline cursor-pointer  text-center fill-transparent ' alt='plus-icon' /></span>  New Chat
          </button>
        </div>
        <div className='flex flex-col mt-3 justify-between  h-[80%] '>
          <div className=' flex flex-col p-2 m-1 h-[400px]'>
          <p className='text-sm font-normal text-white my-2 mx-2'>Previous Chats</p>
            <div className='overflow-auto flex flex-col overflow-x-hidden  '>

              {allSessions?.length > 0 &&
                (
                  allSessions.map((session) => (

                    <button key={session._id} onClick={() => handleSessionClick(session._id, session.channel_id)} className='text-start bg-white flex gap-1 text-textColor text-sm font-normal  m-1 rounded-lg p-2 font-base'><Image src={messageIcon} width={100} height={0} className='w-5 h-5 inline-block cursor-pointer   text-center fill-transparent ' alt='message-icon' /> {session.channel_url ? <><span className={`${getYouTubeChannelName(session.channel_url).length>15 && 'truncate' } inline-block overflow-hidden w-3/5`}>{getYouTubeChannelName(session.channel_url)}</span> <span className="text-[10px] inline-block text-center w-2/5  ml-6">{getTimeStamp(session.timestamp)}</span></> : <><span className={`${session?.chatDetails?.length >15 && 'truncate' } inline-block overflow-hidden w-3/5`}>{session.chatDetails ? session.chatDetails : 'Current Chat'}</span> <span className="text-[10px] inline-block text-center w-2/5  ml-6">{getTimeStamp(session.timestamp)}</span></>}</button>

                  ))
                )
              }
            </div>

          </div>
       
          <div className=' flex px-3  min-h-32 justify-between flex-col'>
            <button className='youtube-btn text-center nextTour text-sm lg:text-base bg-white  text-textColor lg:pl-4 mx-1 rounded-xl p-2 font-semibold' onClick={() => handleYoutubeClick()}>Add Youtube Channel <Image src={Youtubelogo} width={40} height={40} alt='youtube-logo' className='inline p-1 lg:mx-2 align-middle' /></button>
            <div className='flex  justify-around profile-part' >

              <button onClick={() => handleProfileClick()} className=' w-3/4 flex items-center   '>
                <Image src={Profilelogo} width={100} height={10} alt='preview-logo' className='h-10 w-10 rounded-full' />
                <p className='text-base font-semibold px-2 mx-1 text-white'>{userName}</p>
              </button>
              <button onClick={() => handleLogout()} className=' p-2 border-2 border-white rounded-full'>
                <Image src={Logoutlogo} width={100} height={10} alt='logout-logo' className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
      

      {isChatHistory && <DeleteChatModal isOpen={isChatHistory} setisOpen={closeChatHistory} closeProfileModal={closeProfileModal} setisInformation={setisInformation} messageInformation={messageInformation} setmessageInformation={setmessageInformation} />}
      {isInformation && <MessageModelWrapper isOpen={isInformation} setisOpen={setisInformation} messageInformation={messageInformation} setmessageInformation={setmessageInformation} closeProfileModal={closeProfileModal} />}

    </>
  )
}

export default SideBar