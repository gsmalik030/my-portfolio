import React from 'react';
import PropTypes from 'prop-types';
import SidenavTitle from './SidenavTitle';

const Sidenav = ({ onSelect }) => {
  const handleSelect = () => {
    onSelect();
  };
  return (
    <div className="px-7 py-4">
      <a href="#about" onClick={handleSelect}>
        <SidenavTitle title="A" subTitle="bout" />
      </a>
      <a href="#resume" onClick={handleSelect}>
        <SidenavTitle title="R" subTitle="esume" />
      </a>
      <a href="#projects" onClick={handleSelect}>
        <SidenavTitle title="P" subTitle="rojects" />
      </a>
      <a href="#contact" onClick={handleSelect}>
        <SidenavTitle title="R" subTitle="each Me" />
      </a>
    </div>
  );
};

Sidenav.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Sidenav;
