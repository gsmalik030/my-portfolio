import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-1 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HTML and CSS"
            subTitle="Microverse (2023)"
            result="online"
            des="In this module I learned Semantic HTML and object oriented CSS."
          />
          <ResumeCard
            title="JavaScript"
            subTitle="Microverse (2023)"
            result="online"
            des="I learned JavaScript, a versatile programming language used for creating dynamic and interactive web applications."
          />
          <ResumeCard
            title="React"
            subTitle="Microverse (2023)"
            result="online"
            des="I learned React, a popular JavaScript library for building user interfaces and creating efficient and scalable web applications."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PostgreSQL"
            subTitle="Microverse (2023)"
            result="online"
            des="I learned PostgreSQL, a powerful open-source relational database management system, for storing and managing structured data in my applications."
          />
          <ResumeCard
            title="Ruby"
            subTitle="Microverse (2023)"
            result="online"
            des="I learned Ruby, a dynamic, object-oriented programming language known for its simplicity and readability, enabling me to build robust and elegant applications."
          />
          <ResumeCard
            title="Ruby on Rails"
            subTitle="Microverse (2023)"
            result="online"
            des="I learned Ruby on Rails, a powerful web development framework known for its efficiency and productivity."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education