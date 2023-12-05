import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper/modules";
import "./Slider.css"
import "swiper/css";
import "swiper/css/navigation";

function Slider() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <h1>Info principal</h1>
        <img src="" alt="1" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Info Proyecto</h1>
        <img src="" alt="2" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Info empresa club 3ra edad</h1>
        <img src="" alt="3" />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
