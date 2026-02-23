import React from 'react'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import { TOOLBOX_DATA } from '../data/helper'
import Icons from '../ui/Icons'

const Toolbox = () => {
  return (
    <div className='px-5 lg:py-16 md:py-12 sm:py-10 py-8 bg-[#F9FAFB]'>
      <div className="max-w-[1036px] mx-auto flex flex-col justify-center items-center lg:gap-16 md:gap-12 sm:gap-9 gap-6">
        <div className="flex flex-col sm:gap-6 gap-4 items-center justify-center">
          <Heading Tag='h2' className='text-heading-xl'>Design & Development <span className='text-gray-500'>Toolbox</span></Heading>
          <Paragraph className='font-medium text-center'>A comprehensive suite of tools that I use to design, prototype, and bring ideas to life</Paragraph>
        </div>
        <div className="flex flex-wrap md:gap-10 sm:gap-6 sm: gap-4 justify-center">
          {
            TOOLBOX_DATA.map((item, index) => (
              <div className="sm:size-24 size-16 sm:p-[19px] p-3 shadow-[0_0_4px_0_rgba(0,0,0,0.1)] flex justify-center items-center" key={index}>
                <Icons className='w-full h-full' icon={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Toolbox