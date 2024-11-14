import Ayro from "/public/Images/StartUp/Ayro.svg";
import Gray from "/public/Images/StartUp/Gray.svg";
import UI from "/public/Images/StartUp/uideck.svg";
import aboutImage from "/public/Images/StartUp/hero-image-01.png";
const BusinessSite = () => {
  const brandImages = [
    { src: Ayro, alt: 'Ayro' },
    { src: Gray, alt: 'Gray' },
    { src: UI, alt: 'UI' },
  ];
  return (
    <>
      <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-20 mt-24 bg-white dark:bg-[#111928]">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mt-4 text-4xl leading-snug font-bold text-gray-800 dark:text-gray-100 lg:mt-8 sm:text-6xl xl:text-5xl">
              Startup Site Template Built-with TailGrids Components
            </h1>
            <p style={{ width: "50ch" }} className="text-md text-gray-400 leading-6 mt-6 w-full">
              With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing demand throughout the dayed.
            </p>
            <ul className="flex flex-wrap items-center mt-12">
              <li>
                <a
                  href="#!"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-[#3d5ff8] hover:bg-[#2f4bc6] lg:px-7"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="inline-flex items-center justify-center py-3 px-5 text-center text-base font-medium text-[#464646] dark:text-white hover:text-primary"
                >
                  <span className="mr-2">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                      <rect x="7.99893" y="14.979" width="8.18182" height="1.63636" fill="white" />
                      <rect x="11.2717" y="7.61523" width="1.63636" height="4.09091" fill="white" />
                      <path d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z" fill="white" />
                    </svg>
                  </span>
                  Download App
                </a>
              </li>
            </ul>
            <div className="mt-12">
              <p className="text-gray-600 font-serif text-sm">Used by Thriving Brands _____</p>
              <ul className="max-w-md mx-5 lg:mx-0 font-bold text-lg mt-4 space-y-1 text-gray-500 list-inside dark:text-gray-400 flex justify-center gap-2">
                {brandImages.map((brand, index) => (
                  <li key={index}>
                    <img className="h-9 w-auto" src={brand.src} alt={brand.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              className="mt-12 mx-0 lg:mx-12"
              style={{ width: "auto", height: "500px" }}
              src={aboutImage}
              alt="About"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BusinessSite;
