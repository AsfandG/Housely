import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MobileNav from "./mobile-nav";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  return (
    <>
      {isMenuOpen && (
        <MobileNav isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
      <div className="bg-background sticky top-0 z-10">
        <nav className="max-w-screen mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <h2 className="font-script text-4xl font-extrabold h-12 text-gradient">
              Housely
            </h2>

            <ul className="hidden md:flex md:gap-14">
              <li>
                <Link
                  to="hero"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                  href=""
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                  href=""
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="our-work"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                  href=""
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth
                  spy
                  offset={-80}
                  className="menu-item"
                  href=""
                >
                  Testimonials
                </Link>
              </li>
            </ul>

            <button className="hidden h-10 bg-primary text-white px-6 text-sm rounded hover:bg-blue-800 md:block">
              Contact Us
            </button>
            <button
              onClick={toggleMenu}
              className="w-11 h-11 bg-blue-200 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
