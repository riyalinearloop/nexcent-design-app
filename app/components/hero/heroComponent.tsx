import Image from "next/image";
import React from "react";

const HomeComponent = () => {
  return (
    <div className="container flex items-center mt-24 pb-24">
      <div className="items-center w-3/5">
        <span className="font-semibold text-6xl text-secondary">
          Lessons and insights
        </span>
        <br />
        <span className="font-semibold text-6xl text-primary">from 8 years</span>
        <p className="text-base mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="btn-primary mt-8">Register</button>
      </div>
      <div className="ml-auto w-2/5">
        <Image
          src={"/images/heroImage.png"}
          height={407}
          width={391}
          alt={"HeroImage"}
        />
      </div>
    </div>
  );
};

export default HomeComponent;
