import React from 'react'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import { SNAPSHOTS_DATA } from '../data/helper'
import Image from 'next/image'

const Snapshots = () => {
  return (
    <div className='px-5 lg:py-16 md:py-12 sm:py-10 py-8 '>
      <div className="max-w-[1036px] mx-auto flex flex-col justify-center items-center lg:gap-16 md:gap-12 sm:gap-9 gap-6">
        <div className="flex flex-col sm:gap-6 gap-4 items-center justify-center">
          <Heading Tag='h2' className='text-heading-xl'>Design & Development <span className='text-gray-500'>Toolbox</span></Heading>
          <Paragraph className='font-medium text-center'>A comprehensive suite of tools that I use to design, prototype, and bring ideas to life</Paragraph>
        </div>
        <div className="md:-mx-5 -mx-3">
          <div className="flex flex-wrap w-full justify-center gap-y-6">
            {
              SNAPSHOTS_DATA.map((item, index) => (
                <div key={index} className="md:w-1/3 sm:w-1/2 w-full md:px-5 px-3 max-sm:max-w-[400px]">
                  <Image width={100} height={100} className='h-[317px] w-full object-cover object-center rounded-lg border border-[#E4E7EC]' src={item} alt="snapshot image" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Snapshots