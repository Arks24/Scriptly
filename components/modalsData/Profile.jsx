'use client'
import React, { useContext } from 'react'
import { useClerk, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { SkryptlyContext } from '@/context/ContextProvider'

const Profile = ({ closeModal, closeProfileModal, openChatHistory, setmessageInformation, setisInformation }) => {
  const { signOut } = useClerk()
  const router = useRouter()
  const {user} = useUser()
  const subscriptionExpire = user.publicMetadata.stripeCurrentPeriodEnd
  function formatDate(milliseconds) {
    let date = new Date(milliseconds*1000);
    console.log("date",date)
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const handleChatHistory = () => {
    closeProfileModal()
    openChatHistory()
  }
  const { userEmail } = useContext(SkryptlyContext)

  const handleCancleSubscription = () => {
    closeProfileModal()
    setmessageInformation(
      {
        type: 'subscription',
        text: 'In order to cancel your subscription please email support@skryptly.com from the email address associated with your account with the subject line “cancel subscription”.'
      }
    )
    setisInformation(true)
  }
  const handleDeleteAccount = () => {
    closeProfileModal()
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

  const handleLogout = () => {
    signOut()
    router.push("/")
  }

  return (
    <>
      <div className={`py-1`}>
        <div className='flex justify-between border-white border-b'>

          <h1 className='text-white  font-normal text-2xl text-left mx-4 p-6 my-2'>Settings </h1>
          <button onClick={() => handleCloseButton()}>
            <p className='text-3xl p-4 px-6 text-white'>X</p>
          </button>
        </div>
        <div className='py-4  mx-12 my-2 border-b border-white'>
          <div className='flex justify-between'>
            <p className='text-lg mt-2 pl-4 font-normal text-white '>Account</p>
            <p className='text-sm mt-2 pl-4 font-normal text-white '>{userEmail}</p>
          </div>

        </div>
        <div className='py-4  mx-12 my-2 border-b border-white'>
          <div className='flex justify-between'>
            <p className='text-lg mt-2 pl-4 font-normal text-white '>Subscription</p>
            <div className='mt-2  flex justify-between items-center'>
              <p className='text-white text-sm font-normal mx-4'>Your monthly subscription renews on {formatDate(subscriptionExpire)} </p>
              <button onClick={() => handleCancleSubscription()} className='text-center bg-logoColor text-white px-8  mx-1 rounded-lg p-2 text-sm font-base'>Cancel</button>
            </div>
          </div>

        </div>
        <div className='py-4  mx-12 my-2 border-b border-white'>
          <div className='flex justify-between'>
            <p className='text-lg mt-2 pl-4 font-normal text-white '>Delete All Chats</p>
            <div className=' mt-2 pl-4 '>
              <button onClick={handleChatHistory} className='text-center text-base bg-modalbtnredbg text-white px-8  mx-1 rounded-lg p-2 font-base'>Delete</button>
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