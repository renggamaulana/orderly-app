import { title } from "process";

const Navbar = () => {

    const menus = [
        {
            title: "New Menu",
            url: "#"
        },
        {
            title: "My Order",
            url: "#"
        },
        {
            title: "Promo",
            url: "#"
        },
        {
            title: "About",
            url: "#"
        },

    ]
    return (
        <nav className="flex flex-col absolute w-full h-full bg-gradient-to-r from-indigo-500 to-indigo-800 transform text-white top-14 duration-500 transition-all ease-in z-10">
            <ul className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {menus.map((menu) => (
                    <li key={menu.title} className="relative group text-md md:text-3xl">
                        <a
                        href={menu.url}
                        className="block px-4 py-2 transition-all duration-400 ease-in-out relative z-10 text-white group-hover:text-indigo-100 hover:font-semibold "
                        >
                            {menu.title}
                        </a>
                        <div className="absolute rounded-lg inset-0 bg-white opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-10"></div>
                  </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar