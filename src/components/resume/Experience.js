import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className="w-full flex flex-col lgl:flex-row gap-1 lgl:gap-10"
  >
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
        <h2 className="text-4xl font-bold">Experience</h2>
      </div>
      <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Full-stack Development"
          subTitle="Microverse · Full-time - (2022 - Present)"
          result="Online"
          des="opment concepts through dedicated study, successfully completing numerous independent and collaborative full-stack projects."
        />
        <ResumeCard
          title="Wordpress Web Developer"
          subTitle="The Webster - (2020 - 2022)"
          result="South Africa"
          des="Utilized WordPress expertise to create innovative and customized solutions, improving website performance and user experience."
        />
      </div>
    </div>
    <div>
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
        <h2 className="text-4xl font-bold">Volunteer</h2>
      </div>
      <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Mentor (Volunteer)"
          subTitle="Microverse - (2022 - Present)"
          result="Online"
          des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
        />
      </div>
    </div>
  </motion.div>
);

export default Experience;
