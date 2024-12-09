import "remixicon/fonts/remixicon.css";

export default function Header() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="header relative bg-gray-100"
        style={{ height: "auto" }}
      >
        <div className="container mx-auto px-4 py-12 lg:py-24 flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="hero-info text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
            <p className="text-lg font-light mb-4 text-gray-500">WELCOME TO CHAIRY</p>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight">
              Best Furniture <br/> 
              Collection for your <br />
               interior.
            </h1>
            <button
              className="mt-6 bg-teal-500 text-white py-3 px-8 rounded-full text-lg shadow-lg hover:bg-teal-600 transition duration-300"
            >
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              className="mx-auto lg:mx-0"
              src="/svgs/chair.svg"
              alt="Chair"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="company-logo bg-white py-8">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center">
          <img src="/logos/logo1.svg" alt="Logo 1" className="max-h-12" />
          <img src="/logos/logo2.svg" alt="Logo 2" className="max-h-12" />
          <img src="/logos/logo3.svg" alt="Logo 3" className="max-h-12" />
          <img src="/logos/logo4.svg" alt="Logo 4" className="max-h-12" />
          <img src="/logos/logo5.svg" alt="Logo 5" className="max-h-12" />
          <img src="/logos/logo6.svg" alt="Logo 6" className="max-h-12" />
          <img src="/logos/logo7.svg" alt="Logo 7" className="max-h-12" />
        </div>
      </div>
    </>
  );
}
