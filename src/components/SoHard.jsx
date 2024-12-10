import React from "react";

function SoHard() {
  return (
    <div className="container">
      <div className="h-full w-full py-32">
        <div className="grid grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-oswald text-[#A59678] text-3xl">
              {" "}
              It doesn’t have to be so hard
            </h2>
            <p className="font-montserrat text-gray-900 font-semibold">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          {/* RIGHT SIDEE */}

          <div>
            <div className="grid grid-row-3">
              <div className="flex flex-col items-center gap-8 justify-end">
                {/* STARTS HERE */}
                <div className="flex flex-col items-center p-8 text-center bg-[#3B4050] h-[200px] w-[300px]">
                  <h2 className="font-oswald text-2xl mb-4">Break it down</h2>
                  <p className="font-montserrat text-sm max-w-[17rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="flex flex-col items-center p-8 text-center bg-[#3B4050] h-[200px] w-[300px]">
                  <h2 className="font-oswald text-2xl mb-4">Break it down</h2>
                  <p className="font-montserrat text-sm max-w-[17rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="flex flex-col items-center p-8 text-center bg-[#3B4050] h-[200px] w-[300px]">
                  <h2 className="font-oswald text-2xl mb-4">Break it down</h2>
                  <p className="font-montserrat text-sm max-w-[17rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoHard;
