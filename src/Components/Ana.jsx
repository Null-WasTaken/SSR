import React from "react";
import laptop from "./assets/laptop.jpg";
export function Ana() {
    return(
        <div className={"w-full bg-white py-16 px-4"}>
            <div className={"max-w-[1240px] mx-auto grid md:grid-cols-2"}>
                <img className={"w-[500px] mx-auto my-4"} src={laptop} alt="/"/>

                <div className={"flex flex-col justify-center"}>
                    <p className={"text-[#00df9a] font-bold"}>THIS IS A TEST</p>
                    <h1 className={"md:text-4xl sm:text-3xl text-2xl font-bold py-2"}>TEST PARA</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facilis praesentium ut voluptates. Blanditiis commodi eaque hic, illo iusto necessitatibus nihil omnis possimus provident quidem quo repellendus, sequi tempora voluptate.
                </p>
                    <button className={"bg-black w-[200px] rounded-md my-6 mx-auto py-3 text-[#00df9a] md:mx-0"}>Learn More</button>
                </div>
            </div>
        </div>
    )

}