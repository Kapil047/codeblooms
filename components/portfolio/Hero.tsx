import Image from 'next/image'
import React from 'react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'

const Hero = () => {
  return (
    <div className="pt-[30px] pb-[64px] px-5 relative">
      <Image
        fill
        className='object-cover w-full h-full absolute inset-0'
        src={'/assets/png/pattern-image.png'}
        alt='bg-image'
      />
      <div className="max-w-[1036px] mx-auto w-full relative z-10 max-lg:pt-[114px]">
        <div className="flex justify-between w-full items-center mb-[114px] max-lg:hidden">
          <p className='text-heading-sm font-bold'>
            Code <span className='text-gray-500'>Blooms</span>
          </p>
          <Button>Get In Touch</Button>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Badge>Crafting Experiences That Matter</Badge>
          </div>
          <Heading Tag='h1'>My Design <span className='text-gray-500'>Portfolio</span></Heading>
          <Paragraph className='font-medium'>Explore the apps, websites, and digital products I’ve crafted for businesses and startups</Paragraph>
          <Button>Contact Me</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero