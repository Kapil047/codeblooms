import React from 'react'
import Icons from '../ui/Icons'
import Paragraph from '../ui/Paragraph'
import Button from '../ui/Button'

const Footer = () => {
  return (
    <div className='bg-gray-25 py-[64px] py-5'>
      <div className="max-w-[1036px] mx-auto flex flex-col items-center gap-8">
        <p className='text-heading-sm font-bold'>
          Code <span className='text-gray-500'>Blooms</span>
        </p>
        <h3 className='text-heading-md font-semibold text-center'>
          Let’s Stay Connected
        </h3>
        <Paragraph className='text-center'>Interested in discussing design, sharing ideas, or exploring innovations in product design? Feel free to reach out—let’s keep the conversation going.</Paragraph>
        <Button className='bg-black text-white rounded-4xl text-'>Get In Touch</Button>
      </div>
    </div>
  )
}

export default Footer