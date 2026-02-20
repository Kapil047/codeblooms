import Image from 'next/image'
import React from 'react'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import Button from '../ui/Button'

const APassion = () => {
  return (
    <div className='lg:p-[64px] sm:p-10 p-7 max-sm:pb-15 bg-primary-solid'>
      <div className="max-w-[1036px] mx-auto grid sm:grid-cols-2 grid-cols-1 lg:gap-[64px]">
        <Image className='w-full my-auto max-sm:max-w-[400px] max-sm:mx-auto' width={100} height={100} src={"/assets/png/developer-image.png"} alt='developer-image' />
        <div className="flex flex-col sm:items-start justify-center items-center md:gap-[43px] sm:gap-6 gap-4 max-w-[396px] sm:max-w-[462px] max-sm:mx-auto">
          <Heading Tag='h2' className='sm:text-start text-white'>A Passion for Design and Innovation</Heading>
          <Paragraph className='text-body! font-normal max-sm:text-center text-white'>With over 8 years of experience, I’ve had the opportunity to lead and scale multiple platforms, transforming innovative ideas into fully operational products. From working with a YC-backed startup to developing platforms that have generated $20 million in revenue and attracted over 10,000 users</Paragraph>
          <button className='text-button-secondary max-sm:w-full bg-white hover:bg-button-secondary hover:text-white hover:border-white duration-300 font-semibold text-body-lg py-4 px-[51px] border border-secondary rounded-4xl shadow-[0px_1px_2px_0px_#1018280D,0px_-2px_0px_0px_#1018280D_inset,0px_0px_0px_1px_#1018282E_inset]'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default APassion