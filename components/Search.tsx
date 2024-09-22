"use client";

import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <>
      <div className="flex items-center border w-full md:w-auto rounded-[50px] py-2 px-6 shadow-md gap-6 hover:shadow-lg transition">
        <div className="border-r-[1px] pr-6 flex-1 md:flex-none">Anywhere</div>
        <div className="border-r-[1px] pr-6 hidden md:block">Any week</div>
        <div className="flex items-center gap-3">
          <span className="hidden md:block">Add guests</span>
          <span className="bg-primary text-white p-1 rounded-[20px]">
            <IoMdSearch />
          </span>
        </div>
      </div>
    </>
  );
};

export default Search;
