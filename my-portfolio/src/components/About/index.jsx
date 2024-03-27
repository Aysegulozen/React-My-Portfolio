import React from 'react';
import AboutImage from '../../assets/About2.png';


const About = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-green-800">

      <div className="container mx-auto flex px-5 py-24 items-center justify-center">
        <div className="flex flex-row items-center justify-center w-full">
          {/* Image */}
          <div className="flex justify-center items-center w-1/2">
            <img src={AboutImage} alt="Profile" style={{ maxWidth: '500px' }} />
          </div>
          {/* Text Content */}
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg p-8 shadow-lg mt-8">
              <div className="flex flex-col justify-center items-start w-full pl-12">
                <h2 className="text-xl font-bold text-green-800 mb-4">Who am I?</h2>
                <h2 className="text-2xl font-semibold text-black mb-4">I'm Ayşegül Özen, a Web Developer</h2>
                <p className="mb-8 text-sm leading-relaxed text-black">
                  Hello, I'm a recent graduate from the University of Birmingham, where I completed a Boot Camp in Front-End Back Web Development. Throughout my academic journey, I've built a solid foundation in programming languages such as <strong className="font-bold">JavaScript</strong>, <strong className="font-bold">HTML</strong>, and <strong className="font-bold">CSS</strong>.
                  <br />
                  I am proficient in using modern <strong className="font-bold">JavaScript (ES6)</strong>, <strong className="font-bold">Bootstrap</strong>, <strong className="font-bold">Tailwind CSS</strong>, and <strong className="font-bold">Flowbite</strong> to create interactive and responsive web interfaces. My command over <strong className="font-bold">Git</strong> for codebase management, <strong className="font-bold">Node.js</strong> for server-side development, and <strong className="font-bold">React</strong> for front-end architecture (including state management, hooks, and context) is strong.
                  <br />
                  My experience in software development includes <strong className="font-bold">test-driven development (TDD)</strong>, unit testing, and deployment strategies. I'm passionate about developing user-friendly applications and adapting to the rapid technological changes of our era.
                  <br />
                  As a recent graduate, I bring a fresh perspective, strong work ethic, and a willingness to learn. I'm actively seeking opportunities to contribute to meaningful projects and further develop my skills in a professional setting.
                  <br />
                  For a detailed look at my experience and the skills I bring to the table, please feel free to download and review my CV.
                </p>
                <div className="w-full border-b border-green-800 mx-auto mb-6"></div>
                <a href="https://drive.google.com/uc?export=download&id=1UHlY7DB1I1_FRebuFD9yfTn7eo8OX4yZ" download="CV_Aysegul_Ozen.pdf">
                  <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Download My CV
                  </button>
                </a>


              </div>
            </div>
          </div>

          {/* Known Technologies */}

        </div>
      </div>
    </div>
  );
};


export default About;