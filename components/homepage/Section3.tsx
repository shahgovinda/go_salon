"use client"
import React from 'react'
import { BlurFade } from '../magicui/blur-fade'
import { motion } from 'framer-motion'

const Section3 = () => {
    return (
        <div className="container px-40  mx-auto border">
            <div className="grid grid-cols-1 h-full gap-10 lg:grid-cols-5 items-center  border-blue-600">

                <div className="border ">
                    <BlurFade offset={80} delay={0.8} direction="right" blur="10px" inView>
                        <img
                            className=" h-84 object-cover"
                            src="https://www.shutterstock.com/image-photo/skin-care-woman-beauty-face-600nw-2206367897.jpg"
                        />
                    </BlurFade>
                </div>

                <div className="col-span-3 ">
                    <div className="text-5xl text- text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <span className="instrument-font ">The harmony between </span>
                            <span className="carattere-font ">powerful high- </span><br />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}>
                            <span className="carattere-font ">performance ingredients </span>
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

                <div className="border ">
                    <BlurFade offset={80} delay={0.8} direction="left" blur="10px" inView>
                        <img
                            className="h-84 rounded-g object-cover"
                            src="https://img.freepik.com/premium-photo/healthy-hair-woman-nice-girl-with-brown-curly-hair-hair-care-concept_263368-7637.jpg"
                        />
                    </BlurFade>
                </div>

            </div>
        </div>
    )
}

export default Section3