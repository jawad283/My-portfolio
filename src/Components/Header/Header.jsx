import { useState, useEffect } from "react";

const MenuIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SunIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(prefersDark);
  }, []);

  // Apply theme to <html> and body for global background
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.add("transition-colors", "duration-300");
    body.classList.add("transition-colors", "duration-300");

    if (isDark) {
      root.classList.add("dark");
      body.classList.remove("bg-white", "text-gray-900");
      body.classList.add("bg-gray-950", "text-gray-100");
    } else {
      root.classList.remove("dark");
      body.classList.remove("bg-gray-950", "text-gray-100");
      body.classList.add("bg-white", "text-gray-900");
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <nav
        className="mx-auto max-w-6xl rounded-2xl border border-gray-200/60 dark:border-white/10
                   bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl
                   shadow-lg shadow-black/5
                   transition-colors duration-300"
      >
        <div className="flex items-center justify-between px-5 sm:px-7 py-3">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            Jawad <span className="text-indigo-500"> Portfolio</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300
                             hover:text-indigo-500 dark:hover:text-indigo-400
                             transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full
                         bg-gray-900 text-white dark:bg-white dark:text-gray-900
                         text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-full text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200/60 dark:border-white/10 px-5 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-3 py-3 rounded-lg text-sm font-medium
                               text-gray-700 dark:text-gray-200
                               hover:bg-gray-100 dark:hover:bg-white/10
                               transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block text-center px-4 py-3 rounded-full
                             bg-gray-900 text-white dark:bg-white dark:text-gray-900
                             text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
