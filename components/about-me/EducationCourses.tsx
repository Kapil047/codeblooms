import React from 'react'
import Icons from '../ui/Icons'
import Paragraph from '../ui/Paragraph'
import Heading from '../ui/Heading' 
import { EDUCATION_DATA } from '../data/helper'

const EducationCourses = () => { 
  return (
    <div className='flex justify-between items-start lg:gap-[74px] md:gap-15 sm:gap-7 gap-5 relative max-sm:flex-col max-sm:items-center'>
      <Heading className='min-w-[210px] sm:text-start! sm:sticky top-25 max-lg:min-w-[200px]' Tag='h2'>Education <br /> & <span className='text-gray-500'>Courses</span></Heading>
      <div className="flex flex-col gap-[34px] w-full max-w-[646px]">
        {EDUCATION_DATA.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-[15px] p-5 border border-[#E4E7EC] rounded-[10px] w-full">
            <div className="flex gap-4 items-stretch w-full">
              <div className="size-15 min-w-15 rounded-lg shadow-[0px_0px_5px_0px_#00000005,0px_2px_10px_0px_#0000000F,0px_0px_1px_0px_#0000004D] flex justify-center items-center">
                <Icons icon='compenyLogoPlaceholder' />
              </div>
              <div className="grow border-b border-[#E4E7EC]">
                <h4 className='text-body font-bold'>{item.instituteName}</h4>
                <p className='text-body-sm text-[#757575] mt-[3px]'>{item.field}</p>
              </div>
            </div>
            <div>
              <p className='text-[11px] font-medium text-[#98A2B3]'>{item.duration}</p>
              <Paragraph className='text-body-sm! mt-[6px]'>{item.description}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationCourses 