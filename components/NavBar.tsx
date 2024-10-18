"use client";

import Container from "./Container";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import Search from "./Search";

interface Props {
  currentUser?: any;
}

const NavBar: React.FC<Props> = ({ currentUser }: Props) => {
  return (
    <>
      <nav className="border fixed w-full z-10 bg-white md:py-4 py-2">
        <Container>
          <div className="flex gap-3 justify-between items-center">
            <Logo />
            <Search />
            <ProfileMenu currentUser={currentUser} />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;
