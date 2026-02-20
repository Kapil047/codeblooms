import React from 'react'
import Heading from '../ui/Heading'
import Paragraph from '../ui/Paragraph'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const WorkedWith = () => {
  return (
    <div className='py-[82px] '>
      <div className="max-w-[1076px] w-full mx-auto flex justify-center gap-4 flex-col items-center px-5">
        <Heading Tag='h3' >Companies I’ve Worked With</Heading>
        <Paragraph>Helping leading companies innovate and succeed through impactful design solutions</Paragraph>
      </div>
      <Marquee autoFill pauseOnHover pauseOnClick className='max-w-[1440px] mx-auto'>
        <div className="md:size-40 sm:size-35 size-30 flex justify-center items-center md:mr-[50px] sm:mr-10 mr-6">
          <Image width={150} height={34} src={'/assets/png/clearcoin-image.png'} alt='clearcoin' />
        </div>
        <div className="md:size-40 sm:size-35 size-30 flex justify-center items-center md:mr-[50px] sm:mr-10 mr-6">
          <Image width={122} height={35} src={'/assets/png/finrise-image.png'} alt='finrise' />
        </div>
        <div className="md:size-40 sm:size-35 size-30 flex justify-center items-center md:mr-[50px] sm:mr-10 mr-6">
          <Image width={131} height={22} src={'/assets/png/moneyMesh-image.png'} alt='MoneyMesh' />
        </div>
        <div className="md:size-40 sm:size-35 size-30 flex justify-center items-center md:mr-[50px] sm:mr-10 mr-6">
          <Image width={108} height={25} src={'/assets/png/vaultPay-image.png'} alt='VaultPay' />
        </div>
        <div className="md:size-40 sm:size-35 size-30 flex justify-center items-center md:mr-[50px] sm:mr-10 mr-6">
          <Image width={130} height={25} src={'/assets/png/wealthLink-image.png'} alt='wealthLink' />
        </div>
      </Marquee>
    </div>
  )
}

export default WorkedWith