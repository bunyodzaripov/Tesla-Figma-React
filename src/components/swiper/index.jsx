import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation } from "swiper/modules";
import {
   ModelG,
   Model3,
   ModelX,
   ModelY,
   SolarPanels,
   SolarRoof,
} from "@components";

import ModelGImg from "../../images/model-g.png";
import Model3Img from "../../images/model-3.png";
import ModelXImg from "../../images/model-x.png";
import ModelYImg from "../../images/model-y.png";
import SolarRoofImg from "../../images/solar-roof.png";
import SolarPanelsImg from "../../images/solar-panels.avif";
const Carousel = ({ currentModel }) => {
   const swiperRef = useRef(null);

   const images = {
      "model-g": [ModelGImg],
      "model-3": [Model3Img],
      "model-x": [ModelXImg],
      "model-y": [ModelYImg],
      "solar-roof": [SolarRoofImg],
      "solar-panels": [SolarPanelsImg],
   };

   const currentImages = images[currentModel] || [];

   return (
      <Swiper
         ref={swiperRef}
         slidesPerView={1}
         spaceBetween={30}
         loop={true}
         pagination={{
            clickable: true,
         }}
         navigation={true}
         modules={[Navigation]}
         className="mySwiper"
      >
         <SwiperSlide>
            <div className="customSlide">
               {currentImages.map((image, index) => (
                  <img key={index} src={image} alt="Model 3" />
               ))}
            </div>
            <ModelG onModelChange={swiperRef.current?.slideNext} />
         </SwiperSlide>
         <SwiperSlide>
            <div className="customSlide">
               <img src={Model3Img} alt="Model 3" />
            </div>
            <Model3 onModelChange={swiperRef.current?.slideNext} />
         </SwiperSlide>
         <SwiperSlide>
            <div className="customSlide">
               <img src={ModelXImg} alt="Model X" />
            </div>
            <ModelX onModelChange={swiperRef.current?.slideNext} />
         </SwiperSlide>
         <SwiperSlide>
            <div className="customSlide">
               <img src={ModelYImg} alt="Model Y" />
            </div>
            <ModelY onModelChange={swiperRef.current?.slideNext} />
         </SwiperSlide>
         <SwiperSlide>
            <div className="customSlide">
               <img src={SolarRoofImg} alt="Solar Roof" />
            </div>
            <SolarRoof onModelChange={swiperRef.current?.slideNext} />
         </SwiperSlide>
         <SwiperSlide>
            <div className="customSlide">
               <img src={SolarPanelsImg} alt="Solar Panels" />
            </div>
            <SolarPanels onModelChange={swiperRef.current?.slideNext} />
         </SwiperSlide>
      </Swiper>
   );
};

export default Carousel;
