"use client";

import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    // handle navbar
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="w-full bg-gradient-to-r from-indigo-500 to-indigo-800">
            <div className="flex justify-between items-center px-5">
                <button onClick={handleClick}  className="flex gap-1 flex-col">
                    <div className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                        ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></div>
                    <div className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm
                        ${isOpen ? 
                    'opacity-0' : 'opacity-100'
                    }`}></div>
                    <div className={`bg-white block transition-all duration-300 ease-out h-0.5 w-4 rounded-sm
                        ${isOpen ? 
                    '-rotate-45 -translate-y-2 w-6' : 'translate-y-0.5'
                    }`}></div>
                </button>
                <div>
                    <h1 className="text-neutral-100 text-xl text-center py-4 font-bold">Orderly</h1>
                </div>
                <button className="relative">
                    <div className="absolute top-[-35px] right-2">
                        <span className="bg-red-500 relative top-1 right-[-15px] text-white rounded-full px-2 py-1 text-xs font-semibold">1</span>
                        <Link href="/cart">
                            <FaCartPlus className="text-neutral-100 text-2xl" />
                        </Link>
                    </div>
                </button>
            </div>

            {isOpen && <Navbar />}
        </header>
    );
}

export default Header