import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#22D3EE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2 focus:ring-offset-[#06090F]'
      aria-label={`Navigate to ${title} section`}
    >
      {title}
    </Link>
  );
};

export default NavLink; 