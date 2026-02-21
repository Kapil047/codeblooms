'use client'
import arrowAnimation from '../../public/assets/lottie/navbar-animated-arrow-lottie-2.json'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const Header = () => {

  const pathName = usePathname();
  console.log(pathName)

  const useNavLottie = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    const timer = useRef<NodeJS.Timeout | null>(null);
    const isAnimating = useRef(false);

    const handleEnter = () => {
      if (isAnimating.current) return;

      isAnimating.current = true;

      if (timer.current) clearTimeout(timer.current);

      lottieRef.current?.goToAndPlay(0, true);

      timer.current = setTimeout(() => {
        lottieRef.current?.pause();
      }, 800);
    };

    const handleLeave = () => {
      if (!isAnimating.current) return;

      if (timer.current) clearTimeout(timer.current);

      lottieRef.current?.play();
    };

    const handleComplete = () => {
      isAnimating.current = false;
      lottieRef.current?.goToAndStop(0, true);
    };

    return { lottieRef, handleEnter, handleLeave, handleComplete };
  };



  const homeLink = useNavLottie();
  const portfolioLink = useNavLottie();
  const aboutMeLink = useNavLottie();
  const contactLink = useNavLottie();

  // const lottieRef = useRef<LottieRefCurrentProps>(null);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     lottieRef.current?.pause();
  //   }, 800);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className='fixed top-[30px] left-1/2 -translate-x-1/2 bg-white/60 rounded-[90px] py-5 px-11 shadow-[0px_0px_15px_0px_#00000008,0px_2px_30px_0px_#00000014,0px_0px_1px_0px_#0000004D] backdrop-blur-[15px] flex items-center justify-center gap-[46px] z-999 text-sm font-semibold text-primary leading-[20px]'>
      <div className="w-[70px] flex justify-center relative">
        <Link onMouseEnter={homeLink.handleEnter} onMouseLeave={homeLink.handleLeave} href="/">Home</Link>
        <div className="absolute left-6 max-w-[36px] -translate-y-[12px] translate-x-[1px] rotate-[29deg] pointer-events-none">
          <Lottie
            lottieRef={homeLink.lottieRef}
            animationData={arrowAnimation}
            loop={false}
            autoplay={false}
            onComplete={homeLink.handleComplete}
          />
        </div>
      </div>
      <div className="w-[70px] flex justify-center relative">
        <Link onMouseEnter={portfolioLink.handleEnter} onMouseLeave={portfolioLink.handleLeave} href="/portfolio">Portfolio</Link>
        <div className="absolute left-6 max-w-[36px] -translate-y-[16px] -translate-x-[0.25px] rotate-[25deg] pointer-events-none">
          <Lottie
            lottieRef={portfolioLink.lottieRef}
            animationData={arrowAnimation}
            loop={false}
            autoplay={false}
            onComplete={portfolioLink.handleComplete}
          />
        </div>
      </div>
      <div className="w-[70px] flex justify-center relative">
        <Link onMouseEnter={aboutMeLink.handleEnter} onMouseLeave={aboutMeLink.handleLeave} href="/about-me">About Me</Link>
        <div className="absolute left-6 max-w-[36px] translate-y-[6px] -translate-x-[9.25px] rotate-[212deg] pointer-events-none">
          <Lottie
            lottieRef={aboutMeLink.lottieRef}
            animationData={arrowAnimation}
            loop={false}
            autoplay={false}
            onComplete={aboutMeLink.handleComplete}
          />
        </div>
      </div>
      <div className="w-[70px] flex justify-center relative">
        <Link onMouseEnter={contactLink.handleEnter} onMouseLeave={contactLink.handleLeave} href="/contact">Contact</Link>
        <div className="absolute left-6 max-w-[36px] translate-y-[6px] -translate-x-[13.25px] rotate-[212deg] pointer-events-none">
          <Lottie
            lottieRef={contactLink.lottieRef}
            animationData={arrowAnimation}
            loop={false}
            autoplay={false}
            onComplete={contactLink.handleComplete}
          />
        </div>
      </div>
    </div>
  )
}

export default Header