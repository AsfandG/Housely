const MobileNav = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <h2 className="font-script text-4xl font-bold">Housely</h2>
        <ul className="mt-10">
          <li className="mb-5">
            <a href="" className="menu-item">
              Home
            </a>
          </li>
          <li className="mb-5">
            <a href="" className="menu-item">
              Services
            </a>
          </li>
          <li className="mb-5">
            <a href="" className="menu-item">
              Our Work
            </a>
          </li>
          <li className="mb-5">
            <a href="" className="menu-item">
              Testimonial
            </a>
          </li>
        </ul>

        <button className="h-10 bg-primary text-white px-6 text-sm rounded hover:bg-blue-800 md:block">
          Contact Us
        </button>
      </div>

      <div
        onClick={() => setIsMenuOpen(false)}
        className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
      />
    </div>
  );
};

export default MobileNav;
