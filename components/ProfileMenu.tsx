"use client";

import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { open, close } from "@/hooks/modelSlice";
import { useDispatch } from "react-redux";

const ProfileMenu = () => {

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <div
        className="border flex items-center gap-3 rounded-[100px] px-4 py-1 shadow-md cursor-pointer"
        onClick={toggleMenu}
      >
        <IoMenuOutline className="md:text-xl text-3xl" />
        <Image
          className="hidden md:block"
          src="/profile.png"
          width={32}
          height={32}
          alt="Profile Image"
        />
      </div>
      {isOpen && (
        <div className="bg-white absolute w-[200px] rounded-md shadow-md md:right-20 right-3 top-20">
          <MenuItem label="Sign up" onClick={() => dispatch(open())}/>
          {/* <MenuItem label="Log in" /> */}
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
