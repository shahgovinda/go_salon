"use client"
import React from 'react'
import { BlurFade } from '../magicui/blur-fade'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const Section3 = () => {
    return (
        <div className="container lg:px-40 lg:py-40 px-5 py-20  mx-auto ">
            <p className="text-2xl font-bold text-pink-600 text-center whitespace-nowrap carattere-font">About Us</p>
            <div className=" h-full gap-10  items-center flex flex-col lg:flex-row  border-blue-600">

                <div className="hidden lg:block">
                    <BlurFade offset={80} delay={0.8} direction="right" blur="10px" inView>
                        <img
                            className=" h-84 w-full lg:w-54 object-cover"
                            src="priyA.png"
                        />
                    </BlurFade>
                </div>

                <div className="col-span-3 ">
                    
                    <div className="text-2xl lg:text-5xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <span className="instrument-font ">The harmony between </span>
                            <span className="carattere-font ">powerful high -  </span><br />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}>
                            <span className="carattere-font">performance ingredients </span>
                            <span className="instrument-font">and exceptionally</span><br />
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 20 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="instrument-font">simple skincare routines.</motion.span>

                    </div>
                </div>

                <div className=" items-center inline-flex justify-center ">
                    <BlurFade offset={80} delay={0.8} direction="left" blur="10px" inView>
                        <img
                            className="h-84 w-full lg:w-54 rounded-g object-cover"
                            src="pyellow.jpg"
                        />
                    </BlurFade>
                </div>

            </div>
            <Link href="/about" className='flex items-center justify-center'>
                <Button variant={"ghost"}>Read More <ArrowUpRight/></Button> 
            </Link>
        </div>
    )
}

export default Section3
