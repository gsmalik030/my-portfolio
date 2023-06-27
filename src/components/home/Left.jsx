import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiMail, FiSend } from "react-icons/fi";
import { bannerImg } from '../../assets';
import CV from '../../assets/gsmalik-cv.pdf';

const Left = () => {

  const handleEmailClick = () => {
    const emailAddress = 'gsmalik030@gmail.com';
    const subject = 'Hello';
    const body = 'I would like to get in touch with you.';
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const [text] = useTypewriter({
    words: ['Web Developer', 'Full Stack Developer', 'UI Designer'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 25,
    delaySpeed: 1000,
  });
  return (
    <div className='w-5/12 h-full bg-bodyColor rounded-2xl'>
      <div className='w-full h-3/5'>
        <img
          className='w-full h-full object-cover rounded-2xl'
          src={bannerImg}
          alt='Banner image'
        />
      </div>
      <div className='w-full h-2/5 flex flex-col justify-between'>
        <div className='flex flex-col gap-2 py-10 items-center'>
          <h1 className='text-textColor text-4xl font-semibold'>
            Ghulam Subbhani
          </h1>
          <p className='text-base text-designColor tracking-wide'>
            {text}
            <Cursor cursorBlinking={false} cursorStyle="|" />
          </p>
          <div className='flex justify-center gap-2 mt-2'>
            <span className='hover:text-designColor2 duration-300 cursor-pointer text-xl'>
              <FaGithub />
            </span>
            <span className='hover:text-designColor2 duration-300 cursor-pointer text-xl'>
              <FaLinkedin />
            </span>
            <span className='hover:text-designColor2 duration-300 cursor-pointer text-xl'>
              <AiFillTwitterCircle />
            </span>
            <span className='hover:text-designColor2 duration-300 cursor-pointer text-xl'>
              <FiMail />
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button onClick={handleEmailClick} className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;