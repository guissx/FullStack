"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer id="Contact" className="w-full bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#FF3B5C] to-[#FF6B8B] bg-clip-text text-transparent">
              Gustavo Ferreira
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer creating interfaces.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="space-y-4">
            <h4 className="text-gray-300 font-semibold">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-[#FF6B8B] transition-colors text-md">About Me</Link></li>
              <li><Link href="#skills" className="text-gray-400 hover:text-[#FF6B8B] transition-colors text-md">Skills</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-[#FF6B8B] transition-colors text-md">Projects</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h4 className="text-gray-300 font-semibold">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-md">gugacabral03@gmail.com</li>
              <li className="text-gray-400 text-md">+55 (71) 98123-2828</li>
              <li className="text-gray-400 text-md">Salvador, Brazil</li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="space-y-4">
            <h4 className="text-gray-300 font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/guissx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF6B8B] transition-colors">
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/gustavo-ferreira-068aa3272" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF6B8B] transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF6B8B] transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gustavo Ferreira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}