import React from "react";
import { Link } from "react-router-dom";
import a1 from "../assets/arrow_icon.svg";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      {/* Logo with text beside it */}
      <div className="flex items-center">
        <Link to="/">
          <img className="w-6 sm:w-12" src="/leaf.svg" alt="BgRemoval" />
        </Link>
        <span className="ml-2 text-lg sm:text-xl font-semibold text-black">
          Bg Removal
        </span>
      </div>
      {/* Conditional rendering for signed-in state */}
      {isSignedIn ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-gradient-to-r from-green-950 to-green-700 hover:scale-105 transition-all duration-700 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get started <img className="w-3 sm:w-4" src={a1} alt="" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
