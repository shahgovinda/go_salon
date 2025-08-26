"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Highlighter } from "../magicui/highlighter";

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
                <div className="group relative  flex  rounded-full px-4 py-1.5   ">
                    <span
                        className={cn(
                            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/70 via-[#9c40ff]/80 to-[#ffaa40]/70 bg-[length:300%_100%] p-[3px]",
                        )}
                        style={{
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                        }}
                    />

                    <AnimatedGradientText className="text-2xl font-bold carattere-font">
                        Services
                    </AnimatedGradientText>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl instrument-font font-bold">
                    Where we <span className="carattere-font">

                        {/* highlighter not working */}
                        Excel
                    </span> in
                </motion.div>
            </div>

            <div className="flex flex-col items-center border-green-700">
                {
                    services.map((service) => (
                        <div key={service.id} className="relative group grid grid-cols-3 items-center justify-items-center hover:h-32 h-28 w-full bg-background hover:bg-pink-600 transition-all duration-300">
                            <div className=" size-28 left-0  "></div>
                            <img className="absolute opacity-0 group-hover:opacity-100 object-cover  size-40 left-53" src={service.image} alt="" />

                            <div>
                                <h2 className="text-5xl uppercase transition-all duration-300 instrument-font group-hover:text-white group-hover:italic">{service.name}</h2>
                            </div>

                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl text-white instrument-font flex items-center gap-2" >View All <ArrowRightCircle /></span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>

    );
};