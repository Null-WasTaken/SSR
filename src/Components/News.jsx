import React from "react";

export function News() {
    return (
        <div className={"w-full py-16 text-white px-4"}>
             <div className={"max-w-[1240px] mx-auto grid lg:grid-cols-3"}>
                 <div className={"lg:col-span-2 mt-9"}>
                 <h1 className={"md:text-4xl sm:text-3xl text-xl font-bold py-2"}>Lorem ipsum dolor sit amet</h1>
                 <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem fuga illo nam sapiente. </p>
                 </div>

                 <div className={"my-4"}>
                     <div className={"flex flex-col sm:flex-row items-center justify-around w-full"}>
                         <input className={"p-3 flex w-full rounded-md text-black"} type="email" placeholder={"Enter Your Email"}/>
                         <button className={"bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black ml-4 "}>Learn More</button>
                     </div>

                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit <a href="#" className={"text-[#00df9a] underline"}>Learn More</a></p>
                 </div>

             </div>
        </div>
    )
}