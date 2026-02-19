import React from 'react'

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <p className={`text-body-lg text-gray-500 ${className}`}>{children}</p>
  )
}

export default Paragraph