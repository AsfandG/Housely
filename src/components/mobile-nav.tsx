const MobileNav = ({
  setIsMenuOpen,
  isOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  function handleScroll(sectionId: string) {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
        <h2 className="font-script text-4xl font-bold">Housely</h2>
        <ul className="mt-10">
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("hero")}>
              Home
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("services")}>
              Services
            </a>
          </li>
          <li className="mb-5">
            <a className="menu-item" onClick={() => handleScroll("our-work")}>
              Our Work
            </a>
          </li>
          <li className="mb-5">
            <a
              className="menu-item"
              onClick={() => handleScroll("testimonials")}
            >
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
