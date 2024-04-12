import Image from 'next/image';
import React from 'react';
import Banner1 from "@/Assets/topimg.png";



const Banner = () => {
  return (
    <div className="relative w-full">
      <Image src={Banner1} alt='Banner' layout="responsive" />
    </div>
  );
}

export default Banner;
