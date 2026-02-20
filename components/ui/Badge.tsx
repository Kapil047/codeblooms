import React from 'react'

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}


const Badge = ({ children, className }: BadgeProps) => {
    return (
        <div className={`bg-[#F9FAFB] border border-[#E4E7EC] py-1 px-3 text-sm rounded-3xl font-medium text-button-secondary text-center ${className}`}>{children}</div>
    )
}

export default Badge