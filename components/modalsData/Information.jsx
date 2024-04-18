import React from 'react'

const Information = ({ messageInformation,closemessageModal }) => {
  const handleCloseButton = () => {
    closemessageModal()
  }
  return (
    <div className='p-6 w-full min-h-[180px]'>
      <button className='text-right w-full outline-none'  onClick={()=>handleCloseButton()}>
            <p className='text-3xl px-6  text-white'>X</p>
          </button>
      {messageInformation.type ?
        <>
          <p className='text-center py-2 px-8 mx-[3.25rem] text-white font-normal text-lg'>{messageInformation.text}</p>
          <p className='text-center my-5 text-white font-normal text-lg'>Thankyou</p>
        </>

        :
        <p className='text-center py-6 mx-[3.25rem] text-white font-normal text-lg'>{messageInformation.text}</p>
      }
    </div>
  )
}

export default Information