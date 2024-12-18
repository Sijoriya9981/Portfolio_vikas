import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block  pl-3 pr-4 text-[#ADB7BE] sm:text-[1.1rem] rounded md:p-0 hover:text-white sm:py-2"
        >
            {title}
        </Link>
    );
};

export default NavLink;