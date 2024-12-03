import { FaCartPlus } from "react-icons/fa";

const Header = () => {
    return (
        <header className="w-full bg-gradient-to-r from-indigo-500 to-indigo-800">
            <h1 className="text-neutral-100 text-xl text-center py-4 font-bold">Orderly</h1>
            <button><FaCartPlus className="text-neutral-100 text-2xl absolute right-5 top-5" /></button>
        </header>
    );
}

export default Header