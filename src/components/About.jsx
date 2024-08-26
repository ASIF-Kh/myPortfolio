import React from 'react'
import {ABOUT_TEXT} from '../constants/index'
import { motion } from 'framer-motion'
function About() {
  return (
    <div id='about' className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1}}
        className='mt-20 mb-5 mt text-center text-4xl'>
            About Me
        </motion.h2>

        <div className='flex flex-wrap justify-center'>
       
                <motion.p 
                whileInView={{x: 0, opacity: 1}}
                initial={{x: -100, opacity: 0}}
                transition={{duration: 1}}
                className='max-w-3xl font-light tracking-tighter'>
                    {ABOUT_TEXT}
                </motion.p> 
        </div>
        
    </div>
  )
}

export default About