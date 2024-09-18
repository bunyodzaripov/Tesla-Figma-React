import React from "react";

const Index = () => {
   return (
      <div className="flex flex-col lg:flex-row items-center justify-between w-full p-8 bg-black text-white">
         {/* Texnik ma'lumotlar */}
         <div className="flex space-x-6 text-center lg:text-left">
            <div className="flex flex-col">
               <span className="text-3xl font-bold">
                  <i className="fas fa-solar-panel"></i>
               </span>
               <span className="text-sm">Beautiful Sola</span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">25 -Year</span>
               <span className="text-sm">Tile Warranty</span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">24/7</span>
               <span className="text-sm">Outage Protection</span>
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
