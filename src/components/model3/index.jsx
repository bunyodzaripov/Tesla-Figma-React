import React from "react";

const Index = () => {
   return (
      <div className="flex flex-col lg:flex-row items-center justify-between w-full p-8 bg-black text-white">
         <div className="flex space-x-6 text-center lg:text-left">
            <div className="flex flex-col">
               <span className="text-3xl font-bold">496 mi</span>
               <span className="text-sm">Range (EPA est.)</span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">2.99s</span>
               <span className="text-sm">0-60 mph*</span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">210mph</span>
               <span className="text-sm">Top Speed*</span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">1,320hp</span>
               <span className="text-sm">Peak Power</span>
            </div>
         </div>
         <div className="mt-6 lg:mt-0">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full flex items-center">
               Order Now
               <span className="ml-2">➤</span>
            </button>
         </div>
      </div>
   );
};

export default Index;
