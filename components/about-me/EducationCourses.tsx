import React from 'react'
import Icons from '../ui/Icons'
import Paragraph from '../ui/Paragraph'
import Heading from '../ui/Heading'

const EducationCourses = () => {
  return (
    <div className='flex justify-between items-start gap-[74px]'>
      <Heading className='min-w-[210px] text-start!' Tag='h2'>Education <br /> & <span className='text-gray-500'>Courses</span></Heading>
      <div className="flex flex-col gap-[34px] w-full max-w-[646px]">
        <div className="flex flex-col items-start gap-[15px] p-5 border border-[#E4E7EC] rounded-[10px] w-full">
          <div className="flex gap-4 items-stretch w-full">
            <div className="size-15 min-w-15 rounded-lg shadow-[0px_0px_5px_0px_#00000005,0px_2px_10px_0px_#0000000F,0px_0px_1px_0px_#0000004D] flex justify-center items-center">
              <Icons icon='compenyLogoPlaceholder' />
            </div>
            <div className="grow border-b border-[#E4E7EC]">
              <h4 className='text-body font-bold'>International University</h4>
              <p className='text-body-sm text-[#757575] mt-[3px]'>Design</p>
            </div>
          </div>
          <div>
            <p className='text-[11px] font-medium text-[#98A2B3]'>Oct 2017 - Feb 2020</p>
            <Paragraph className='text-body-sm! mt-[6px]'>Completed a BA Certificate in Graphic Design and applied arts at international university.</Paragraph>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[15px] p-5 border border-[#E4E7EC] rounded-[10px] w-full">
          <div className="flex gap-4 items-stretch w-full">
            <div className="size-15 min-w-15 rounded-lg shadow-[0px_0px_5px_0px_#00000005,0px_2px_10px_0px_#0000000F,0px_0px_1px_0px_#0000004D] flex justify-center items-center">
              <Icons icon='compenyLogoPlaceholder' />
            </div>
            <div className="grow border-b border-[#E4E7EC]">
              <h4 className='text-body font-bold'>International University</h4>
              <p className='text-body-sm text-[#757575] mt-[3px]'>Design</p>
            </div>
          </div>
          <div>
            <p className='text-[11px] font-medium text-[#98A2B3]'>Oct 2017 - Feb 2020</p>
            <Paragraph className='text-body-sm! mt-[6px]'>Completed a BA Certificate in Graphic Design and applied arts at international university.</Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationCourses