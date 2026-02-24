import React from 'react'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'

const MyJourney = () => {
  return (
    <div className='flex justify-between items-start gap-[74px]'>
      <Heading className='text-nowrap text-start!' Tag='h2'>My <span className='text-gray-500'>Journey</span></Heading>
      <div className="flex flex-col gap-4 max-w-[646px]">
        <Paragraph className='text-body font-normal'>With over 8 years of experience as a Product Designer, I’ve shaped digital products for both startups and established companies. My career began in graphic design, where I developed a strong eye for aesthetics and user-centered design. As I transitioned into product design, I focused on creating seamless user experiences that drive engagement and business growth.</Paragraph>
        <Paragraph className='text-body font-normal'>I’ve worked across industries like FinTech, eCommerce, foodtech, and SaaS, gaining a deep understanding of designing for different user needs while ensuring business goals are met. From MVPs to fully operational platforms, I take a data-driven and user-centered approach to every project.</Paragraph>
        <Paragraph className='text-body font-normal'>I’ve led design systems, developed product strategies, and collaborated with teams to bring ideas from concept to reality.</Paragraph>
        <Paragraph className='text-body font-normal'>In recent years, I’ve helped startups achieve milestones, from building MVPs to launching products that generated millions in revenue and attracted thousands of users. I’m passionate about creating impactful digital experiences that drive success.</Paragraph>
      </div>
    </div>
  )
}

export default MyJourney