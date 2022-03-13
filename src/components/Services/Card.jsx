import React from "react";

export const Card = ({
  cardSubTitle,
  cardTitle,
  cardImage,
  cardDesc,
  cardKey,
}) => {
  return (
    <>
      <div
        key={cardKey}
        className="card shadow-md rounded-md p-3 relative selection:bg-green-400 selection:text-green-50"
      >
        <div className="card-img mb-2 rounded-md overflow-hidden">
          <img
            src={cardImage}
            className="w-full sm:h-56 object-cover"
            alt="card img"
          />
        </div>
        <div className="card-body">
          <span className="subtitle md:absolute right-6 shadow-md cursor-pointer sm:top-[55%] inline-block my-1 bg-green-400 text-white py-1 px-3 rounded-sm">
            {cardSubTitle}
          </span>
          <h1 className="text-xl font-poppins my-1">{cardTitle}</h1>
          <p className="text-md font-sans text-gray-500 font-normal">
            {cardDesc}
          </p>
          <button className="bg-green-400 text-white px-4 py-2 font-poppins my-2 rounded-md">
            View Details
          </button>
        </div>
      </div>
    </>
  );
};
