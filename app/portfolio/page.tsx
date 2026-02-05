import Snapshots from '@/components/home/Snapshots'
import FeaturedProjects from '@/components/portfolio/FeaturedProjects'
import Hero from '@/components/portfolio/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <FeaturedProjects/>
        <Snapshots/>
    </div>
  )
}

export default page