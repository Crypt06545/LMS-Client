import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "Portfolio", path: "/portfolio" },
    { id: 4, name: "Pricing", path: "/pricing" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="h-[70px] sticky top-0 z-50 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <Link to="/">
        <img
          className="h-9"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
          alt="Company Logo"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="md:flex hidden items-center gap-10">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={`hover:text-gray-500/80 transition ${
                location.pathname === item.path
                  ? "font-medium text-blue-600"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        className="bg-white cursor-pointer text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </Button>

      {/* Mobile menu button */}
      <button
        aria-label="Toggle menu"
        type="button"
        className="inline-block md:hidden active:scale-90 transition"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile menu */}
      <div
        className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`text-sm block py-2 ${
                  location.pathname === item.path
                    ? "font-medium text-blue-600"
                    : ""
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Button
        // className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Get started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
