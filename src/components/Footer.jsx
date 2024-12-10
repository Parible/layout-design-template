import React from "react";

function Footer() {
  return (
    <div className="bg-[#3B4050] py-16">
      <div className="container ">
        <h2 className="text-4xl text-center text-white">
          just scratching the surface
        </h2>
      </div>

      <div className="p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[500px_2fr_2fr_2fr] gap-8 ">
        <div className="space-y-4 w-[400px]">
          <h1 className="text-[#A59678] text-2xl">About our company</h1>
          <p className="font-montserrat text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        {/* ABOUT */}
        <div className="space-y-4">
          <h1 className="text-[#A59678] text-2xl">Getting around</h1>
          <p className="font-montserrat text-sm leading-relaxed">Home</p>
          <p className="font-montserrat text-sm leading-relaxed">About</p>
          <p className="font-montserrat text-sm leading-relaxed">Contact</p>
        </div>

        {/* THE REST */}
        <div className="space-y-4">
          <h1 className="text-[#A59678] text-2xl">Other things</h1>
          <p className="font-montserrat text-sm leading-relaxed">Lorem ipsum</p>
          <p className="font-montserrat text-sm leading-relaxed">About</p>
          <p className="font-montserrat text-sm leading-relaxed">Lorem ut</p>
        </div>

        <div className="space-y-4">
          <h1 className="text-[#A59678] text-2xl">And more</h1>
          <p className="font-montserrat text-sm leading-relaxed">Lorem ipsum</p>
          <p className="font-montserrat text-sm leading-relaxed">About</p>
          <p className="font-montserrat text-sm leading-relaxed">Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
