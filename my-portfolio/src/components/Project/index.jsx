import React, { useState } from 'react';
import Slider from 'react-slick';
import { Card } from 'flowbite-react';

import projects from '../Project/details.js';

import '../Project/index.css';

const ProjectSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        arrows: true,
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    };
  
    return (
        <div className="flex justify-center items-center kode-mono h-screen bg-green-800">
            <div className="w-full max-w-9xl">
            <h1 className="text-3xl font-bold text-white text-center mb-8"style={{ margin: '10px' }}>My Projects</h1>
        <p className="text-lg text-gray-200 text-center mb-8">Browse through the slides below to explore my projects and access their details via GitHub and demo links.</p>
        
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={project.id} className={`p-4 ${index === activeSlide ? 'activeSlide' : 'inactiveSlide'}`}>
                            <div className="card group relative"> 
                                <Card>
                                    <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {project.name}
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {project.description}
                                    </p>
                                   <div className="flex mt-2 space-x-4">
                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all">
                                        GitHub
                                    </a>
                                    <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all">
                                        Demo
                                    </a>
                                </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
  
export default ProjectSlider;