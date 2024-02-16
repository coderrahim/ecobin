import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="divide-y bg-green-950 text-white">
      <div className="lg:px-20 md:px-10 px-5 container flex flex-col justify-between py-20 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
              <a href="/" className="flex items-center">
              <Image
                      src="/EcoBin.png"
                      width={200}
                      height={100}
                      alt="Picture of the author"
                      ></Image>
              </a>
              <p className="text-sm font-light mt-4 lg:w-72">Empowering Tomorrow, Today: EcoBin is dedicated to redefining waste management. Our innovative solutions pave the way for a greener, cleaner future. Join us in our commitment to sustainability, one EcoBin at a time.</p>
              <h3 className="mt-4 mb-2 font-semibold text-green-600 text-xl">Social Media</h3>
              <div className="flex gap-2">
                  <button className="rounded-full bg-green-600 p-2 hover:bg-white hover:text-green-600 text-2xl"><FaFacebookF></FaFacebookF></button>
                  <button className="rounded-full bg-green-600 p-2 hover:bg-white hover:text-green-600 text-2xl"><FaInstagram></FaInstagram></button>
                  <button className="rounded-full bg-green-600 p-2 hover:bg-white hover:text-green-600 text-2xl"><FaXTwitter></FaXTwitter></button>
                  <button className="rounded-full bg-green-600 p-2 hover:bg-white hover:text-green-600 text-2xl"><FaLinkedinIn></FaLinkedinIn></button>
              </div>
          </div>


          <div className="grid lg:grid-cols-4 md:grid-cols-4 text-sm gap-x-3 gap-y-8 lg:w-2/3 grid-cols-2">
              <div className="space-y-3">
                  <h3 className="font-semibold text-green-600 text-xl">About Company</h3>
                  <ul className="space-y-1">
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">About Us</a>
                      </li>
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">Our Team</a>
                      </li>
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">Pricing Plan</a>
                      </li>
                  </ul>
              </div>
              <div className="space-y-3">
                  <h3 className="font-semibold text-green-600 text-xl">Useful Information</h3>
                  <ul className="space-y-1">
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">Contact Us</a>
                      </li>
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">FAQ</a>
                      </li>
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">Cost Calculator</a>
                      </li>
                  </ul>
              </div>
              <div className="space-y-3">
                  <h3 className="font-semibold text-green-600 text-xl">Additional Links</h3>
                  <ul className="space-y-1">
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">Services</a>
                      </li>
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">Our Projects</a>
                      </li>
                      <li>
                          <a className="text-lg hover:text-green-600" rel="noopener noreferrer" href="#">Work Process</a>
                      </li>
                  </ul>
              </div>
              <div className="space-y-6">

                  <div className="flex flex-col justify-start">
                      <h4 className="font-semibold text-green-600 text-xl">Download APP</h4>
                      <Image
                      src="https://i.ibb.co/z4qBFWY/pngwing-com-copy.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      ></Image>
                      
                  </div>
              </div>
          </div>
      </div>
      <div className="lg:px-20 md:px-10 px-5  flex justify-between py-6 lg:gap-0 md:gap-0 gap-6 text-lg dark:text-gray-400 bg-[#00160c]">
          <p>© 2024 EcoBin. Designed By Invincible 06</p>
          <ul className="flex gap-6">
              <li className="cursor-pointer hover:text-green-600">Site Index</li>
              <li className="cursor-pointer hover:text-green-600">Privacy Policy</li>
              <li className="cursor-pointer hover:text-green-600">Terms of Use</li>
          </ul>
      </div>
  </footer>
    );
};

export default Footer;
