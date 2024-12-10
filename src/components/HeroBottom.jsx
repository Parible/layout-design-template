import React from "react";

function HeroBottom() {
  return (
    <section className="bg-gray-100">
      <div className="container py-16 px-4 items-center">
        <div className="grid grid-cols-3 gap-8">
          {/* FIRST COL */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="font-oswald text-[#A59678] text-2xl mb-4">
              Mobile-first
            </h2>
            <p className="font-montserrat text-gray-900 font-semibold max-w-[17rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="font-oswald text-[#A59678] text-2xl mb-4">
              Efficient
            </h2>
            <p className="font-montserrat text-gray-900 font-semibold max-w-[17rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="font-oswald text-[#A59678] text-2xl mb-4">
              Done right
            </h2>
            <p className="font-montserrat text-gray-900 font-semibold max-w-[17rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBottom;
