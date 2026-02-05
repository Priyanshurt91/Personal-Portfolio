import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/priyanshusraut?igsh=MTdieHlvMG1mZGc4eA=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://github.com/Priyanshurt91" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/priyanshuraut/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;