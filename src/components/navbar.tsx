import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-background stickey top-0 z-10">
      <nav className="max-w-screen mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <h2 className="font-script text-4xl font-bold">Housely</h2>

          <ul className="hidden md:flex md:gap-14">
            <li>
              <a className="menu-item" href="">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="Services"></a>
            </li>
            <li>
              <a className="menu-item" href="">
                Our Work
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Testimonials
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Contact Us
              </a>
            </li>
          </ul>

          <button>Contact Us</button>
          <button>
            <Menu />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
