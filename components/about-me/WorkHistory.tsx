import { WORK_HISTORY_DATA } from "../data/helper"
import Heading from "../ui/Heading"
import Icons from "../ui/Icons"
import Paragraph from "../ui/Paragraph"

 

export default function WorkHistory() {
  return (
    <div className='flex justify-between items-start lg:gap-[74px] md:gap-15 sm:gap-7 gap-5 relative max-sm:flex-col max-sm:items-center'>
      <Heading className='text-nowrap sm:text-start! sm:sticky top-25 max-lg:min-w-[200px]' Tag='h2'>Work <span className='text-gray-500'>History</span></Heading>
      <div className="flex flex-col gap-[34px] max-w-[646px]">
        {WORK_HISTORY_DATA.map((item, index) => (
          <div key={index} className="flex items-start gap-[15px] p-5 border border-[#E4E7EC] rounded-[10px] w-full flex-col">
            <div className="flex gap-4 items-stretch w-full">
              <div className="size-15 min-w-15 rounded-lg shadow-[0px_0px_5px_0px_#00000005,0px_2px_10px_0px_#0000000F,0px_0px_1px_0px_#0000004D] flex justify-center items-center">
                <Icons icon='compenyLogoPlaceholder' />
              </div>
              <div className="grow border-b border-[#E4E7EC]">
                <h4 className='text-body font-bold'>{item.companyName}</h4>
                <p className='text-body-sm text-[#757575] mt-[3px]'>{item.role}</p>
              </div>
            </div>
            <div>
              <p className='text-[11px] font-medium text-[#98A2B3]'>{item.duration}</p>
              <Paragraph className='text-body-sm! mt-[6px]'>{item.description}</Paragraph>
              <div className="bg-[#E4E7EC] h-px my-3.5 w-full"></div>
              <div className="flex items-center gap-x-4 gap-y-2 sm:mt-6 mt-4 flex-wrap">
                {item.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                    <p className='text-caption font-medium text-button-secondary'>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}