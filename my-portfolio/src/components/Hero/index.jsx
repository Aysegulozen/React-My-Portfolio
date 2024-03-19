import React from 'react';
import Image from '../../assets/Aysegul.jpg'
import './index.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


function HeroSection() {
    return (
        <div className="flex justify-center items-center h-screen hero-section">
            <div className="w-1/3 p-4 relative">
                <div className="w-full p-4 bg-green-600 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-center mb-6">
                        <img
                            src={Image}
                            alt="Aysegul Ozen"
                            className="w-32 h-32 rounded-full border-4 border-white"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 text-center mb-4"style={{margin: '20px'}}>Aysegul Ozen</h1>
                    <div className="w-24 border-b border-gray-400 mx-auto mb-6"></div>
                    <h2 className="text-2xl text-gray-900 text-center mb-4"style={{margin: '20px'}}>Web Developer</h2>
                    <br />
                    <br/>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white p-1  shadow-lg">
                        <div className="flex justify-center space-x-4">
                            <a href="#" className="text-gray-700 hover:text-gray-900">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">
                                <FaGithub size={24} />
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 p-8">
                <div className="max-w-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h2>
                    <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget efficitur felis. Duis vel posuere elit. Vestibulum auctor, lacus et lobortis pharetra, metus odio tempor felis, vitae tristique nulla mauris in dolor.</p>
                </div>
            </div>
        </div>
    );
}


export default HeroSection;