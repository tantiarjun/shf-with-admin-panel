const NavLinks = () => {
  return (
    <>
      <ul className="inline-flex gap-4 justify-center text-blue-600 font-medium w-full">
        <li className=" hover:scale-110 transition duration-100">
          <a href="/">Home</a>
        </li>
        <li className="hover:scale-110 transition duration-100">
          <a href="/aboutus">About Us</a>
        </li>
        <li className="hover:scale-110 transition duration-100">
          <a href="/events">Events</a>
        </li>
        <li className="hover:scale-110 transition duration-100">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="hover:scale-110 transition duration-100">
          <a href="/contact">Contact</a>
        </li>
        <li className="hover:scale-110 transition duration-100">
          <a href="/workwithus">Work With Us</a>
        </li>
      </ul>
    </>
  );
};

const Nav = () => {
  return (
    <nav className="w-1/3">
      <div className="flex justify-between">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Nav;
