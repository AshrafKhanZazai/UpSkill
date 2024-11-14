import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/public/Images/StartUp/Brand.svg";
import "../App.css"


const navigation = [
  { name: "Home", href: "#" },
  { name: "Payment", href: "#" },
  { name: "Features", href: "#" }
];

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set initial theme based on user preference or default to light
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle dark mode and update local storage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <div className="font-sofia fixed top-0 left-0 w-full z-50 container mx-auto">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className={"flex fixed w-full top-0 z-50 border-gray-800 bg-white dark:bg-[#111928] backdrop-blur-md items-center justify-between p-6 lg:px-8 lg:mx-auto max-w-[1280px]"}
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-12 w-auto mx-0 lg:mx-10" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ml-24">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-semibold leading-6 dark:text-gray-100 text-gray-900 hover:text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ml-96">
            <a
              href="#"
              className="text-md leading-6 text-gray-900 dark:text-gray-100 hover:text-gray-400 mx-12"
            >
              Login
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-start">
            <a
              href="#"
              className="text-md bg-[#3d5ff8] hover:bg-[#3454e0] font-semibold leading-6 rounded-lg px-7 py-3 text-gray-200 -mx-5"
            >
              Sign Up
            </a>
          </div>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="hidden lg:flex rounded-full"
          >
            
          </button>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={logo}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mx-3 block rounded-lg px-3 py-2 text-lg font-bold leading-7 text-gray-500 hover:text-gray-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}





