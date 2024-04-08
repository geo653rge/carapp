"use client";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex flex-col pt-36 padding-x ">
        <h1 className="hero__title ">
          Find,book or rent a car --- quickly and easily !
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with out effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container"></div>
    </div>
  );
};

export default Hero;
