import React from 'react';
import { BadgeCheckIcon, CodeIcon } from '@heroicons/react/solid';
import { skills, devTools } from '../data';


export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <CodeIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Programming Languages
                    </h1>
                    {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Blah Blah Blah
                    </p> */}
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-blue-500 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10 mb-10">
                    
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-1">
                        Development Tools
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {devTools.map((tools) => (
                        <div key={tools} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-red-300 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-black">
                                    {tools}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}