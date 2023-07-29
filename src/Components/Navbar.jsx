import React from "react";
import {AiOutlineClose , AiOutlineMenu} from "react-icons/ai";


export function Navbar() {

    const [nav , setNav] = React.useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className={"text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4"}>
            <h1 className={"w-full text-3xl font-bold text-[#00df9a]"}>REACT.</h1>

            <ul className={"hidden md:flex"}>
                <a href=""><li className={"p-4"}>Home</li></a>
                <a href=""><li className={"p-4"}>About</li></a>
                <a href=""><li className={"p-4"}>Resources</li></a>
                <a href=""><li className={"p-4"}>Contact</li></a>
            </ul>

            <div onClick={handleNav} className={"block md:hidden"}>
                {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
            </div>

            <div className={!nav ? "md:hidden fixed left-0 top-0 w-[60%] border-r border-gray-900 h-full bg-[#000300] ease-in-out duration-1000" : "fixed  left-[-100%]  top-0 h-full w-[60%] ease-in-out duration-1000"}>
                <h1 className={"w-full text-3xl font-bold text-[#00df9a] m-3"}>REACT.</h1>

                <ul className={"uppercase"}>
                    <a href=""><li className={"p-4 border-b border-gray-600"}>Home</li></a>
                    <a href=""><li className={"p-4 border-b border-gray-600"}>About</li></a>
                    <a href=""><li className={"p-4 border-b border-gray-600"}>Resources</li></a>
                    <a href=""><li className={"p-4"}>Contact</li></a>
                </ul>
            </div>
        </div>
    );
}