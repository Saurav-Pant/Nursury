import React from "react";
import Image from "next/image";

const imageStyle = {
  borderRadius: "10%",
  border: "1px solid #fff",
};

const MainBar = ({ cards }) => {
  return (
    <div className="w-4/5 bg-white flex flex-wrap justify-around">
      <h1 className="bg-[#FFEFEF] p-4 text-center w-full font-bold text-3xl text-green-400">Plant Collection</h1>
      {cards.map((card, index) => (
        
        <div
          key={index}
          className=" m-4 rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs pb-5"
        >
          <Image
            src={card.image}
            alt={card.name}
            height={200}
            width={250}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={imageStyle}
            className="transition-transform hover:scale-105"
          />

          <div className="flex justify-around mx-4 mt-4">
            <h3 className="text-md text-center font-semibold">{card.name}</h3>
            <p className="text-center">Price: {card.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainBar;
