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
                            className="w-48 h-52 rounded-full border-4 border-white"
                        />
                    </div>
                 
                    <h1 className="text-4xl font-bold text-gray-900 text-center kode-mono mb-4" style={{ margin: '20px' }}>Ayşegül Özen</h1>
                    <br />
                    <div className="w-24 border-b border-gray-400 mx-auto mb-6"></div>
                    <h2 className="text-2xl text-gray-900 text-center kode-mono mb-4"style={{margin: '20px'}}>Web Developer</h2>
                    <br />
                    <br/>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white p-1  shadow-lg">
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.linkedin.com/in/aysegul-ozen-aa33912ab/" className="text-gray-700 hover:text-gray-900">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/Aysegulozen" className="text-gray-700 hover:text-gray-900">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://twitter.com/Moontesko" className="text-gray-700 hover:text-gray-900">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 p-8">
                <div className="max-w-lg">
                    <h2 className="text-8xl text-gray-900 kode-mono mb-4">Hi there!</h2>
                    <div className="flex justify-between items-center mb-4">
                        <a href="https://drive.google.com/file/d/1ZirGV5AZU6QRQghphrAan2M2vlLtPW9J/view?usp=sharing" download="CV_Aysegul_Ozen.pdf" className="border border-black text-black px-4 py-2 rounded-lg text-lg hover:bg-green-600">Download CV</a>
                    </div>
                    <p className="text-lg kode-mono text-gray-700">I'm a budding software developer with a knack for innovation and a passion for crafting transformative software solutions. Explore my portfolio for a deeper dive into my projects and experiences. Feel free to reach out—I'd love to connect and discuss potential collaborations!</p>
                </div>
            </div>
        </div>
    );
}


export default HeroSection;
