import React from 'react';
import Image from 'next/image';


export default function Mainpage() {
  return (
    <div className="bg-white flex flex-col sm:flex-row justify-between items-center py-16 sm:py-0 px-4">
      <div className="w-1/2 p-8">
        <h3 className="font-Faustina text-black text-3xl font-bold mb-4">
          Avoid Intuition and make Data Driven decisions.
        </h3>
        <p className='font-Faustina text-gray-400 text-xl mb-4'>
          Discover the power of stock market investment and make informed financial decisions with our online calculators.
        </p>
        <button className="bg-black hover:bg-gray-400 text-white  py-2 px-4 ">
          Calculators
        </button>
      </div>
      <div className="w-1/2 flex justify-center p-4">
        <div className="bg-gradient-to-r p-2">
          <Image
            src="/images/portfolio-2.png"
            width={500}
            height={300}
            alt="Vita Veda"
            
          />
        </div>
      </div>
    </div>
  );
}
