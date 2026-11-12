import React, { useState } from "react";
import Logo from '../../assets/images/Logo.png';

export default function Navbar({setActiveSection, activeSection}){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar sticky top-0 z-50 flex justify-between items-center text-slate-950 bg-blue-100 font-sans font-semibold text-sm  md:text-lg md:text-md px-10  border-b border-blue-300">
            <div className="flex justify-between items-center gap-4">
                <span className="flex justify-center items-center w-12 h-12 sm:h-16 sm:w-16 ">
                    <img src={Logo} alt="" />
                </span>
                <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl"></span>
            </div>
            
            <div className="hidden md:flex justify-between items-center gap-2 lg:gap-8">
                <button className="rounded-2xl hover:bg-blue-600 active:bg-blue-400 hover:text-white px-3 py-1" onClick={()=>setActiveSection("home")}>Home</button>
                <button className="rounded-2xl hover:bg-blue-600 active:bg-blue-400 hover:text-white px-3 py-1" onClick={()=>setActiveSection("about")}>About Us</button>
                <button className="rounded-2xl hover:bg-blue-600 active:bg-blue-400 hover:text-white px-3 py-1" onClick={()=>setActiveSection("services")}>Services</button>
                <button className="rounded-2xl hover:bg-blue-600 active:bg-blue-400 hover:text-white px-3 py-1" onClick={()=>setActiveSection("contact")}>Contact</button>
            </div>
            
            <div className="group block md:hidden">
                <div className="hamburger flex flex-col gap-1 md:hidden" onClick={()=>setIsOpen(!isOpen)}>
                    <div className="h-1 w-7 bg-blue-600 rounded-md"></div>
                    <div className="h-1 w-7 bg-blue-600 rounded-md"></div>
                    <div className="h-1 w-7 bg-blue-600 rounded-md"></div>
                </div>

                <div className={`absolute top-20 right-2  ${isOpen ? "flex" : "hidden"} flex-col justify-start items-start gap-3 bg-blue-500 rounded-lg text-white py-2 w-1/3`}>
                    <button className="rounded-2xl hover:bg-white hover:text-black active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => {setIsOpen(false); setActiveSection("home")}} >Home</button>
                    <button className="rounded-2xl hover:bg-white hover:text-black active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => {setIsOpen(false); setActiveSection("about")}} >About Us</button>
                    <button className="rounded-2xl hover:bg-white hover:text-black active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => {setIsOpen(false); setActiveSection("services")}} >Services</button>
                    <button className="rounded-2xl hover:bg-white hover:text-black active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => {setIsOpen(false); setActiveSection("contact")}} >Contact</button>
                </div>

            </div>
            
        </div>
    );
}