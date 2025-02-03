'use client';
import React, { useEffect, useRef } from 'react';
import { FaFileAlt, FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiNextdotjs } from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import 'animate.css';
import Image from 'next/image';
import MYexperince from './components/mtexperinece';
import Contactme from './components/contactme';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const animateSection = (ref, stagger = 0.2) => {
      gsap.fromTo(
        ref.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    };

    animateSection(techStackRef);
    animateSection(projectsRef);
  }, []);

  const projects = [
    {
      name: "Tracknomy",
      description: "A Financial Management web application which manages your finances with intelligence built using Next.js and styled using Tailwind CSS.",
      live: "https://tracknomy.vercel.app/",
      imgUrl: "/project1.png", // Replace with actual image URL
    },
    {
      name: "Hirrd",
      description: "Hirrd is a Job Portal web application using React.js and styled using Tailwind CSS, with Clerk authentication and Supabase for database purposes.",
      live: "https://hirrd-one.vercel.app/",
      imgUrl: "/project2.png", // Replace with actual image URL
    },
    {
      name: "Fizzify 3D",
      description: "A 3D Animated website built using Next.js and TypeScript, with Three.js for 3D purposes and GSAP ScrollTrigger for smooth animation.",
      github: "#",
      live: "#",
      imgUrl: "/project3.png", // Replace with actual image URL
    },
  ];

  const techStack = [
    { name: "React.js", icon: <FaReact className="text-5xl text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5xl text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-5xl text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-5xl text-white" /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Main Section */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-3xl p-4">
          <blockquote className="text-xl sm:text-2xl md:text-3xl italic text-gray-300 mb-8 animate__animated animate__fadeIn font-light">
            "A user interface is like a joke. If you have to explain it, it’s not that good."
          </blockquote>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s tracking-wide">
            Hi, I'm <span className="text-indigo-500 underline decoration-dotted">Omkar Walke</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 animate__animated animate__fadeIn animate__delay-2s leading-relaxed">
            A passionate <span className="text-indigo-400 font-semibold">Frontend Developer</span> focused on creating clean, interactive, and engaging user interfaces.
          </p>
          <a
            href="/resume.pdf"
            download="Omkar_Walke_Resume.pdf"
            className="relative inline-flex mt-10 sm:mt-20 items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 font-medium text-base sm:text-lg text-indigo-400 bg-transparent rounded-md group focus:outline-none animate__animated animate__fadeIn animate__delay-3s"
          >
            <span className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 group-hover:animate-pulse"></span>
            <span className="absolute inset-0 rounded-md bg-indigo-950 px-4 sm:px-6 py-2 sm:py-3 group-hover:bg-opacity-20"></span>
            <span className="relative flex items-center gap-2">
              <FaFileAlt className="text-indigo-400 text-xl group-hover:text-white transition-transform duration-300" />
              <span className="transition-all duration-300 group-hover:text-white">
                Download Resume
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="flex items-center justify-center p-4">
        <section className="mt-10 w-full max-w-5xl px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-200 text-center mb-6">
            My Tech Stack
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl italic text-gray-400 text-center mb-10">
            "Transforming ideas into impactful solutions with a versatile tech stack."
          </p>
          <div
            ref={techStackRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 justify-items-center"
          >
            {techStack.map((tech, index) => (
              <Card
                key={index}
                className="w-full sm:w-72 bg-gradient-to-r from-indigo-950 via-gray-800 to-black border border-gray-700 hover:shadow-lg transition-transform duration-500 hover:animate-[rotateFull_1s_linear]"
              >
                <CardHeader className="flex justify-center items-center py-6">
                  {tech.icon}
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-lg font-semibold text-gray-300">
                    {tech.name}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <div className="flex items-center justify-center p-4">
        <section ref={projectsRef} className="mt-16 w-full max-w-7xl px-4 sm:px-8 mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-200 text-center mb-6">
            A Small Selection of Recent Projects
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl italic text-gray-400 text-center mb-10">
            "Building impactful solutions, one project at a time."
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="w-full sm:w-96 bg-gradient-to-r from-indigo-950 via-gray-800 to-black border border-gray-700 transform transition-transform duration-300 hover:scale-105"
              >
                <CardHeader className="relative flex justify-center items-center py-6">
                  <div className="relative w-full h-48 sm:h-60 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.imgUrl}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl font-semibold text-gray-300 mb-4">
                    {project.name}
                  </CardTitle>
                  <p className="text-gray-400 mb-6 text-base sm:text-lg">{project.description}</p>
                  <div className="flex justify-center gap-4 sm:gap-6">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 flex items-center gap-2 hover:text-indigo-400 hover:scale-105 transition-all duration-300"
                    >
                      <p className="text-base sm:text-lg font-semibold">Visit Link</p>
                      <FaExternalLinkAlt className="text-xl sm:text-2xl" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <MYexperince />
      <Contactme />
    </div>
  );
};

export default Page;