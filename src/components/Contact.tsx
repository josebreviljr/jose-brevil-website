import React from 'react';
import Section from './Section';
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:info@josebrevil.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-md hover:bg-navy-light transition-colors"
          >
            <Mail className="h-5 w-5" />
            Send me an email
          </a>
          
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com/josebrevil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-navy transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/josebrevil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-navy transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/josebrevil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-navy transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
