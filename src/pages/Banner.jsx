import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Banner() {
    return (
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="absolute w-full h-72 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-[20]"/>
        <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        >
            <div>
                <img  src="https://t4.ftcdn.net/jpg/03/83/21/81/360_F_383218115_jOpAGds2lc9Iia0hjwm0Zw5o2FeHGKqq.jpg" alt="" />
            </div>
            <div>
                <img src="https://pixelixe.com/blog/images/250/e-commerce-banner-strategy.jpg" alt="" />
            </div>
            <div>
                <img  src="https://t4.ftcdn.net/jpg/03/83/21/85/360_F_383218557_t5fC98hOdrg0hr4BsulCZ9mPX9a4uube.jpg" alt="" />
            </div>
        </Carousel>
        
      </div>
    )
  }