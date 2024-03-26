import React from 'react'
import { handleTourPart } from '../utils/Tour'


const Welcome = ({closeModal}) => {
  const handleCloseButton = () => closeModal()
  const handleTour = () => {
    closeModal()
    handleTourPart()
    
  }

  return (
    <>
      <div className='w-[87%] mx-auto'>
        <h2 className='p-3 text-white text-center leading-3 font-semibold text-3xl my-6'>Welcome To Scriptly<span className='text-logoColor'>!</span></h2>
        <p className='font-semibold text-base text-white'>
          Skryptly is an AI companion that helps you write video scripts, faster.
        </p>
        <p className='font-semibold text-base my-4 text-white'>
          Simply add any YouTube channel you like, and Skryptly will use that channel to train a custom chatbot that will help you capture the tone and style of that channel in your own scripts.
        </p>
        <p className='font-semibold text-base my-4 text-white'>
          Now you can write scripts like your favorite youtubers!
        </p>
        <p className='font-semibold text-base my-4 text-white'>

          Would you like to see how to get started?
        </p>
        <div className='flex my-8 justify-around'>
          <button onClick={()=>handleTour()} className='bg-logoColor text-white text-base font-semibold p-4 rounded-lg px-16'>Yes,show me</button>
          <button onClick={()=>handleCloseButton()} className='bg-white text-modalbtntext text-base font-semibold p-4 rounded-lg px-16'>Not right now</button>
        </div>
      </div>

    </ >
  )
}

export default Welcome