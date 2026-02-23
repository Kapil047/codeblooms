'use client'
import React, { useRef, useState } from 'react'
import Icons from '../ui/Icons'
import Paragraph from '../ui/Paragraph'
import Button from '../ui/Button'
import Link from 'next/link'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import twitterAnimationData from '../../public/assets/lottie/twitter.json'
import LinkdinAnimationData from '../../public/assets/lottie/linkdin.json'

const Footer = () => {
  const useHoverLottie = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
      if (isPlaying) return;

      setIsPlaying(true);
      lottieRef.current?.goToAndPlay(0, true);
    };

    const handleComplete = () => {
      // lottieRef.current?.goToAndStop(0, true);
      lottieRef.current?.stop();

      setIsPlaying(false);
    };

    return {
      lottieRef,
      handleMouseEnter,
      handleComplete,
    };
  };

  const twitterAnimation = useHoverLottie();
  const LinkdinAnimation = useHoverLottie();

  return (
    <div className='bg-gray-25 lg:py-16 md:py-12 sm:py-10 py-8 px-5'>
      <div className="max-w-[1036px] mx-auto flex flex-col items-center md:gap-8 sm:gap-6 gap-3">
        <p className='text-heading-sm font-bold'>
          Code <span className='text-gray-500'>Blooms</span>
        </p>
        <h3 className='text-heading-md font-semibold text-center'>
          Let’s Stay Connected
        </h3>
        <Paragraph className='text-center'>Interested in discussing design, sharing ideas, or exploring innovations in product design? Feel free to reach out—let’s keep the conversation going.</Paragraph>
        <Button>Get In Touch</Button>
        <div className="flex justify-between max-sm:flex-col gap-5 w-full lg:pt-10 md:pt-8 sm:pt-6 pt-5 border-t border-[#E4E7EC]">
          <p className='text-body-lg text-gray-500 text-center'>© {new Date().getFullYear()} CodeBlooms. All rights reserved.</p>
          <div className="flex items-center gap-4 max-sm:justify-center">
            <Link className='size-6' onMouseEnter={twitterAnimation.handleMouseEnter} href={"#"}>
              <div className="scale-[1.4]">
                <Lottie
                  lottieRef={twitterAnimation.lottieRef}
                  animationData={twitterAnimationData}
                  loop={false}
                  autoplay={false}
                  onComplete={twitterAnimation.handleComplete}
                />
              </div>
            </Link>
            <Link className='size-6 bg-[#98A2B3] rounded-[3px]' onMouseEnter={LinkdinAnimation.handleMouseEnter} href={"#"}>
              <Lottie
                lottieRef={LinkdinAnimation.lottieRef}
                animationData={LinkdinAnimationData}
                loop={false}
                autoplay={false}
                onComplete={LinkdinAnimation.handleComplete}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer