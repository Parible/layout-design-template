import React from "react";

function NavBar() {
  return (
    <nav>
      <div className="relative top-0 w-full bg-[#2E323F]">
        <div className="container  py-4 ">
          <div className="flex justify-between">
            <div>
              <span className="text-lg uppercase font-oswald">CRL</span>
            </div>
            <div>
              <ul className="flex space-x-8">
                <li className="uppercase">Home</li>
                <li className="uppercase">About</li>
                <li className="uppercase">Contact</li>
                <li className="uppercase">Sign In</li>
                <li className="bg-[#A59678] rounded-3xl text-sm px-4 py-1 uppercase ">
                  Sign Up
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
