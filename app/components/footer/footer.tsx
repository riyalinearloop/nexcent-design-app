import Image from "next/image";
import React from "react";

const FooterComponent = () => {
  return (
    <div className="container pt-8 text-center">
      <p className="text-6xl font-semibold">
        Pellentesque suscipit <br /> fringilla libero eu.
      </p>
      <button className="rounded my-8 btn-primary !bg-[#4CAF4F] !py-4 !px-8">
        Get a Demo
      </button>

      <div className="bg-[#263238] pt-16 pb-20 grid grid-cols-2">
        <div className="ml-[126px]">
          <Image
            src={"/images/Logo1.png"}
            className=""
            width={154}
            height={24}
            alt="Logo"
            priority={true}
          />
          <p className="mt-10 text-[#ffff] mb-2 text-left">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-[#ffff] mb-2 text-left">All rights reserved</p>
        </div>
        <div className="grid grid-cols-3">
          <div className="text-left">
            <p className="text-xl mb-6 font-semibold text-[#ffff]">Company</p>
            <p className="text-[#ffff] mb-3">About Us</p>
            <p className="text-[#ffff] mb-3">Blog</p>
            <p className="text-[#ffff] mb-3">Contact us</p>
            <p className="text-[#ffff] mb-3">Pricing</p>
            <p className="text-[#ffff] mb-3">Testimonials</p>
          </div>

          <div className="text-left">
            <p className="text-xl mb-6 font-semibold text-[#ffff]">Support</p>
            <p className="text-[#ffff] mb-3">Help Center</p>
            <p className="text-[#ffff] mb-3">Terms of service</p>
            <p className="text-[#ffff] mb-3">Legal</p>
            <p className="text-[#ffff] mb-3">Privacy Policy</p>
            <p className="text-[#ffff] mb-3">Status</p>
          </div>

          <div className="text-left">
            <p className="text-xl mb-6 font-semibold text-[#ffff]">
              Stay up to date
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
