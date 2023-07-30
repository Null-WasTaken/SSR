import React from "react";
import {FiUser , FiUsers} from "react-icons/fi";

export default function Card() {
    return (
        <div className={"px-4 w-full bg-white py-[10rem]"}>
            <div className={"max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8"}>
                <div className={"w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500 "}>
                    <div className={"mx-auto mt-[-3rem] bg-white"}>
                    <FiUser size={50} />
                    </div>
                    <h2 className={"text-2xl font-bold text-center py-8"}>PlaceHolder</h2>
                    <p className={"text-center text-4xl font-bold"}>$99</p>
                    
                    <div className={"text-center font-medium"}>
                        <p className={"py-2 border-b mx-8 mt-8"}>PlaceHolder</p>
                        <p className={"py-2 border-b mx-8 "}>PlaceHolder</p>
                        <p className={"py-2 border-b mx-8 "}>PlaceHolder</p>
                    </div>
                    <button className={"bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto px-6 py-3"}>Learn More</button>
                </div>

                <div className={"w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-500 "}>
                    <div className={"mx-auto mt-[-3rem] bg-white"}>
                        <FiUsers size={50} />
                    </div>
                    <h2 className={"text-2xl font-bold text-center py-8"}>PlaceHolder</h2>
                    <p className={"text-center text-4xl font-bold"}>$99</p>

                    <div className={"text-center font-medium"}>
                        <p className={"py-2 border-b mx-8 mt-8"}>PlaceHolder</p>
                        <p className={"py-2 border-b mx-8 "}>PlaceHolder</p>
                        <p className={"py-2 border-b mx-8 "}>PlaceHolder</p>
                    </div>
                    <button className={"bg-black w-[200px] text-[#00df9a] font-medium rounded-md my-6 mx-auto px-6 py-3"}>Learn More</button>
                </div>

                <div className={"w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500"}>
                    <div className={"mx-auto mt-[-3rem] bg-white"}>
                        <FiUser size={50} />
                    </div>
                    <h2 className={"text-2xl font-bold text-center py-8"}>PlaceHolder</h2>
                    <p className={"text-center text-4xl font-bold"}>$99</p>

                    <div className={"text-center font-medium"}>
                        <p className={"py-2 border-b mx-8 mt-8"}>PlaceHolder</p>
                        <p className={"py-2 border-b mx-8 "}>PlaceHolder</p>
                        <p className={"py-2 border-b mx-8 "}>PlaceHolder</p>
                    </div>
                    <button className={"bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto px-6 py-3"}>Learn More</button>
                </div>
            </div>
        </div>
    );
}