import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Card, Button } from 'flowbite-react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0ac3htc', 'template_wzerrf9', form.current, 'x-7lFQqra4EeukDpo')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been received.');
        window.location.reload();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
      });
  };

  return (
    <div className="flex kode-mono flex-col items-center justify-center h-screen bg-green-800">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-white font-bold mb-4">Get in Touch</h2>
        <div className="w-24 border-b border-gray-400 mx-auto mb-6"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <div className="w-full max-w-lg">
          <div className="p-8 text-white">
            <div className="flex flex-col space-y-4">
              <p className="text-center text-2xl">Have any questions or suggestions? Feel free to reach out to me!</p>
              <div className="w-24 border-b border-gray-400 mx-auto mb-6"></div>
              <div className="flex justify-center items-center space-x-2">
                <FiPhone size={24} />
                <span>+44 7783645097</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FiMail size={24} />
                <span>ozenaysegul@gmail.com</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <FiMapPin size={24} />
                <span>Birmingham, UK</span>
              </div>
              <div className="w-24 border-b border-gray-400 mx-auto mb-6"></div>
              <div className="flex justify-center items-center space-x-4">
                <a href="https://www.linkedin.com/in/aysegul-ozen-aa33912ab/" className="text-white-700 hover:text-gray-700">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/Aysegulozen" className="text-white-700	 hover:text-gray-700">
                  <FaGithub size={24} />
                </a>
                <a href="https://twitter.com/Moontesko" className="text-white-700 hover:text-gray-700">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg">
          <Card className="p-8">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="to_name" className="block mb-2">Name:</label>
                <input id="to_name" type="text" name="to_name" placeholder="Name" className="input input-bordered" />
              </div>
              <div>
                <label htmlFor="from_name" className="block mb-2">Email:</label>
                <input id="from_name" type="email" name="from_name" placeholder="Email" className="input input-bordered" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message:</label>
                <textarea id="message" name="message" placeholder="Message" className="textarea textarea-bordered" />
              </div>
              <Button type="submit" className="w-24 bg-green-600">Send</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;