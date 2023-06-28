import React from 'react';
import { SiAntdesign } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import FunFactCard from './FunFactCard';

const FunFact = () => (
  <div className="px-0 grid grid-cols-2 md:grid-cols-2 pb-10">
    <FunFactCard icon={<SiAntdesign />} des="23 Finished Projects" />
    <FunFactCard icon={<BiCodeAlt />} des="1542 hours of coding" />
  </div>
);

export default FunFact;
