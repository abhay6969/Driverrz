import { Link } from "react-router-dom";

export const Navbar = ()=>{
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" }
    ];
    return(
        <div >
            <div className=" bg-gray-500 text-white p-4 flex justify-between items-center">
                {links.map((link) =>(
                    <Link className="" key={link.name} to={link.path}>{link.name}</Link>
                ))}
            </div>
        </div>
    )
}