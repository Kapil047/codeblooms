import React from 'react'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import Icons from '../ui/Icons'

const WorkHistory = () => {
  return (
    <div className='flex justify-between items-start gap-[74px]'>
      <Heading className='text-nowrap text-start!' Tag='h2'>Work <span className='text-gray-500'>History</span></Heading>
      <div className="flex flex-col gap-[34px] max-w-[646px]">
        <div className="flex items-start gap-5 p-5 border border-[#E4E7EC] rounded-[10px] w-full">
          <div className="size-15 min-w-15 rounded-lg shadow-[0px_0px_5px_0px_#00000005,0px_2px_10px_0px_#0000000F,0px_0px_1px_0px_#0000004D] flex justify-center items-center">
            <Icons icon='compenyLogoPlaceholder'/>
          </div>
          <div>
            <h4 className='text-body font-bold'>Company Name</h4>
            <p className='text-body-sm text-[#757575] mt-[3px]'>Senior Product Designer</p>
            <p className='text-[11px] font-medium text-[#98A2B3] mt-3.5'>March 2024 - Present</p>
            <Paragraph className='text-body-sm! mt-[6px]'>I play a pivotal role in shaping the product checkout experience and developing the EPOS mobile app. My responsibilities include integrating third-party plugins, as well as structuring and maintaining the comprehensive design system to ensure a seamless user interface across platforms.</Paragraph>
            <div className="bg-[#E4E7EC] h-px my-3.5 w-full"></div>
            <div className="flex items-center gap-4 sm:mt-6 mt-4">
              <div className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                <p className='text-caption font-medium text-button-secondary '>Fintech</p>
              </div>
              <div className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                <p className='text-caption font-medium text-button-secondary '>Full Time</p>
              </div>
              <div className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                <p className='text-caption font-medium text-button-secondary '>Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-5 p-5 border border-[#E4E7EC] rounded-[10px] w-full">
          <div className="size-15 min-w-15 rounded-lg shadow-[0px_0px_5px_0px_#00000005,0px_2px_10px_0px_#0000000F,0px_0px_1px_0px_#0000004D] flex justify-center items-center">
            <Icons icon='compenyLogoPlaceholder'/>
          </div>
          <div>
            <h4 className='text-body font-bold'>Company Name</h4>
            <p className='text-body-sm text-[#757575] mt-[3px]'>Senior Product Designer</p>
            <p className='text-[11px] font-medium text-[#98A2B3] mt-3.5'>March 2024 - Present</p>
            <Paragraph className='text-body-sm! mt-[6px]'>I play a pivotal role in shaping the product checkout experience and developing the EPOS mobile app. My responsibilities include integrating third-party plugins, as well as structuring and maintaining the comprehensive design system to ensure a seamless user interface across platforms.</Paragraph>
            <div className="bg-[#E4E7EC] h-px my-3.5 w-full"></div>
            <div className="flex items-center gap-4 sm:mt-6 mt-4">
              <div className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                <p className='text-caption font-medium text-button-secondary '>Fintech</p>
              </div>
              <div className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                <p className='text-caption font-medium text-button-secondary '>Full Time</p>
              </div>
              <div className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                <p className='text-caption font-medium text-button-secondary '>Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkHistory