import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import Linksbar from "./Linksbar";
import { Link } from "react-router-dom";

import './Header.css';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (

    <div className="Header">
      <div className="navpluslinks">
        <Linksbar />
        <nav className="ShfNvabar">
          <div className={`flex justify-between items-center w-full px-4 md:px-10`}>
            <div className="">
              <Link
                to="/"
                className="flex gap-1 items-center justify-center"
              >
                <div className="w-32 h-12 md:w-40 md:h-16">
                  <Logo />
                </div>
              </Link>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-4 text-md font-base text-shfPurple">

              <Link to="/" className="">
                Home
              </Link>
              <Link to="/about-us">About us</Link>
              <Link to="/events">Events</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/work-with-us">Work With Us</Link>
            </div>

            {/* secondary */}
            <div className="flex">
              <div className="hidden md:flex items-center text-sm">
                <div>
                  <Link to="/donate-now"><button className="bg-shfOrange hover:bg-shfPurple text-white px-6 py-2 font-semibold">
                    Donate Now
                  </button></Link>

                </div>
              </div>

              {/* Mobile navigation toggle */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-8" />
                </button>
              </div>
            </div>
          </div>

          {/* mobile navigation */}
          <div
            className={`fixed z-40 w-full  bg-shfPurple overflow-hidden flex flex-col items-center justify-center md:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
              }`}
          >
            <div className="px-8 py-4 flex items-center text-xl">
              <div className="flex flex-col gap-8 font-semi  bold tracking-wider text-white text-center">
                <Link to="/">Home</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/events">Events</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/work-with-us">Work With Us</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </div>
  );
}

export default Header;
