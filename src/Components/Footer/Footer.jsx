import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/jawad283", icon: FaGithub },
    { name: "LinkedIn", href: "#", icon: FaLinkedin },
    { name: "Twitter", href: "#", icon: FaTwitter },
    {
      name: "Instagram",
      href: "https://www.instagram.com/jav.ad_karimi?igsh=MWR4d2tldHQ0dDlpdQ%3D%3D&utm_source=qr",
      icon: FaInstagram,
    },
  ];

  return (
    <footer className="relative px-4 sm:px-6 pb-6 pt-10 bg-transparent">
      <div
        className="mx-auto max-w-6xl rounded-2xl border border-gray-200/60 dark:border-white/10
                   bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl
                   shadow-lg shadow-black/5
                   transition-colors duration-300"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-7 py-4">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center sm:text-left">
            © {year} Jawad <span className="text-indigo-500">Portfolio</span>.
            All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-gray-700 dark:text-gray-300
                             border border-gray-200/50 dark:border-white/10
                             bg-white/50 dark:bg-white/5 backdrop-blur-sm
                             hover:bg-indigo-50 dark:hover:bg-indigo-500/20
                             hover:border-indigo-200 dark:hover:border-indigo-500/50
                             hover:text-indigo-500 dark:hover:text-indigo-400
                             transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
