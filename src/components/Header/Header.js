import React from "react";

function Header(props) {
  return (
    <header className="col-span-full bg-hero-pattern bg-no-repeat pt-8 bg-cover px-2">
      <h1 className=" text-center text-5xl mb-5">Make a Change!</h1>
      <p className="text-center  text-3xl">
        Find The Job You’ve Been Dreaming Of
      </p>
      <form action="" className="mt-8 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search Projects..."
          className="border border-black w-full py-4 px-16"
        />
      </form>
    </header>
  );
}

export default Header;
