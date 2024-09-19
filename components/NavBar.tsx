import Container from "./Container";
import Logo from "./Logo";
import Profile from "./Profile";
import Search from "./Search";

const NavBar = () => {
  return (
    <>
      <nav className="border fixed w-full z-50 bg-white md:py-4 py-1">
        <Container>
          <div className="flex justify-between items-center">
          <Logo />
          <Search />
          <Profile />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;
