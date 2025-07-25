import { MotionConfig } from "framer-motion";
import { SiCplusplus } from "react-icons/si";
import { SiC } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiKotlin } from "react-icons/si";

import { motion } from "framer-motion";

const iconVar = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Languages = () => {
  return (
    <div className="border-b border-neutral-800 pb-24"> 
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Languages</motion.h1>
        
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
            variants={iconVar(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiC className="text-7xl text-white" />
            </motion.div>

            <motion.div 
            variants={iconVar(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-white" />
            </motion.div>

            <motion.div 
            variants={iconVar(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-blue-400" />
            </motion.div>

            <motion.div 
            variants={iconVar(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className="text-7xl text-yellow-400" />
            </motion.div>

            <motion.div 
            variants={iconVar(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPhp className="text-7xl text-purple-400" />
            </motion.div>

            <motion.div 
            variants={iconVar(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKotlin className="text-7xl text-[#c116e3]" />
            </motion.div>


        </motion.div>
    </div>
  )
}

export default Languages
