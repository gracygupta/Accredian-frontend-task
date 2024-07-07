"use client";

import { useState } from "react";
import logo from "../img/logo.svg";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import courses from "./programs"; // Import courses object
import { IoIosArrowDroprightCircle, IoIosArrowForward } from "react-icons/io";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = Object.keys(courses);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 gap-6">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={logo} className="h-8 w-auto" />
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm">
              Courses
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-white"
              />
            </PopoverButton>

            <PopoverPanel className="absolute left-0 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="flex">
                <div className="p-4 w-1/2 border-r">
                  {categories.map((category) => (
                    <div
                      key={category}
                      onMouseEnter={() => setActiveCategory(category)}
                      className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex-auto">
                        <a
                          href="#"
                          className="flex items-center justify-between block font-semibold text-gray-900"
                        >
                          {category}
                          <IoIosArrowDroprightCircle className="ml-2" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 w-3/4">
                  {activeCategory && courses[activeCategory].length > 0 ? (
                    courses[activeCategory].map((subcategory) => (
                      <div
                        key={subcategory.name} // Assuming each subcategory object has a unique 'name' property
                        className="group relative flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="flex flex-row block text-gray-900"
                          >
                            <IoIosArrowForward />
                            &emsp;
                            {subcategory.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center gap-x-6 rounded-lg px-4 py-1 text-sm leading-6 text-gray-500">
                      No courses available
                    </div>
                  )}
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="relative text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-0 after:h-0.5 after:bg-transparent after:transition-transform after:duration-500 after:ease-in-out hover:after:bg-gray-400 hover:after:scale-x-100"
          >
            Refer & Earn
          </a>
          <a
            href="#"
            className="relative text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-0 after:h-0.5 after:bg-transparent after:transition-transform after:duration-500 after:ease-in-out hover:after:bg-gray-400 hover:after:scale-x-100"
          >
            Resources
          </a>
          <a
            href="#"
            className="relative text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700 transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-0 after:h-0.5 after:bg-transparent after:transition-transform after:duration-500 after:ease-in-out hover:after:bg-gray-400 hover:after:scale-x-100"
          >
            About Us
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <button className="text-sm font-semibold leading-6 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md shadow-sm">
            Log in
          </button>
          <button className="text-sm font-semibold leading-6 text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md shadow-sm">
            Try for free <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Courses
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {categories.map((category) => (
                      <DisclosureButton
                        key={category}
                        as="a"
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {category}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Refer & Earn
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
