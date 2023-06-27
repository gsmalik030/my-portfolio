import React, { useEffect, useRef, useState } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { MdWork, MdOutlineClose } from 'react-icons/md';
import { BsTelephonePlusFill } from 'react-icons/bs';
import Left from './components/home/Left';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (e.target.contains(ref.current)) {
        setSidenav(false);
      }
    });
  }, []);

  return (
    <section className='w-[85%] h-[85%] bg-transparent text-white z-30 flex items-start gap-2 justify-between'>
      <nav className='w-16 h-86 bg-transparent flex flex-col gap-4'>
        <div
          onClick={() => setSidenav(true)}
          className='w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group'
        >
          <div className='flex gap-1.5 flex-col overflow-hidden'>
            <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 duration-300 group-hover:bg-designColor' />
            <span className='w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor' />
            <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 duration-300 group-hover:bg-designColor' />
          </div>
        </div>
        <div className='w-full h-60 bg-bodyColor rounded-3xl flex flex-col justify-around items-center '>
          <span className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
            <FaUser />
            <span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>
              About
            </span>
          </span>
          <span className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
            <IoIosPaper />
            <span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>
              Resume
            </span>
          </span>
          <span className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
            <MdWork />
            <span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>
              projects
            </span>
          </span>
          <span className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
            <FaEnvelope />
            <span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>
              contact
            </span>
          </span>
          <span className='w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group'>
            <BsTelephonePlusFill />
            <span className='text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl absolute left-0 translate-x-8 group-hover:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20'>
              Call Me
            </span>
          </span>
        </div>
      </nav>
      <div className='w-[94%] h-full flex items-center bg-transparent gap-2'>
        <Left />
        <div className='w-8/12 h-[95%] bg-bodyColor overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]'>
          <About />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default Home;
