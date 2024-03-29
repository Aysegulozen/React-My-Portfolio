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
        <div className="flex justify-center items-center h-screen bg-green-800">
            <div className="w-full max-w-9xl">
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
                                    <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all">
                                        View on GitHub
                                    </a>
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