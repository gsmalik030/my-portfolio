import React from 'react';
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className='px-7 py-4'>
      <a href="#about">
      <SidenavTitle title='A' subTitle='bout' />
      </a>
      <a href="#resume">
      <SidenavTitle title='R' subTitle='esume' />
      </a>
      <a href="#projects">
      <SidenavTitle title='P' subTitle='rojects' />
      </a>
      <a href="#contact">
      <SidenavTitle title='R' subTitle='each Me' />
      </a>
    </div>
  );
};

export default Sidenav;
