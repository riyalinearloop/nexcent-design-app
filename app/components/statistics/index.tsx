import React from "react";
import { PaymentIcon } from "../../../public/icon/paymentIcon";
import { EventIcon } from "../../../public/icon/eventIcon";
import Image from "next/image";
import { MemberIcon } from "../../../public/icon/memberIcon";

const StatisticsComponent = () => {
  return (
    <div className="container items-center flex justify-center py-16">
      <div className="mr-[72px]">
        <span className="text-4xl text-secondary font-semibold">
          Helping a local{" "}
        </span>
        <br />
        <span className="text-4xl text-primary font-semibold">
          business reinvent itself
        </span>
        <p className="text-base mt-2">
          We reached here with our hard work and dedication
        </p>
      </div>

      <div className="ml-[82px]">
        <div className="flex">
          <div className="flex mr-8">
            <MemberIcon />
            <div className="ml-4">
              <span className="text-3xl font-bold text-secondary">
                2,245,341
              </span>
              <p className="text-base text-grey">Members</p>
            </div>
          </div>
          <div className="flex ml-8">
            <Image src={"/images/Group 2.png"} alt="" height={5} width={70} />
            <div className="ml-4">
              <span className="text-3xl font-bold text-secondary">46,328</span>
              <p className="text-base text-grey">Clubs</p>
            </div>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="flex mr-8">
            <EventIcon />
            <div className="ml-4">
              <span className="text-3xl font-bold text-secondary">
                828,8671
              </span>
              <p className="text-base text-grey">Event Bookings</p>
            </div>
          </div>
          <div className="flex ml-8">
            <PaymentIcon />
            <div className="ml-4">
              <span className="text-3xl font-bold text-secondary">
                1,926,436
              </span>
              <p className="text-base text-grey">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsComponent;
