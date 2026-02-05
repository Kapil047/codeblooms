import Discover from '@/components/portfolio/portfolio-detail/Discover'
import Hero from '@/components/portfolio/portfolio-detail/Hero'
import ScreenShots from '@/components/portfolio/portfolio-detail/ScreenShots'
import Shipped from '@/components/portfolio/portfolio-detail/Shipped'
import WhatIs from '@/components/portfolio/portfolio-detail/WhatIs'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <WhatIs/>
        <Discover/>
        <Shipped/>
        <ScreenShots/>
    </div>
  )
}

export default page