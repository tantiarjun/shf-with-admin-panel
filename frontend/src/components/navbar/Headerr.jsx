
import Logo from "../header/Logo";
import Nav from "./Nav";
import Socials from "./Socials";


const Header = () => {
  return (
    <div className="sticky top-0 z-[20]">
      <header className="flex w-full items-center justify-between bg-white">
        <Logo/> 
        <Nav/>
        <Socials/>
      </header>
    </div>
  );











};
export default Header;
