"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress"


const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1200)
    return () => clearTimeout(timer)
  }, [])

  console.log("Loading:", loading); // Add console log to see if loading is properly changing
  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <div className="w-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 0}}
        animate={{ opacity: 1, scale: [1,0.9,1,0.9,1], rotate: 360}}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1}}
        className=" flex item-center justify-center mt-12"
      >
        <Image src="/codezardicon.svg" alt="logo" width={50} height={50} />
        <motion.div
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1,}}
          transition={{ duration: 1.2, ease: "easeInOut"}}
        >
          {/* <Image className="flex items-center justify-start mb-24 mr-11 absolute" src="/sparkle.svg" alt="logo" width={15} height={15} /> */}
        </motion.div>
      </motion.div>
      </div>
      <div className="flex flex-col w-full items-center ">
      <Progress value={progress} className="w-[30%] mt-14" />
      {/* <h1 className="text-xs font-thin text-center text-gray-200 animate-pulse">GETTING THINGS READY FOR YOU! ALMOST THERE...</h1> */}
      </div>
      </div>
    );
  }
};
export default SplashScreen;
