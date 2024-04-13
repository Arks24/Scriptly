'use client'
import React, {  useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import YoutubeImage from '/image/scripty-youtube-logo.png'
import DeleteLogo from '/image/delete.png'
import { addYoutubeChannel, deleteYoutubeChannel, getChannels } from '@/lib/fetch'
import { SkryptlyContext } from '@/context/ContextProvider'

const Youtube = ({closeModal}) => {
  

  const [totalYoutubeChannel, settotalYoutubeChannel] = useState([])
  const [newChannel, setnewChannel] = useState('')
  const {setcurrentChannelId,setcurrentSessionId,userId} = useContext(SkryptlyContext)
  
  const handleChange = (e) => {
    setnewChannel(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    async function fetchChannels() {

      const newChannelData =await addYoutubeChannel(newChannel, userId)
      console.log(newChannelData)
      settotalYoutubeChannel([...totalYoutubeChannel, { channel_id: newChannelData.channel_id, channel_url: newChannel,user_id:clerkUserId }])
      setcurrentChannelId(newChannelData.channel_id)
      setcurrentSessionId(newChannelData.session_id)
      setnewChannel('')
    }
    fetchChannels()
  }

  const handleCloseButton = () => closeModal()

  const handleDeleteChannel=(channelId)=>{
    const newList = totalYoutubeChannel.filter((each)=>channelId !== each._id)
    async function deleteChannel(){
       await deleteYoutubeChannel(channelId)
       console.log('delete channel')
      }
      deleteChannel()
      settotalYoutubeChannel([...newList])
  }

  useEffect(() => {
    async function fetchChannels() {
      const fetchChannels = await getChannels(clerkUserId)
      settotalYoutubeChannel(fetchChannels)
    }
    fetchChannels()
}, [totalYoutubeChannel.length])

  return (
    <>
      <div className='py-1'>
        <div className='flex justify-between border-white border-b'>

        <h1 className='text-white  font-normal text-2xl text-left p-6 my-2'>Youtube Channels <Image src={YoutubeImage} width={100} height={10} className='w-10 h-10 inline align-middle' alt='youtube' /> </h1>
        <button onClick={()=>handleCloseButton()}>
         <p className='text-3xl p-4 px-6 text-white'>X</p>
          </button> 
        </div>
        <div className='p-4 px-8 my-2 border-b border-white'>
          <p className='text-[20px] my-4 font-normal text-white '>Enter the URL of the Youtube Channel you want to add below:</p>
          <form onSubmit={handleSubmit} className='flex items-center justify-between'>

            <input type='text' onChange={(e) => handleChange(e)} value={newChannel} className='py-3 px-4 mt-2 mb-4 text-lg w-[70%] rounded-full' placeholder='www.youtube.com/@Wendoverproductions' />
          <button type='submit' className='bg-logoColor w-[25%] text-white p-3 px-4 text-base font-semibold rounded-lg'>Add Channel</button>
          </form>
        </div>
        <div className='p-4 px-8 my-2'>
          <p className='text-[20px] text-white font-normal my-3 '>Added Channels:</p>
          {totalYoutubeChannel.length > 0 && totalYoutubeChannel.map((item) => (
            <div className='flex justify-between my-1 w-4/5' key={item._id}>
              <p className='text-base font-normal my-1 text-white'>{item.channel_url}</p>
              <button onClick={()=>handleDeleteChannel(item._id)}>
                <Image src={DeleteLogo} width={100} height={10} alt='delete-logo' className='w-6 h-6 text-white hover:text-white' />
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