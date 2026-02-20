import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-[30px] left-1/2 -translate-x-1/2 bg-white/60 rounded-[90px] py-5 px-11 shadow-[0px_0px_15px_0px_#00000008,0px_2px_30px_0px_#00000014,0px_0px_1px_0px_#0000004D] backdrop-blur-[15px] flex items-center justify-center gap-[46px] z-999 text-sm font-semibold text-primary leading-[20px]'>
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/about-me">About Me</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Header