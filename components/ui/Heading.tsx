import React from 'react'

interface HeadingProps {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  spanText?: string;
}

const Heading = ({ Tag, children, className, spanText }: HeadingProps) => {
  return (
    <Tag className={`${Tag === 'h1' ? 'text-main-heading font-bold leading-[140%] text-center' : Tag === 'h2' ? 'text-heading-lg font-bold leading-[120%] text-center' : Tag === 'h3' ? 'text-heading-md font-semibold leading-[120%] text-center' : ''} ${className}`}> <span className='text-gray-500'>{spanText}</span> {children}</Tag>
  )
}

export default Heading