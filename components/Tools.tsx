import React from 'react';
import Image from 'next/Image';

export default function Tools() {
  return (
    <div className="bg-gray-300 grid align-center  items-start self-stretch">
        {/* Tools Section */}
        <div className="font-Montserrat flex flex-col font-black  w-1/2 sm:py-0 px-4  place-content-start ">
        <div className="relative ">
          <h1 className="text-[15rem] w-20  font-bold text-gray-400">Tools</h1>
          <h1 className="absolute left-[20%] top-[50%]  text-6xl font-bold text-black ">Tools</h1>
          </div>
        </div>
        {/* Content Section -1*/}
        <div className="bg-white flex flex-col sm:flex-row justify-between items-center py-16 sm:py-0 px-4">
          <div className="w-1/2  p-8">
            <div className="relative ">
              <h1 className="font-Faustina text-black text-9xl font-bold mb-4 z-20 ">01</h1>
              <div className="absolute w-full h-[20px] top-[75%] border-t-2 border-solid border-gray-300  bg-white"></div>
            </div>

            <h3 className="font-Faustina text-black text-3xl font-bold mb-4">
              Avoid Intuition and make
            </h3>
            <p className="font-Faustina text-gray-400 text-xl mb-4">
              Discover the power of stock market investment and make informed financial decisions with our online calculators.
            </p>
          </div>
          <div className="bg-gradient-to-r w-35.860 h-35.860 p-2">
            <Image
              src="/images/portfolio-2.png"
              width={450}
              height={250}
              alt="Vita Veda"
            />
          </div>
          </div>
          {/* Content Section -2*/}
          <div className="bg-white flex flex-col sm:flex-row justify-between items-center py-16 sm:py-0 px-4">
          <div className="bg-gradient-to-r w-35.860 h-35.860 p-2">
              <Image
                src="/images/portfolio-2.png"
                width={450}
                height={250}
                alt="Vita Veda"
              />
            </div>
            <div className="w-1/2 p-8 place-content-end">
              <div className="relative ">
                <h1 className="font-Faustina text-black text-9xl font-bold mb-4  ">02</h1>
                <div className="absolute w-full h-[20px] top-[75%] border-t-2 border-solid border-gray-300 z-10 bg-white"></div>
              </div>
              <h3 className="font-Faustina text-black text-3xl font-bold mb-4 z-80">
                Avoid Intuition and make
              </h3>
              <p className="font-Faustina text-gray-400 text-xl mb-4">
                Discover the power of stock market investment and make informed financial decisions with our online calculators.
              </p>
            </div>
            
          </div>
        </div>
        
      );
    }
