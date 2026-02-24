import React from 'react'
import Paragraph from '../ui/Paragraph'
import Icons from '../ui/Icons'
import Heading from '../ui/Heading'
import { SKILL_SET_DATA } from '../data/helper'

const SkillSet = () => {
  return (
    <div className='flex justify-between items-start gap-[74px]'>
      <Heading className='text-start! text-nowrap' Tag='h2'>Skill <span className='text-gray-500'>Set</span></Heading>
      <div className="flex flex-col gap-[34px] w-full max-w-[646px]">
        {
          SKILL_SET_DATA.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-4 p-5 border border-[#E4E7EC] rounded-[10px] w-full">
              <h3 className='text-body font-semibold'>{item.title}</h3>
              <div className="flex gap-4 flex-wrap p-4 gap-4 border border-[#E4E7EC] rounded-[10px]">
                {
                  item.skills.map((tag, tagIndex) => (
                    <div key={tagIndex} className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                      <p className='text-caption font-medium text-button-secondary '>{tag}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SkillSet