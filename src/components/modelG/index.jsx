import React from "react";

const Index = () => {
   return (
      <div className="flex flex-col lg:flex-row items-center justify-between w-full p-8 bg-black text-white">
         <div className="flex space-x-6 text-center lg:text-left">
            <div className="flex flex-col">
               <span className="text-3xl font-bold">396 mi</span>
               <span className="text-sm">Range (EPA est.)</span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">1.99s</span>
               <span className="text-sm">0-60 mph*</span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">200mph</span>
               <span className="text-sm">Top Speed*</span>
            </div>
            <div className="flex flex-col">
               <span className="text-3xl font-bold">1,020hp</span>
               <span className="text-sm">Peak Power</span>
            </div>
         </div>

         {/* Order Now tugmasi */}
         <div className="mt-6 lg:mt-0">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full flex items-center">
               Order Now
               <span className="ml-2">➤</span>
            </button>
         </div>
      </div>
   );
};

export default Index;
