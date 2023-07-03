import React, { useState } from 'react';
import Title from '../home/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 px-5 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Professional Skills" des="My Resume" />
      </div>
      <div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <button
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            type="button"
            className={`${
              educationData
                ? 'border-designColor rounded-lg bg-designColor text-black'
                : 'border-transparent'
            } resumeLi cursor-pointer`}
          >
            Education
          </button>

          <button
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            type="button"
            className={`${
              skillData
                ? 'border-designColor rounded-lg bg-designColor text-black'
                : 'border-transparent'
            } resumeLi cursor-pointer`}
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`${
              experienceData
                ? 'border-designColor rounded-lg bg-designColor text-black'
                : 'border-transparent'
            } resumeLi`}
          >
            Experience
          </button>
        </div>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
