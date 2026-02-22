import type { ReactElement } from "react";
import React from "react";

interface LoginCardProps {
    icon: string;
    className?: string;
    fill?: string;
    iconClass?: string;
    pathClassName?: string;
    onClick?: () => void;
}

const Icons: React.FC<LoginCardProps> = ({
    icon,
    className,
    pathClassName,
}) => {
    const iconList = {
        google: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
            ></svg>
        ),
        buttonArrowIcon: (
            <svg width="5" height="6" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.92127 0.301392L0.30127 4.30139" stroke="black" stroke-width="0.602758" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.30127 0.301392H4.01368V3.0138" stroke="black" stroke-width="0.602758" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        ycIcon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_79_3329)">
                    <path d="M12.9 1H3.1C1.9402 1 1 1.9402 1 3.1V12.9C1 14.0598 1.9402 15 3.1 15H12.9C14.0598 15 15 14.0598 15 12.9V3.1C15 1.9402 14.0598 1 12.9 1Z" fill="#FF6600" />
                    <path d="M4.44531 4.08984H5.78516L8 8.57422L10.2148 4.0625H11.5547L8.49219 9.58594V13.25H7.34375V9.58594L4.44531 4.08984Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_79_3329">
                        <rect width="14" height="14" fill="white" transform="translate(1 1)" />
                    </clipPath>
                </defs>
            </svg>
        )
    };
    const addClassName = (
        icon: ReactElement<SVGElement>
    ): ReactElement<SVGElement> => {
        return React.cloneElement(icon, {
            className: (className || "") + " custom-class",
        });
    };
    const iconsNew = Object.fromEntries(
        Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
    );
    return iconsNew[icon] || null;
};

export default Icons;