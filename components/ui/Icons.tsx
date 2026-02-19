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