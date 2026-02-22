'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import Button from '../ui/Button'
import Lottie from 'lottie-react'
import arrowAnimation from '../../public/assets/lottie/my-arrow-animation.json'

const APassion = () => {

  const lottieRef = useRef<any>(null);

  const handleMouseEnter = () => {

    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current.goToAndPlay(0, true);
      }, 300);
    }
  };
  return (
    <div className='lg:p-[64px] sm:p-10 p-7 max-sm:pb-15 bg-primary-solid'>
      <div className="max-w-[1036px] mx-auto grid sm:grid-cols-2 grid-cols-1 lg:gap-[64px]">
        <Image className='w-full my-auto max-sm:max-w-[400px] max-sm:mx-auto' width={100} height={100} src={"/assets/png/developer-image.png"} alt='developer-image' />
        <div className="flex flex-col sm:items-start justify-center items-center md:gap-[43px] sm:gap-6 gap-4 max-w-[396px] sm:max-w-[462px] max-sm:mx-auto">
          <Heading Tag='h2' className='sm:text-start text-white'>A Passion for Design and Innovation</Heading>
          <Paragraph className='text-body! font-normal max-sm:text-center text-white'>With over 8 years of experience, I’ve had the opportunity to lead and scale multiple platforms, transforming innovative ideas into fully operational products. From working with a YC-backed startup to developing platforms that have generated $20 million in revenue and attracted over 10,000 users</Paragraph>
          <button onMouseEnter={handleMouseEnter} className='text-button-secondary flex items-center justify-center gap-3 group max-sm:w-full bg-white relative duration-300 hover:bg-black hover:text-white w-[186px] hover:pl-3 hover:border-black font-semibold text-body-lg py-4 px-10 border border-secondary rounded-4xl shadow-[0px_1px_2px_0px_#1018280D,0px_-2px_0px_0px_#1018280D_inset,0px_0px_0px_1px_#1018282E_inset]'>Learn More
            <div className="size-9 opacity-0 group-hover:opacity-100 duration-300 bg-white absolute right-2 rounded-full p-0.5 group-hover:rotate-45">
              <div className="border border-black h-full w-full rounded-full flex justify-center items-center relative -rotate-135">
                <div className="scale-[0.8]">
                  <Lottie
                    lottieRef={lottieRef}
                    animationData={arrowAnimation}
                    loop={false}
                    autoplay={false}
                  />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default APassion