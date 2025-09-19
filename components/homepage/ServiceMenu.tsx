"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle, ArrowUpRight } from "lucide-react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Highlighter } from "../magicui/highlighter";
import { BlurFade } from "../magicui/blur-fade";
import { Button } from "../ui/button";
import Link from "next/link";

interface Service {
    id: string;
    name: string;
    image: string;
    description: string;
}

const services: Service[] = [
    {
        id: "skincare",
        name: "SKINCARE",
        image: "/skincare.jpg",
        description: "",
    },
    {
        id: "makeup",
        name: "MAKEUP",
        image: "makeup.jpg",
        description: "",
    },
    {
        id: "haircare",
        name: "HAIR CARE",
        image: "haircut.jpg",
        description: "",
    },
    {
        id: "facial",
        name: "Facial",
        image: "facial.webp",
        description: "",
    },
    {
        id: "wellness",
        name: "Waxing",
        image: "waxing.webp",
        description: "",
    },
];

export const ServicesMenu = () => {
    const [showHighlight, setShowHighlight] = useState(false);
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5 mb-20">
                <p className="text-2xl font-bold text-pink-600 carattere-font">Services</p>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl text-center instrument-font font-bold">
                    Where we <span className="carattere-font">
                        {/* highlighter not working */}
                        Excel
                    </span> in
                </motion.div>
            </div>

            <div className="flex flex-col items-center border-green-700">
                {
                    services.map((service) => (
                        <div key={service.id} className="relative group grid grid-cols-3 items-center justify-items-center hover:h-32 h-28 w-full focus-within:bg-pink-600 hover:bg-pink-600 transition-all duration-300">
                            <div className=" size-28 left-0  "></div>
                            <img className="absolute lg:block hidden opacity-0 group-hover:opacity-100 object-cover  size-40 left-53" src={service.image} alt="" />
                            <div>
                                <Link href={'/services'}>
                                    <h2 className="text-5xl uppercase whitespace-nowrap transition-transform  duration-300 instrument-font group-hover:text-white group-hover:italic">{service.name}</h2>
                                </Link>
                            </div>

                            <div className="hidden lg:flex opacity-0 group-hover:opacity-100">
                                <Link href={'/services'} className="text-2xl text-white instrument-font flex items-center gap-2" >View All <ArrowRightCircle /></Link>
                            </div>

                        </div>
                    ))
                }
            </div>
            <Link href="/services" className='flex items-center justify-center'>
                <Button variant={"ghost"}>Browse All <ArrowUpRight /></Button>
            </Link>
        </>

    );
};