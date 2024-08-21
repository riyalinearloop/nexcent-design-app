import React from "react";
import { Icon1 } from "../theme/icon/icon1";
import { Icon2 } from "../theme/icon/icon2";
import { Icon3 } from "../theme/icon/icon3";
import { Icon4 } from "../theme/icon/icon4";
import { Icon5 } from "../theme/icon/icon5";
import { Icon6 } from "../theme/icon/icon6";
import { PeopleIcon } from "../theme/icon/peopleIcon";
import { BuildingIcon } from "../theme/icon/buildingIcon";
import { HandIcon } from "../theme/icon/handIcon";
import Image from "next/image";

const ClientComponent = () => {
  return (
    <div className="bg-[#ffffff] pt-10">
      <div className="container pb-4">
        <div className="text-center">
          <p className="text-4xl font-semibold text-secondary">Our Clients</p>
          <p className="text-secondary text-base mt-2">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex justify-between py-6 mt-4">
          <Icon1 />
          <Icon2 />
          <Icon3 />
          <Icon4 />
          <Icon5 />
          <Icon6 />
          <Icon3 />
        </div>
      </div>

      <div className="text-center mt-10 pb-11">
        <span className="text-4xl font-semibold text-secondary">
          Manage your entire community
          <br /> in a single system
        </span>
        <p className="text-base mt-2">Who is Nextcent suitable for?</p>

        <div className="flex justify-center mt-4">
          <div className="items-center box-shadow w-[300px] py-6 px-8 rounded-lg">
            <PeopleIcon className="m-auto" />
            <p className="text-[28px] leading-9  font-bold text-secondary mt-4">
              Membership Organisations
            </p>
            <p className="text-sm text-secondary mt-2">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="items-center box-shadow w-[300px] py-6 px-8 rounded-lg mx-32">
            <BuildingIcon className="m-auto" />
            <p className="text-[28px] font-bold text-secondary leading-8 mt-4">
              National Associations
            </p>
            <p className="text-sm text-secondary mt-2">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="items-center box-shadow w-[300px] py-6 px-8 rounded-lg">
            <HandIcon className="m-auto" />
            <p className="text-[28px] leading-9 font-bold text-secondary mt-4">
              Clubs And Groups
            </p>
            <p className="text-sm text-secondary mt-2">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pb-12">
        <Image src={"/images/rafiki.png"} alt="" width={441} height={329} className="py-[52px]" />
        <div className="w-[661px] px-12">
          <p className="text-4xl text- font-semibold">
            The unseen of spending three years at Pixelgrade
          </p>
          <p className="text-sm text-secondary mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="btn-primary rounded mt-8">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
