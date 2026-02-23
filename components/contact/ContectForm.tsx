import React from 'react'

const ContectForm = () => {
  return (
    <div className='px-5 lg:py-16 md:py-12 sm:py-10 py-8'>
      <div className="max-w-[491px] mx-auto shadow-[0px_0px_16.97px_0px_#00000036] backdrop-blur-[4px] rounded-2xl sm:p-9 p-6">
        <form className='flex flex-col gap-4'>
          <div className="flex flex-col gap-1.5">
            <label className='text-body-sm font-medium text-button-secondary' htmlFor="fullName">
              Full Name
            </label>
            <input className='text-body text-gray-500 py-2.5 px-3.5 border border-secondary rounded-lg shadow-[0px_1px_2px_0px_#1018280D]' id='fullName' placeholder='Full Name' type="text" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className='text-body-sm font-medium text-button-secondary' htmlFor="email">
              Email
            </label>
            <input className='text-body text-gray-500 py-2.5 px-3.5 border border-secondary rounded-lg shadow-[0px_1px_2px_0px_#1018280D]' id='email' placeholder='Email' type="email" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className='text-body-sm font-medium text-button-secondary' htmlFor="subject">
              Subject
            </label>
            <input className='text-body text-gray-500 py-2.5 px-3.5 border border-secondary rounded-lg shadow-[0px_1px_2px_0px_#1018280D]' id='subject' placeholder='Subject' type="text" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className='text-body-sm font-medium text-button-secondary' htmlFor="description">
              Description
            </label>
            <textarea className='text-body text-gray-500 py-2.5 px-3.5 border border-secondary rounded-lg shadow-[0px_1px_2px_0px_#1018280D] h-[154px] resize-none' placeholder='Enter a description...' id="description"></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContectForm