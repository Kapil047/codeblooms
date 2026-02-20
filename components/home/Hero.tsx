import React from 'react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="pt-[30px] pb-[64px] px-5 relative">
      <Image
        fill
        className='object-cover w-full h-full absolute inset-0'
        src={'/assets/png/pattern-image.png'}
        alt='bg-image'
      />
      <div className="max-w-[1036px] mx-auto w-full relative z-10">
        <div className="flex justify-between w-full items-center mb-[114px]">
          <p className='text-heading-sm font-bold'>
            Code <span className='text-gray-500'>Blooms</span>
          </p>
          <Button>Get In Touch</Button>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Badge>Product Design</Badge>
            <Badge>UI/UX Design</Badge>
            <Badge>Web Design</Badge>
          </div>
          <Heading Tag='h1' spanText='Hello!'> CodeBlooms, UI-UX Product Designer, Based in Dubai</Heading>
          <Paragraph className='font-medium'>8+ Years of Experience Designing Stunning Products and Transforming Ideas into Reality”</Paragraph>
          <Button>Contact Me</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero