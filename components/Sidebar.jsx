'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
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
import { getSessions } from '@/lib/fetch'
// import { nextButton } from '../app/components/utils/Tour'


const SideBar = ({handleSessionClick,handleNewChat,allSessions}) => {

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

  // const [allSessions, setallSessions] = useState([])

  const { signOut } = useClerk()
  const router = useRouter()
  const userId = 'user_12345'

  const handleLogout = () => {
    signOut()
    router.push("/")
  }


  // useEffect(() => {
  //   async function fetchSessions() {
  //     const response = await getSessions(userId)
  //     console.log(response)
  //     setallSessions(response)
  //   }
  //   fetchSessions()

  // }, [])

  return (
    <>
      <YoutubeModal isOpen={isYoutubeOpen} setisOpen={setisYoutubeOpen} />
      <ProfileModal isOpen={isProfileOpen} setisOpen={setisProfileOpen} closeProfileModal={closeProfileModal} openChatHistory={openChatHistory} setmessageInformation={setmessageInformation} setisInformation={setisInformation} />

      <div className={`${(isYoutubeOpen || isProfileOpen || isChatHistory || isInformation) && 'blur-xs'} m-2 bg-bgColor  h-full  rounded-xl shadow-lg shadow-black`}>

        <div className='p-3 h-[15%] flex flex-col m-1'>
          <Link href='/' className='font-semibold text-white text-3xl tracking-wide my-2'>
            Skryptly<span className='text-logoColor'>.</span>
          </Link>
          <button onClick={()=>handleNewChat()} className='text-start leading-none bg-white text-textColor text-sm font-normal pl-3 mt-3 mx-1 rounded-lg p-2 font-base'>
            <span className='text-xl leading-none '>+</span>  New Chat
          </button>
        </div>
        <div className='flex  justify-between h-4/5 flex-col  '>

          <div className=' flex flex-col p-2 m-1 flex-1'>
            <p className='text-sm font-normal text-white my-3'>Previous Chats</p>
            {allSessions.length > 0 &&
              (
                allSessions.map((session) => (

                  <button key={session._id} onClick={()=>handleSessionClick(session._id)} className='text-start bg-white text-textColor text-sm font-normal  pl-4 m-1 rounded-lg p-2 font-base'>🗨️ Current Chat</button>

                ))
              )
            }

          </div>
          <div className=' flex px-3 h-36 justify-between flex-col'>
            <button className='youtube-btn text-center nextTour text-sm lg:text-base bg-white  text-textColor lg:pl-4 mx-1 rounded-xl p-2 font-semibold' onClick={() => handleYoutubeClick()}>Add Youtube Channel <Image src={Youtubelogo} width={40} height={40} alt='youtube-logo' className='inline p-1 lg:mx-2 align-middle' /></button>
            <div className='flex  justify-between profile-part' >

              <button onClick={() => handleProfileClick()} className=' w-3/4 flex items-center   '>
                <Image src={Profilelogo} width={100} height={10} alt='preview-logo' className='h-10 w-10 rounded-full' />
                <p className='text-base font-semibold px-2 mx-1 text-white'>John Smith</p>
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