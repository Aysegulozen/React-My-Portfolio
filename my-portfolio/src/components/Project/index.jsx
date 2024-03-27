import React, { useState } from 'react';
import Slider from 'react-slick';
import projects from '../Project/details.js';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
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
         <div className="container  mx-auto h-screen bg-green-800">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={project.id} className={`p-4 ${index === activeSlide ? 'activeSlide' : 'inactiveSlide'}`}>
                        <div className="group relative">
                        <div className="w-full h-80 overflow-hidden rounded-lg">
        {/* object-cover sınıfı resmin oranını koruyarak kutuya sığmasını sağlar */}
        <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-green-500 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-xl font-bold">{project.name}</h3>
        <p className="text-white text-sm">{project.description}</p>
        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="mt-4 bg-white text-green-500 py-2 px-4 rounded">View on GitHub</a>
      </div>
    </div>
  </div>
))}
            </Slider>
         </div>
    );
};
  
export default ProjectSlider;