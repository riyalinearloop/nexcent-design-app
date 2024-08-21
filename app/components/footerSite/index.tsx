import Image from "next/image";
import React from "react";

const FooterSiteComponent = () => {
  return (
    <div className="bg-[#ffffff] py-14">
      <div className="container flex items-center justify-center my-12">
        <Image src={"/images/image1.png"} alt="" width={441} height={329} />
        <div className="w-[661px] px-12">
          <p className="text-4xl text- font-semibold">
            How to design your site footer like we did
          </p>
          <p className="text-sm text-secondary mt-4">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="btn-primary rounded mt-8">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FooterSiteComponent;
