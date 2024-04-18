import { deleteAllChats } from '@/lib/fetch'
import React, { useContext } from 'react'
import {SkryptlyContext} from '@/context/ContextProvider'

const ChatHistory = ({closeModal,setisInformation,setmessageInformation,closeProfileModal }) => {
 
   const {setallChatHistory,userId,setcurrentChannelId,setcurrentSessionId} = useContext(SkryptlyContext)
  const handleYes = () => {
    closeProfileModal()
    closeModal()
    async function deleteChatHistory() {
    const result =  await deleteAllChats(userId)
    console.log(result)
      setmessageInformation(
        {type:'',
        text:'Your chat has been deleted'}
      )
      setcurrentChannelId('')
      setcurrentSessionId('')
      setisInformation(true)
    }
    deleteChatHistory()
    setallChatHistory(true)
    console.log('yes')
  }
  const handleNo = () => {
    console.log('no')
    closeProfileModal()
    closeModal()
  }
  return (
    <div className='flex flex-col p-6 items-center'>
      <p className='font-medium text-lg w-1/2 text-center my-2 text-white'>Are you sure you want to delete your chat history? This is not reversable</p>
      <div className='flex justify-between w-4/5 my-2 p-4'>
        <button onClick={() => handleYes()} className='text-center text-base bg-modalbtnredbg text-white px-16  mx-1 rounded-lg py-3 font-base'>Yes, delete</button>
        <button onClick={() => handleNo()} className='text-center text-base bg-white text-modalbtntext px-14  mx-1 rounded-lg py-3 font-base'>No, do not delete</button>
      </div>
    </div>
  )
}

export default ChatHistory