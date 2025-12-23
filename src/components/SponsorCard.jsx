import React from "react";

const SponsorCard = ({ logo, label }) => {
  return (
    <div
      className="w-full max-w-xs sm:max-w-sm md:max-w-md
      flex flex-col items-center gap-3
      text-center whitespace-pre-line"
    >
      <img
        className="w-30 sm:w-36 md:w-40 object-contain"
        src={logo}
        alt={label}
      />
      <p className="text-2xl/4 sm:text-3xl/6 md:text-4xl/8 text-white">
        {label}
      </p>
    </div>
  );
};

export default SponsorCard;
