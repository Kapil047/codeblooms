import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import Icons from '../ui/Icons'
import Image from 'next/image'
import { PORTFOLIO_DATA } from '../data/helper'

const FeaturedProjects = () => {
  return (
    <div className='lg:py-16 md:py-12 sm:py-10 py-8 px-5'>
      <div className="max-w-[1036px] mx-auto flex flex-col justify-center items-center gap-[64px]">
        <div className="flex justify-center items-center gap-6 flex-col">
          <Heading className='text-heading-xl! font-semibold!' Tag='h2'>Portfolio</Heading>
          <Paragraph>Check out what we've been working on lately</Paragraph>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {
            PORTFOLIO_DATA.map((item, index) => (
              <div key={index} className="border border-[#E4E7EC] sm:py-6 sm:px-[18px] p-3  rounded-2xl">
                <div className="p-2.5 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)]">
                  <Image width={100} height={100} className='w-full md:h-full h-[300px] rounded-lg object-cover' src={item.mainImage} alt={item.grayTitle} />
                </div>
                <Heading Tag='h3' className='text-heading-sm text-start sm:mt-6 mt-4'>{item.mainTitle} <span className='text-gray-500'>{item.grayTitle}</span></Heading>
                <Paragraph className='text-body! text-start mt-4 pb-4 border-b border-[#E4E7EC]'>{item.paragraph}</Paragraph>
                <div className="flex items-center gap-4 sm:mt-6 mt-4">
                  {
                    item.tag.map((tag, tagIndex) => (
                      <div key={tagIndex} className="py-[5px] px-3 flex items-center gap-1 shadow-[0px_0px_1px_0px_#0000004D,0px_2px_10px_0px_#0000000F,0px_0px_5px_0px_#00000005] rounded-[999px]">
                        {tag.icon && (
                          <Icons icon={tag.icon} />
                        )}
                        <p className='text-caption font-medium text-button-secondary '>{tag.text}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects