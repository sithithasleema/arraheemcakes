import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import WhatsappLink from "./WhatsAppLink";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-slate-200 py-8 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>

          <p>
            <WhatsappLink />
          </p>
          <p>Email: info@arraheemcakes.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-xl">
            <a
              href="https://www.facebook.com/arraheemcakes.hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/arraheemcakes.hyderabad/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} ArRaheem Cakes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
