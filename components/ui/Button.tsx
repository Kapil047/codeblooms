'use client'
import React, { useRef, useState } from 'react'
import Icons from './Icons';
import Lottie from 'lottie-react';
import arrowAnimation from '../../public/assets/lottie/my-arrow-animation.json'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  const lottieRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (isPlaying) return;

    setIsPlaying(true);

    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true);
    }
  };
  return (
    <button onMouseEnter={handleMouseEnter} onClick={onClick} className={`sm:py-3 py-2 sm:pr-3 pr-2 sm:pl-6 pl-4 sm:text-xl text-lg bg-black rounded-full text-white font-medium leading-[120%] flex justify-center items-center gap-3 ${className}`}>{children}
      <div className="size-9 bg-white rounded-4xl p-0.5">
        <div className="border border-black h-full w-full rounded-full flex justify-center items-center relative -rotate-135">
          <Lottie
            lottieRef={lottieRef}
            animationData={arrowAnimation}
            loop={false}
            autoplay={false}
            onComplete={() => setIsPlaying(false)}
          />
        </div>
      </div></button>
  )
}

export default Button