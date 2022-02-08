import React from 'react';
import {NavLink as Link, Route, Routes} from "react-router-dom";
import { projects } from "../data.js";
import { ChipIcon } from "@heroicons/react/solid";
import ProjectPage from "../pages/ProjectPage";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-white-900 body-font">
            <div className="container px-5 py-20 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <ChipIcon  className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                       {/* <Link to="ProjectPage" activeClassName="active">Please click here for more details on each project</Link>  */}
                    </p>
                    {/* <Routes>
                     <Route path="/projectpage" element={<ProjectPage />}></Route>
                    </Routes> */}
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                            <img
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                alt="projectImage"
                                src={project.image}
                            />
                            </div>
                            <div className="px-8 py-10 relative z-0 w-full border-4 border-blue-400 bg-gray-900 rounded hover:opacity-1">
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                               <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <p className="leading-relaxed">{project.description}</p>
                                <p className="mt-3 text-blue-600"><a href={project.link}>{project.link}</a></p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}