import React from "react";

const Sidebar = () => {
  return (
    <div className="w-2/5 sm:w-1/5 lg:w-1/6 bg-gray-200 p-6">
      <div className="sticky top-0">
      <div className="mb-8">
        <h1 className="text-xl font-semibold mb-4 text-green-800">Plant Collections</h1>
        <ul>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Orchids
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Flowers
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Fruits
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Indoor
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Outdoor 
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Medicinal
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h1 className="text-xl font-semibold mb-4 text-green-800">Our Services</h1>
        <ul>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Office and Factories Decoration
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Roof top Gardening
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Landscaping
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Event Decoration
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Gardening Consultation
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-4 text-green-800">Other Accessories</h1>
        <ul>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Pots and Planters
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Garden Accessories
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Media Fertilizers
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-300 rounded-lg transition duration-300">
              Seeds and Plant Medicines
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
