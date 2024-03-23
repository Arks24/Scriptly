import React from 'react'

const Information = ({ messageInformation }) => {
  console.log(messageInformation)
  return (
    <div className='p-6 w-full'>
      {messageInformation.type ?
        <>
          <p className='text-center py-2 px-8 mx-[3.25rem] text-white font-normal text-lg'>{messageInformation.text}</p>
          <p className='text-center my-5 text-white font-normal text-lg'>Thankyou</p>
        </>

        :
        <p className='text-center py-10 mx-[3.25rem] text-white font-normal text-lg'>{messageInformation.text}</p>
      }
    </div>
  )
}

export default Information