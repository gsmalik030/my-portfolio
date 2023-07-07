import React from 'react';

const AboutMe = () => (
  <div className="flex flex-col md:flex-row pb-6">
    <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
      <div className="py-6">
        <h2 className="font-semibold mb-1 text-2xl">Hello! I am Ghulam Subbhani</h2>
        <p className="leading-6 text-xl ">
        a Full-Stack Software Engineer who has recently completed my education at Microverse. With a strong foundation in JavaScript, React, Ruby, and Ruby on Rails, I'm excited to embark on a career in the dynamic and ever-evolving field of software development.
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/2 p-6">
      <ul className="flex flex-col gap-1">
        <li className="text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
          <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">Name:</span>
          Ghulam Subbhani
        </li>
        <li className="text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
          <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">Residence:</span>
          South Africa
        </li>
        <li className="text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
          <span className="bg-designColor text-black uppercase px-4 py-[1px] rounded-md">Address:</span>
          Durban
        </li>
      </ul>
    </div>
  </div>
);

export default AboutMe;
