import { useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router";

export const Navbar = () => {
	const [servicesActive, setServicesActive] = useState("");
	const timeoutRef = useRef<number|null>(null);
	const links = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Services", path: "/services", hasDropdown: true, type: "service" },
        { name: "City", path: "/services", hasDropdown: true, type: "city"  },
		{ name: "Contact", path: "/contact" },
	];

	const servicesData = [
  {
    type: "service",
    items: [
      { name: "All Services", path: "/services/web-development" },
      { name: "Daily Services", path: "/services/app-development" },
      { name: "Permanent Services", path: "/services/seo" },
      { name: "Outstation Services", path: "/services/seo" },
      { name: "Temporary Services", path: "/services/seo" },
      { name: "Hourly Services", path: "/services/seo" },
      { name: "Night Services", path: "/services/seo" },
    ],
  },
  {
    type: "city",
    items: [
      { name: "Kanpur", path: "/city?city=Kanpur" },
      { name: "Lucknow", path: "/city?city=Lucknow" },
      { name: "Unnao", path: "/city?city=Unnao" },
    ],
  },
];

const handleMouseEnter = (name:string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel hide if user re-enters quickly
    }
    setServicesActive(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesActive(""); // Hide after short delay
    }, 200); // 200ms delay gives enough time for user to move
  };

	return (
		<div className=" bg-gray-500 text-white p-4 flex justify-center gap-6 items-center relative">
			{links.map((link) => {
				if (link.hasDropdown) {
                    const dropdownData = servicesData.find(
            (group) => group.type === link.type
          );
					return (
						<div
							key={link.name}
							className="relative"
							onMouseEnter={() => handleMouseEnter(link.name)}
							onMouseLeave={handleMouseLeave}
						>
							<Link
								to="#"
								className="flex flex-row gap-1 items-center">
								{link.name}{" "}
								<AiFillCaretDown
                  className={`transition-transform duration-200 ${
                    servicesActive === link.name ? "rotate-180" : "rotate-0"
                  }`}
                />
							</Link>
							{servicesActive === link.name && dropdownData    && (
								<div className="bg-gray-500 m-3 p-2 w-40  absolute z-10">
									<div className="flex flex-col gap-1 p-2">
										{dropdownData.items.map((service) => (
											<Link
												key={service.name}
												to={service.path}
											>
												{service.name}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					);
				} else {
					return (
						<Link className="" key={link.name} to={link.path}>
							{link.name}
						</Link>
					);
				}
			})}
		</div>
	);
};
