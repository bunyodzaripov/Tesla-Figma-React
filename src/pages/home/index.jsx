import React, { useState } from "react";
import { Navbar, Swiper } from "../../components";
import { Outlet } from "react-router-dom";

const Home = () => {
   const [currentModel, setCurrentModel] = useState("model-g");

   const handleModelChange = (model) => {
      setCurrentModel(model);
   };

   return (
      <div className="container mx-auto">
         <Navbar onModelChange={handleModelChange} />
         <Swiper currentModel={currentModel} />
      </div>
   );
};

export default Home;
