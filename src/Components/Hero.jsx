import React from "react";
import Typed from "typed.js";

export function Hero() {
    const ref = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(ref.current, {
            strings: ['Test'],
            typeSpeed: 100,
            backSpeed:150,
            backDelay:100,
            loop:true
        })
        return () => {
            typed.destroy();
        };
    },[]);

    return (
        <div className={"text-white"} >

            <div className={" justify-center max-w-[800px] mt-[-95px] w-full h-screen mx-auto text-center flex flex-col"}>
                <p className={"uppercase text-[#00df9a] font-bold p-2"}>This is a test</p>
                <h1 className={"md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"}>This is a Test </h1>
                <div>
                    <p className={"md:text-5xl sm:text-4xl text-xl font-bold"}>this is a placeholder for <span className={"text-[#00df9a] md:text-5xl sm:text-4xl text-xl font-bold"} ref={ref}></span> </p>
                </div>

                <p className={"md:text-2xl sm:text-xl font-bold text-gray-500 pt-3"}>Lorem ipsum dolor sit amet, usantium aliquam aperiam cum dolor </p>

                <button className={"bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black"}>Learn More</button>
            </div>
        </div>
    );
}

