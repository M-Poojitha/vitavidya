import React from 'react'
import Image from 'next/Image';

export default function Articles() {
  return (
    <div className="p-[2.5rem]">
      <div className="text-black font-Montserrat font-black text-[4.75rem] leading-[5.7rem]">
        Recent articles
      </div>
      <div className="grid grid-cols-2 gap-4 pt-[2.25rem]">
      <div className="relative ">
          <div className=" py-[0.625rem] px-[1.9375rem]">
                  <Image
                    src="/images/portfolio-2.png"
                    width={22.375 * 16} 
                    height={11.125 * 16} 
                    alt="Vita Veda"
                  />
          </div>
                
                <div className=" absolute  flex-col rounded-[1.25rem] items-end  inline-flex w-[50%] h-[20px] left-[30%] top-[50%] p-[1.5rem]">
                  <h3 className="font-Faustina  text-black text-3xl  font-bold mb-4">
                        Avoid Intuition and make
                      </h3>
                      <p className="font-Faustina  text-gray-400 py-[1.875rem] text-xl mb-4">
                        Discover the power of stock market investment and make informed financial decisions with our online calculators.
                      </p>
                      <button className="bg-black hover:bg-gray-400 text-white  py-2 px-4 ">
                        Read More 
                      </button>
                  </div>
      </div>
      <div className="relative ">
          <div className=" py-[0.625rem] px-[1.9375rem]">
                  <Image
                    src="/images/portfolio-2.png"
                    width={22.375 * 16} 
                    height={11.125 * 16} 
                    alt="Vita Veda"
                  />
          </div>
                
                <div className=" absolute  flex-col rounded-[1.25rem] items-end  inline-flex w-[50%] h-[20px] left-[30%] top-[50%] p-[1.5rem]">
                  <h3 className="font-Faustina  text-black text-3xl  font-bold mb-4">
                        Avoid Intuition and make
                      </h3>
                      <p className="font-Faustina  text-gray-400 py-[1.875rem] text-xl mb-4">
                        Discover the power of stock market investment and make informed financial decisions with our online calculators.
                      </p>
                      <button className="bg-black hover:bg-gray-400 text-white  py-2 px-4 ">
                        Read More 
                      </button>
                  </div>
      </div>

      </div>
      
    </div>
  )
}
