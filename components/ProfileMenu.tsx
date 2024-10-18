"use client";

import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { openRegistorModel } from "@/hooks/registorModelSlice";
import { openSignInModel } from "@/hooks/signInModelSlice";
import { useDispatch } from "react-redux";
import { signOut } from "next-auth/react";

interface Props {
  currentUser?: any;
}

const ProfileMenu: React.FC<Props> = ({ currentUser }: Props) => {
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
          {currentUser ? (
            <>
              <MenuItem label="Sign out" onClick={() => {signOut()}} />
            </>
          ) : (
            <>
              <MenuItem
                label="Sign up"
                onClick={() => dispatch(openRegistorModel())}
              />
              <MenuItem
                label="Sign in"
                onClick={() => dispatch(openSignInModel())}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
