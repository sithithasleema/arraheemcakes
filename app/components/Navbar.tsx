"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import Themebtn from "./Themebtn";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="w-full bg-cyan-900 h-16 flex items-center justify-center text-white font-mono text-sm md:text-lg text-center px-2 md:px-4">
            What’s Baking This Week? Explore to Discover Our Bestselling
            Flavours.
          </div>
          <div className="w-full border-b-2 pb-4 border-teal-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 ">
              <div className="flex justify-between h-16">
                <div className="flex justify-between w-full">
                  {/* Logo */}
                  <div className="flex items-center w-16 md:w-28">
                    <Link href="/">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={150}
                        height={150}
                      ></Image>
                    </Link>
                  </div>
                  {/* Desktop Menu */}
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                    <Link
                      href="/"
                      prefetch
                      className={`${
                        pathname === "/"
                          ? "border-teal-900 dark:text-white h-3/4 inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                      }`}
                    >
                      Home
                    </Link>

                    <Link
                      href="/products"
                      prefetch
                      className={`${
                        pathname === "/products"
                          ? "border-teal-900 dark:text-white h-3/4 inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                      }`}
                    >
                      Products
                    </Link>

                    <Link
                      href="/faqs"
                      prefetch
                      className={`${
                        pathname === "/faqs"
                          ? "border-teal-900 dark:text-white h-3/4 inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                      }`}
                    >
                      FAQs
                    </Link>

                    <Link
                      href="/contact"
                      prefetch
                      className={`${
                        pathname === "/contact"
                          ? "border-teal-900 dark:text-white h-3/4 inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                          : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-md font-semibold"
                      }`}
                    >
                      Contact
                    </Link>
                    <Themebtn />
                  </div>
                </div>

                {/* Mobile */}

                {/* Toggle button */}
                <div className="-mr-2 flex items-center sm:hidden">
                  <Themebtn />
                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-800 dark:hover:bg-gray-800">
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                prefetch
                className={`${
                  pathname === "/"
                    ? "bg-teal-800 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 dark:hover:bg-gray-700"
                }`}
              >
                Home
              </Link>

              <Link
                href="/products"
                prefetch
                className={`${
                  pathname === "/products"
                    ? "bg-teal-800 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 dark:hover:bg-gray-700"
                }`}
              >
                Products
              </Link>

              <Link
                href="/faqs"
                prefetch
                className={`${
                  pathname === "/faqs"
                    ? "bg-teal-800 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 dark:hover:bg-gray-700"
                }`}
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                prefetch
                className={`${
                  pathname === "/contact"
                    ? "bg-teal-800 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 dark:hover:bg-gray-700"
                }`}
              >
                Contact
              </Link>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
