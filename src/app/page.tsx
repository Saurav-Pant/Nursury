import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import MainBar from "./Components/MainBar";
import Sidebar from "./Components/Sidebar";
import img1 from "@/Assets/img1.png";
import img2 from "@/Assets/img2.png";
import img3 from "@/Assets/img3.png";
import img4 from "@/Assets/img4.png";
import img5 from "@/Assets/img5.png";
import img6 from "@/Assets/img6.png";
import img7 from "@/Assets/img7.png";
import img8 from "@/Assets/img8.png";
import img9 from "@/Assets/img9.png";

const cardData = [
  {
    image: img1,
    name: "Product 1",
    price: "$10",
  },
  {
    image: img2,
    name: "Product 2",
    price: "$20",
  },
  {
    image: img3,
    name: "Product 3",
    price: "$15",
  },
  {
    image: img4,
    name: "Product 4",
    price: "$25",
  },
  {
    image: img5,
    name: "Product 5",
    price: "$15",
  },
  {
    image: img6,
    name: "Product 6",
    price: "$25",
  },
  {
    image: img7,
    name: "Product 7",
    price: "$15",
  },
  {
    image: img8,
    name: "Product 8",
    price: "$25",
  },
  {
    image: img9,
    name: "Product 9",
    price: "$15",
  },
  {
    image: img1,
    name: "Product 10",
    price: "$10",
  },
  {
    image: img2,
    name: "Product 11",
    price: "$20",
  },
  {
    image: img3,
    name: "Product 12",
    price: "$15",
  },
  {
    image: img4,
    name: "Product 13",
    price: "$25",
  },
  {
    image: img5,
    name: "Product 14",
    price: "$15",
  },
  {
    image: img6,
    name: "Product 15",
    price: "$25",
  },
  {
    image: img7,
    name: "Product 16",
    price: "$15",
  },
  {
    image: img8,
    name: "Product 17",
    price: "$25",
  },
  {
    image: img9,
    name: "Product 18",
    price: "$15",
  },
];

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex">
        <Sidebar />
        <MainBar cards={cardData} />
      </div>
    </div>
  );
};

export default page;
