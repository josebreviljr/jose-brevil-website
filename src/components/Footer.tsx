
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Jose F. Brevil, Jr.</h3>
            <p className="text-gray-300">Researcher • Educator • Community Leader</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              &copy; {year} Jose F. Brevil, Jr. All rights reserved.
            </p>
            <div className="mt-2">
              <a href="#" className="text-gray-300 hover:text-white text-sm mx-2">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm mx-2">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
