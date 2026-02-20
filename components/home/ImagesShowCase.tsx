import Image from 'next/image'
import React from 'react'

const ImagesShowCase = () => {
  return (
    <div className='max-w-[1440px] mx-auto h-full'>
      <Image width={1400} height={100} className='h-full w-full' src={"/assets/png/screenshot-show-case-image.png"} alt='image' />
    </div>
  )
}

export default ImagesShowCase 