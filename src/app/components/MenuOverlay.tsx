import NavLink from "./NavLink";

interface NavLink {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: NavLink[];
  onClose: () => void;
}

const MenuOverlay = ({ links, onClose }: MenuOverlayProps) => {
  return (
    <div 
      className="flex flex-col py-4 md:hidden"
      role="menu"
      aria-label="Mobile navigation menu"
    >
      <ul className="flex flex-col py-4">
        {links.map((link, index) => (
          <li key={index} role="none">
            <NavLink 
              href={link.path} 
              title={link.title} 
            />
          </li>
        ))}
      </ul>
      <button
        onClick={onClose}
        className="text-white hover:text-[#5fdafa] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5fdafa] focus:ring-offset-2 focus:ring-offset-[#121212]"
        aria-label="Close mobile menu"
      >
        Close Menu
      </button>
    </div>
  );
};

export default MenuOverlay; 