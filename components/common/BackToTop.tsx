"use client";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";
import arrowAnimation from "../../public/assets/lottie/my-arrow-animation.json";

export default function BackToTop() {
    const [show, setShow] = useState(false);
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        lottieRef.current.setSpeed(0.85);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white p-2 text-white shadow-lg hover:shadow-xl ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
            <div className="border border-black h-full w-full rounded-full flex justify-center items-center relative -rotate-180">
                <Lottie
                    lottieRef={lottieRef}
                    animationData={arrowAnimation}
                    loop
                    autoplay
                />
            </div>
        </button>
    );
}