import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MYExperience = () => {
  const headingRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for the heading
    gsap.from(headingRef.current, {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: 'power3.out',
      delay: 0.5,
    });

    gsap.from(spanRef.current, {
      duration: 1.5,
      opacity: 0,
      x: -50,
      ease: 'power3.out',
      delay: 1,
    });
  }, []);

  // Work experience data
  const workExperiences = [
    {
      title: 'Product Developer Intern',
      company: 'SETV Technologies',
      duration: 'Jan 2025 - Present',
      description: `
        - Assist in designing, developing, and maintaining scalable web applications to support deep learning models, NLP chatbots, and AI solutions.  
        - Work on front-end, back-end, and DevOps tasks as needed to integrate and deploy AI models effectively.  
        - Collaborate with team members to ensure end-to-end delivery of projects, from development to deployment.  
        - Debug, troubleshoot, and optimize existing applications to enhance functionality and scalability.  
        - Stay updated with the latest trends in web development, DevOps, and cloud technologies.  
      `
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Rablo',
      duration: 'Nov 2024 - Present',
      description: 'Developed responsive web applications using React, Next.js, and TypeScript.',
    },
    {
      title: 'Web Development Member',
      company: 'GDG Google Developers Group On-campus',
      duration: 'Oct 2024 - Present',
      description: 'Assisted in frontend development and learned modern web technologies.Actively contributed as a GDG on-campus Web Development Member, collaborating on projects, organizing tech events, and exploring modern web technologies.',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-6 sm:px-12 py-12">
      {/* Heading */}
      <div className="flex justify-center items-center h-auto sm:h-52 mb-8 text-center">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-5xl font-extrabold text-slate-100 font-poppins tracking-tight"
        >
          My <span ref={spanRef} className="text-indigo-500">Work Experience</span>
        </h1>
      </div>

      {/* Carousel for Work Experience */}
      <Carousel className="w-full max-w-2xl relative">
        <CarouselContent className="flex">
          {workExperiences.map((experience, index) => (
            <CarouselItem key={index} className="p-4">
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-500">
                  {experience.title}
                </h3>
                <p className="text-slate-300">{experience.company}</p>
                <p className="text-slate-400 text-sm">{experience.duration}</p>
                <div className="text-slate-500 mt-2">
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    {experience.description.split('\n').map((line, index) =>
                      line.trim() ? <li key={index}>{line.trim()}</li> : null
                    )}
                  </ul>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-[-2rem] p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white">
          Previous
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-[-2rem] p-2 bg-slate-700 rounded-full hover:bg-slate-600 text-white">
          Next
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default MYExperience;
