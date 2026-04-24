const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="max-w-300 mx-auto bg-dimBlue">
        <div className="flex flex-col items-center justify-center p-8">
          <h2 className="font-script text-4xl font-extrabold h-12 text-gradient">
            Housely
          </h2>

          <ul className="flex justify-center gap-6 flex-wrap">
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                About US
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                Contact US
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="" className="text-xs text-darkBlue hover:font-medium">
                Get Quotes
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-darkBlue text-xs text-white text-center p-4">
        &copy; {year}. All Rights Reserved
      </div>
    </>
  );
};
export default Footer;
