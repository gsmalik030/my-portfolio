import React, { useState } from 'react';
import Title from '../home/Title';
import Education from './Education';
import Skills from './Skills';
// import Achievement from './Achievement';
// import Experience from "./Experience"

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  //  const [experienceData, setExperienceData] = useState(false);
  //  const [achievementData, setAchievementData] = useState(false);
  return (
    <section
      id="resume"
      className="w-full py-20 px-5 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Professional Skills" des="My Resume" />
      </div>
      <div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <button
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              // setExperienceData(false);
              // setAchievementData(false);
            }}
            type="button"
            className={`${
              educationData
                ? 'border-designColor rounded-lg'
                : 'border-transparent'
            } resumeLi cursor-pointer`}
          >
            Education
          </button>

          <button
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              // setExperienceData(false);
              // setAchievementData(false);
            }}
            type="button"
            className={`${
              skillData ? 'border-designColor rounded-lg' : 'border-transparent'
            } resumeLi cursor-pointer`}
          >
            Skills
          </button>

          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li> */}
          {/* <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li> */}
        </div>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {/* {achievementData && <Achievement />}
      {experienceData && <Experience />} */}
    </section>
  );
};

export default Resume;
