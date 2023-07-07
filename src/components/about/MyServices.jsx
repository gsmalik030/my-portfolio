import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { BsServer } from 'react-icons/bs';
import { SiAntdesign } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import ServicesCard from './ServicesCard';

const MyServices = () => (
  <div className="grid grid-cols-1 md:grid-cols-2">
    <ServicesCard
      icons={<BiCodeAlt />}
      title="Web Development"
      subTitle="Building dynamic and responsive websites to enhance online presence and user experience."
    />
    <ServicesCard
      icons={<SiAntdesign />}
      title="Web Design"
      subTitle="Transforming ideas into captivating web experiences through thoughtful design and meticulous attention to detail."
    />
    <ServicesCard
      icons={<BsServer />}
      title="Backend Development"
      subTitle="Building the foundation for scalable and secure web applications through expert backend development and integration."
    />
    <ServicesCard
      icons={<FaAppStoreIos />}
      title="SEO"
      subTitle="Driving organic traffic and improving search engine visibility through strategic SEO techniques and keyword optimization."
    />
  </div>
);

export default MyServices;
