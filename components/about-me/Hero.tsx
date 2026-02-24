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
          <div className="size-[289px] ">
            <Image width={289} height={289} className='w-full h-full scale-[1.1]' src={"/assets/png/about-me-hero-image.png"} alt='my-image' />
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Badge>Product Design</Badge>
            <Badge>UI/UX Design</Badge>
            <Badge>Web Design</Badge>
          </div>
          <Heading Tag='h1' spanText='Code'> Blooms Here</Heading>
          <Paragraph className='font-medium text-center'>Whether you’re looking to discuss a new project, seek advice, or collaborate, I’m always excited to connect and explore new possibilities.</Paragraph>
          <Button>Contact Me</Button>
          <div className="flex items-center gap-2 justify-center max-w-[714px] w-full mx-auto">
            <div className="w-full bg-[#E4E7EC] h-px"></div>
            <span className=''>Or</span>
            <div className="w-full bg-[#E4E7EC] h-px"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero