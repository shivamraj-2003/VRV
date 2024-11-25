import React, { useState, useEffect } from 'react';
import p1 from "../images/p1.webp"
import p2 from "../images/p2.webp"
import p3 from "../images/p3.webp"
import p4 from "../images/p4.webp"
import p5 from "../images/p5.webp"
import p7 from "../images/p7.webp"
import p8 from "../images/p8.webp"
import p9 from "../images/p9.webp"
import p10 from "../images/p10.webp"

import { 
    Menu, 
    ChevronDown, 
    Phone, 
    Mail, 
    MapPin, 
    ArrowRight, 
    BookOpen, 
    Users, 
    Trophy, 
    Calendar,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    PhoneCall,
    Globe,
    Clock
  } from 'lucide-react';
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const images = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p7,
    p8,
    p9,
    p10
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);


  const navItems = [
    { title: 'Home', link: '#' },
    { title: 'About Us', link: '#' },
    { title: 'Infrastructure', link: '#' },
    { title: 'Admission', link: '#' },
    { title: 'Academics', link: '#' },
    { title: 'Activities', link: '#' },
    { title: 'Contact Us', link: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
     

      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">VB</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
                Vishal Bharti School
              </h1>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="relative text-gray-700 hover:text-purple-800 transition-colors group py-2"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button className="hidden lg:flex items-center px-6 py-2.5 bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Admissions Open
              <ArrowRight size={16} className="ml-2" />
            </button>
            
            <div className="lg:hidden">
              <Menu className="h-6 w-6 text-purple-800" />
            </div>
          </div>
        </div>
      </nav>

      <div className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-white z-0"></div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
                Shaping Future Leaders
              </span>
              <br />
              <span className="text-gray-800">With Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering young minds with quality education, modern facilities, and values that last a lifetime.
            </p>
            <div className="flex space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-800 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Apply Now
              </button>
              <button className="px-8 py-4 border-2 border-purple-800 text-purple-800 rounded-full hover:bg-purple-50 transition-all duration-300">
                Virtual Tour
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-800">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-800">500+</div>
                <div className="text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-800">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-100 transform rotate-6 rounded-3xl"></div>
  <img
    src={images[currentImageIndex]}
    alt="Sliding Images"
    className="relative rounded-3xl shadow-xl transition-all duration-1000 ease-in-out w-full h-64 object-cover"
  />
</div>

        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing environment where students can grow, learn, and excel in all aspects of life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Modern Curriculum",
                desc: "Comprehensive education system focusing on practical knowledge"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Faculty",
                desc: "Highly qualified teachers dedicated to student success"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Sports Excellence",
                desc: "State-of-the-art sports facilities and professional coaching"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-800 to-purple-600 rounded-t-2xl"></div>
                <div className="text-purple-800 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600 transform -skew-y-3"></div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Admissions Open for 2024-25</h3>
          <p className="text-xl mb-8 text-purple-100">Limited seats available for LKG, UKG and Class I</p>
          <button className="px-8 py-4 bg-white text-purple-800 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
            Begin Application
          </button>
        </div>
      </div>
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">VB</span>
                </div>
                <h4 className="text-lg font-bold">Vishal Bharti School</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering young minds with quality education and values that last a lifetime.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-800 transition-colors duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-800 transition-colors duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-800 transition-colors duration-300">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-800 transition-colors duration-300">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Admissions', 'Academics', 'Infrastructure', 'Gallery', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center">
                      <ArrowRight size={14} className="mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1 text-purple-500" />
                  <p>Parwana Road, Pundrik Vihar, Pitam Pura, New Delhi, Delhi, India</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <PhoneCall className="w-5 h-5 text-purple-500" />
                  <p>9354937851/54</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <p>info@vishalbhartischool.in</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <p>Mon - Sat: 8:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to stay updated with school news and events.</p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-4 py-2 bg-purple-800 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm text-center md:text-left">
                Copyright © 2024 Vishal Bharti Senior Secondary School - All Rights Reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    

  );
};

export default Home;