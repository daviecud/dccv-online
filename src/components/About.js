import React from 'react';
import Image from "../dc-code.png";


export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm David.
                        <br className="hidden lg:inline-block" />Software Developer.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Dependable, adaptive and creative with a passion for problem solving. Qualified software developer graduating from CodeClan, Glasgow
                        who is eager to learn new technologies.
                    </p>
                    {/* <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">
                            Work with Me
                        </a>
                        <a 
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My previous work
                        </a>
                    </div> */}
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={Image}
                    
                    />


                </div>
            </div>
            <div className="flex justify-center sm:text-1xl sm:text-3xl text-center italic">
                <h2>"Software is a great combination between artistry and engineering" ~ Bill Gates</h2>
            </div>
        </section>
    )
}