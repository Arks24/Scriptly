'use client'
import React, { useState } from 'react'
import MessageModalWrapper from '../MessageModalWrapper'
import DeleteChatModal from '../DeleteChatModal'

const Profile = ({isOpen, closeModal, closeProfileModal }) => {

  const [isChatHistory, setisChatHistory] = useState(false)
  const [isInformation, setisInformation] = useState(false)
  const [messageInformation, setmessageInformation] = useState({ type: '', text: '' })

  console.log(isOpen)

  const handleChatHistory = () => {
    if(isOpen) closeProfileModal()
    setisChatHistory(true)
  }

  const handleCancleSubscription = () => {
    // if(isOpen) closeProfileModal()
    setmessageInformation(
      {
        type: 'subscription',
        text: 'In order to cancel your subscription please email support@skryptly.com from the email address associated with your account with the subject line “cancel subscription”.'
      }
    )
    setisInformation(true)
  }
  const handleDeleteAccount = () => {
    // if(isOpen) closeProfileModal()
    setmessageInformation(
      {
        type: 'account',
        text: 'In order to delete your account please email support@skryptly.com from the email address associated with your account with the subject line “delete my account”.'
      }
    )
    setisInformation(true)
  }

  const handleCloseButton = () => {
    closeModal()
  }

  const handleLogout = () => console.log('logout')

  return (
    <>
      <DeleteChatModal isOpen={isChatHistory} checkProfile={isOpen} closeProfileModal={closeProfileModal} setisOpen={setisChatHistory} />
      <MessageModalWrapper isOpen={isInformation} messageInformation={messageInformation} setisOpen={setisInformation}   /> 

      <div className={`${(isChatHistory || isInformation) && 'blur-xs'} py-1`}>
        <div className='flex justify-between border-white border-b'>

          <h1 className='text-white  font-normal text-2xl text-left mx-4 p-6 my-2'>Settings </h1>
          <button onClick={() => handleCloseButton()}>
            <p className='text-3xl p-4 px-6 text-white'>X</p>
          </button>
        </div>
        <div className='py-4  mx-12 my-2 border-b border-white'>
          <div className='flex justify-between'>
            <p className='text-lg mt-2 pl-4 font-normal text-white '>Account</p>
            <p className='text-sm mt-2 pl-4 font-normal text-white '>johnsmith@gmail.com</p>
          </div>

        </div>
        <div className='py-4  mx-12 my-2 border-b border-white'>
          <div className='flex justify-between'>
            <p className='text-lg mt-2 pl-4 font-normal text-white '>Subscription</p>
            <div className='mt-2  flex justify-between items-center'>
              <p className='text-white text-sm font-normal mx-4'>Your monthly subscription renews on date </p>
              <button onClick={() => handleCancleSubscription()} className='text-center bg-logoColor text-white px-8  mx-1 rounded-lg p-2 text-sm font-base'>Cancle</button>
            </div>
          </div>

        </div>
        <div className='py-4  mx-12 my-2 border-b border-white'>
          <div className='flex justify-between'>
            <p className='text-lg mt-2 pl-4 font-normal text-white '>Delete All Chats</p>
            <div className=' mt-2 pl-4 '>
              <button onClick={() => handleChatHistory()} className='text-center text-base bg-modalbtnredbg text-white px-8  mx-1 rounded-lg p-2 font-base'>Delete</button>
            </div>
          </div>

        </div>
        <div className='py-4  mx-12 my-2 border-b border-white'>
          <div className='flex justify-between'>
            <p className='text-lg mt-2 pl-4 font-normal text-white '>Delete Account</p>
            <div className='mt-2 pl-4 '>
              <button onClick={() => handleDeleteAccount()} className='text-center text-base bg-modalbtnredbg text-white px-8  mx-1 rounded-lg p-2 font-base'>Delete</button>
            </div>
          </div>

        </div>
        <div className='p-4 px-8 my-4 text-center'>
          <button onClick={() => handleLogout()} className='text-center bg-logoColor text-base text-white px-28  mx-1 rounded-lg py-3 font-base'>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Profile