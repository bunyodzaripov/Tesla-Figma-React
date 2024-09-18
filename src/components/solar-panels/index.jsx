import React from "react";

const Index = () => {
   return (
      <div className="flex flex-col lg:flex-row items-center justify-between w-full p-8 bg-black text-white">
         {/* Texnik ma'lumotlar */}
         <div className="flex space-x-6 text-center lg:text-left">
            <div className="flex flex-col">
               <span className="text-3xl font-bold">Simple Aesthetic</span>
               <span className="text-sm w-1/2">
                  Panels and skirts are all black, creating a uniform,
                  monochromatic look.
               </span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">Weather Resistant</span>
               <span className="text-sm w-1/2">
                  Installation points are sealed to protect against rain, snow
                  and ice.
               </span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">Easy Installation</span>
               <span className="text-sm w-1/2">
                  Proprietary hardware and streamlined installation help to
                  minimize impact to your roof.
               </span>
            </div>
         </div>

         {/* Order Now tugmasi */}
         <div className="mt-6 lg:mt-0">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-full flex items-center">
               Order Now
               <span className="ml-2">➤</span>
            </button>
         </div>
      </div>
   );
};

export default Index;
