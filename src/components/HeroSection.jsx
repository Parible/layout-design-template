import React from "react";

function HeroSection() {
  return (
    <section className="bg-[#3B4050]">
      <div className="container w-full h-[500px] items-center ">
        <div className="grid grid-cols-2">
          {/* RIGHT */}
          <div className="max-w-sm mt-24">
            <span className="text-6xl font-bold font-oswald text-[#A59678] ">
              Responsive layouts
            </span>
            <span className="text-6xl font-bold font-oswald">
              {" "}
              don’t have to be a struggle
            </span>
          </div>
          {/* LEFT */}
          <div>
            <div className="max-w-xs mt-48">
              <span className="font-montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <div className="block mt-8 ">
                <span className="bg-[#A59678] px-6 py-1 text-lg uppercase rounded-3xl font-oswald">
                  I want to learn
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
