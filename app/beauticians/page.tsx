"use client";
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import React from 'react'
import { AnimatePresence, motion } from "motion/react";
import { cn } from '@/lib/utils';

import BlurText from '@/components/BlurText';
import { BlurFade } from '@/components/magicui/blur-fade';
import { CometCard } from '@/components/ui/comet-card';
import Link from 'next/link';


const beauticians = [
  {
    image: "/pia.jpg",
    name: "Priya Shah",
    description: "\"Expert in modern makeup and skin care.\"",
    skill: "Makeup Artist"
  },
  {
    image: "/deepa.jpg",
    name: "Deepa Shah",
    description: "\"Specializes in mehendi designs.\"",
    skill: "Mehendi Designer"
  },
  /*{
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    name: "Sonia Gandhi",
    description: "\"Renowned for creative makeup artistry for events.\"",
    skill: "Makeup Artist"
  },
  {
    image: "https://images.pexels.com/photos/2042455/pexels-photo-2042455.jpeg",
    name: "Emma Stone",
    description: "\"Professional nail technician with unique designs.\"",
    skill: "Nail Artist"
  },*/

];


const page = () => {

  return (

    <div className="container lg:px-40 lg:py-40 px-5 py-20 mx-auto ">
      <div className=' flex flex-col items-center justify-center gap-5 '>
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          // whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="group relative flex  rounded-full px-5 py-1.5   ">

          <AnimatedGradientText className="text-7xl md:text-8xl lg:text-9xl font-bold carattere-font">
            Beauticians.
          </AnimatedGradientText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" flex items-center justify-center rounded-full lg:w-[50rem]">

          <BlurText
            text={"Discover the world of beauty and wellness with our talented team of beauticians."}
            delay={40}
            animateBy="words"
            direction="top"
            className="text-lg lg:text-2xl flex justify-center instrument-font font-bold"
          />
        </motion.div>
      </div>


      <div className='space-y-20 mt-40'>
        {beauticians.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: index * 0.5 }}
            className=' grid grid-cols-1 gap-20 md:grid-cols-2 h-[600px]'>
            <div className="flex flex-col justify-center gap-2 items-start">
              <span
                className="text-2xl font- instrument-font">
                {item.skill}.
              </span>
              <BlurText
                text={item.name}
                delay={40}
                animateBy="letters"
                direction="top"
                className="text-5xl italic instrument-font font-bold"
              />
              <BlurText
                text={item.description}
                delay={40}
                animateBy="words"
                direction="bottom"
                className="text-2xl pt-1 carattere-font font-bold"
              />
            </div>
            <div className="  flex items-center justify-center overflow-hidden">
              <CometCard className=' ' >
                <BlurFade delay={0.5} className='' blur="15px" inView>
                  <img
                    className=" w-full h-full object-cover"
                    src={item.image}
                  />
                </BlurFade>
              </CometCard>
            </div>
          </motion.div>
        ))}
        <div className='mt-30'>
          <Link href="/bridal" className='text-center gap-5'>
            <p className="text-xl text-muted-foreground instrument-font">Next</p>
            <p className="text-7xl text-muted-foreground  md:text-8xl lg:text-9xl  font-bold carattere-font">Bridal</p>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default page
