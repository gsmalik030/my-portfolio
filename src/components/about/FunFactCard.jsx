import React from 'react';
import PropTypes from 'prop-types';

const FunFactCard = ({ icon, des }) => (
  <div className="w-full">
    <div className="w-full flex flex-col items-center gap-2 py-8 border-r-[1px] border-r-zinc-800 border-b-[1px] border-b-zinc-800">
      <span className="text-2xl text-designColor">{icon}</span>
      <p className="text-base w-32 h-10 text-center text-gray-300 hover:text-white duration-200">
        {des}
      </p>
    </div>
  </div>
);

FunFactCard.propTypes = {
  icon: PropTypes.node.isRequired,
  des: PropTypes.string.isRequired,
};

export default FunFactCard;
