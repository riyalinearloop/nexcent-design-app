import Image from "next/image";
import React from "react";

const Header = () => {
  const MENU = [
    { label: "Home" },
    { label: "Service" },
    { label: "Feature" },
    { label: "Product" },
    { label: "Testimonial" },
    { label: "FAQ" },
  ];

  return (
    <nav className="container">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Image
          src={"/images/Logo.png"}
          className=""
          width={154}
          height={24}
          alt="Logo"
          priority={true}
        />

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {MENU?.map((item, index) => (
              <li key={index}>
                <span className="block py-2 px-3 rounded mr-[50px] md:bg-transparent md:p-0 text-[#18191F]">
                  {item?.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <span className="text-sm font-medium text-primary mr-9">Login</span>
          <button className="btn-primary">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
