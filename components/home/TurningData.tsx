import React from 'react'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import Button from '../ui/Button'
import Image from 'next/image'

const TurningData = () => {
  return (
    <div className='px-5 py-[64px]'>
      <div className="max-w-[1036px] mx-auto flex justify-center items-center lg:gap-[64px] lg:flex-row flex-col">
        <div className="flex flex-col sm:items-start items-center md:gap-[43px] sm:gap-6 gap-4 max-w-[396px]">
          <Heading Tag='h2' className='sm:text-start'>Turning Data into <span className='text-gray-500'>Design</span></Heading>
          <Paragraph className='text-body! font-normal max-sm:text-center'>My approach to product design revolves around data-driven insights, ensuring every decision is backed by real user needs and behavior.</Paragraph>
          <Button>Contact Me</Button>
        </div>
        <Image width={559} height={559} className='h-full sm:w-[54%] max-sm:max-w-[428px] w-full' src={"/assets/png/data-image.png"} alt={"data-image"}/>
      </div>
    </div>
  )
}

export default TurningData