import React, { useEffect, useState } from "react";
import { spotlightCollection } from "../utils/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

import SpotlightCard from "./SpotlightCard";
interface spotlightData {
  name: string;
  date: string;
  place: string;
  id: number;
  imagePath: string;
  city: string;
  collection: string;
}
const Spotlight: React.FC = () => {
  const [spotlightData, setSpotlightData] = useState<spotlightData[]>([]);
  const [index, setIndex] = useState(0);
  const [itemCard, setItemCard] = useState();
  useEffect(() => {
    setSpotlightData(spotlightCollection);
  }, []);

  // console.log(playerData)
  if (spotlightData.length === 0) return;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="pt-10 dark:bg-spot-bg">
      <div className="text-center dark:text-white">
        <h1 className="font-bold md:text-5xl ">Collection Spotlight</h1>
        <p className="my-8 ">
          Discover extraordinary moments with our Spotlight Collection
          metatickets- exclusive access to premium events for an unforgettable
          experience .Grab yours today !
        </p>
      </div>
      <div className="flex items-center ">
       
        <div className="  h-[100%]  items-stretch overflow-hidden justify-between hidden md:block">
          <Slider {...settings}>
            {spotlightCollection.map((data) => (
              <SpotlightCard key={data.id} data={data} />
            ))}
          </Slider>
        </div>
        <div className="  h-[100%]  items-stretch overflow-hidden justify-between md:hidden grid grid-cols-1 sm:grid-cols-2 mx-auto gap-4">
         
            {spotlightCollection.map((data) => (
              <SpotlightCard key={data.id} data={data} />
            ))}
          
        </div>
       
      </div>
    </div>
  );
};

export default Spotlight;
