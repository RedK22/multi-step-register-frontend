// import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import gsap from "gsap";

function Verification() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    if (!gsap) return;

    const menu = document.querySelector(".menu");
    const tl = gsap.timeline();

    const openAnimation = gsap.to(menu, {
      x: "0%",
      duration: 1,
      ease: "power4.out",
      paused: true,
    });

    const closeAnimation = gsap.to(menu, {
      x: "100%",
      duration: 1,
      ease: "power4.out",
      paused: true,
    });

    if (open) {
      openAnimation.play();
    } else {
      closeAnimation.play();
    }

    return () => {
      tl.kill();
    };
  }, [open]);

  const navItems = [
    {id: 1, text: "Inspiration"},
    {id: 2, text: "Find Work"},
    {id: 3, text: "Learn Design"},
    {id: 4, text: "Go Pro"},
    {id: 5, text: "Hire Designers"},
  ];

  const desItems = [
    {id: 1, text: "Go Pro!"},
    {id: 2, text: "Explore design work"},
    {id: 3, text: "Design blog"},
    {id: 4, text: "Playoffs"},
    {id: 5, text: "Weekly warm-up"},
  ];

  const hireItems = [
    {id: 1, text: "Post a job opening"},
    {id: 2, text: "Post a freelance project"},
    {id: 3, text: "Search for designers"},
  ];

  const companyItems = [
    {id: 1, text: "About"},
    {id: 2, text: "Careers"},
    {id: 3, text: "Support"},
    {id: 4, text: "Media kit"},
    {id: 5, text: "Testimonials"},
    {id: 6, text: "API"},
    {id: 7, text: "Terms of Service"},
    {id: 8, text: "Privacy Policy"},
    {id: 9, text: "Cookie Policy"},
  ];

  const directoryItems = [
    {id: 1, text: "Design jobs"},
    {id: 2, text: "Designers for hire"},
    {id: 3, text: "Freelance designers for hire"},
    {id: 4, text: "Tags"},
    {id: 5, text: "Places"},
  ];

  const resItems = [
    {id: 1, text: "Freelancing"},
    {id: 2, text: "Design Hiring"},
    {id: 3, text: "Design Portfolio"},
    {id: 4, text: "Design Education"},
    {id: 5, text: "Creative Process"},
    {id: 6, text: "Design Industry Trends"},
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Nav Bar */}
        <div className="hidden md:block border-b-2">
          <nav>
            <ul className="flex px-5 py-1 font-semibold justify-between">
              <div className="flex  items-center">
                <li className="m-2 cursor-pointer">
                  <Link to="">
                    <img
                      src="https://www.vectorlogo.zone/logos/dribbble/dribbble-ar21.svg"
                      className="h-12 ml-[-10px]"
                    />
                  </Link>
                </li>
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="m-2 cursor-pointer transition-all hover:text-pink-600"
                  >
                    {item.text}
                  </li>
                ))}
              </div>
              <div className="m-2 flex items-center ">
                {/* Search? */}

                <div className="relative mr-4 text-sm items-center">
                  <input
                    className="appearance-none border-none bg-gray-100 border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-36 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-pink-600 focus:border-pink-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Search..."
                  />
                  <div className="absolute right-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-3 text-gray-400 hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Button */}
                <button className=" transition-all rounded-md bg-pink-600 px-6 py-2 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
                  Upload
                </button>
              </div>
            </ul>
          </nav>
        </div>

        {/* MOBILE Nav Bar */}

        <div className="fixed inset-0 z-50 md:hidden">
          {/* Menu Icon */}
          <div className="z-50 absolute right-2 top-2" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {/* Mobile Navigation Menu */}
          <div
            className={`menu py-5 ${
              open ? "border-b-2" : ""
            }  bg-white border-black`}
          >
            <nav className={`bg-white`}>
              <ul className="flex flex-col items-center">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="my-2 cursor-pointer transition-all hover:text-pink-600"
                  >
                    {item.text}
                  </li>
                ))}
                <li className="my-2 cursor-pointer">
                  <div className="relative text-sm">
                    <input
                      className="appearance-none border-none bg-gray-100 border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-36 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-pink-600 focus:border-pink-600 focus:shadow-outline"
                      type="text"
                      placeholder="Search..."
                    />
                    <div className="absolute right-0 inset-y-0 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </li>
                <li className="my-2 cursor-pointer">
                  <button className="transition-all rounded-md bg-pink-600 px-6 py-2 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
                    Upload
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/*  */}
        {/* Body */}
        {/*  */}
        <div className="flex flex-1 flex-col justify-center items-center text-center">
          <div className=" w-[400px] md:w-[700px] flex flex-col justify-center items-center mt-14 p-10 mb-20">
            <p className="font-semibold text-2xl mb-3">
              Please verify your email...
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgb(148 163 184)"
              className="w-16 h-16 md:w-24 md:h-24 mb-3"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <p className="text-xs md:text-base">
              Please verify your email address. We&apos;ve sent a confirmation
              mail.
            </p>
            <p className="text-xs md:text-base mb-2">
              Click the confirmation link in that email to begin using Dribbble.
            </p>
            <p className="text-xs md:text-base mb-2 ">
              Didn&apos;t receive the mail? Check your Spam folder, it may have
              been caught by a filter. If you still don&apos;t see it, you can{" "}
              <span className="text-pink-600 font-semibold cursor-pointer">
                {" "}
                resend the confirmation mail.{" "}
              </span>
            </p>
            <p className="text-xs md:text-base">
              Wrong email address?{" "}
              <span className=" text-pink-600 font-semibold cursor-pointer">
                Change it.
              </span>
            </p>
          </div>
        </div>

        {/*  */}
        {/* Footer */}
        {/*  */}
        <footer className="bg-gray-200 flex-none px-3 py-3 mt-16 w-full border-b border-1 border-gray-500">
          <div className="mb-5">
            <img
              src="https://www.vectorlogo.zone/logos/dribbble/dribbble-ar21.svg"
              className="h-12"
            />
            <ul className="text-sm">
              <li>
                Dribbble is world&apos;s leading community for creatives to
                share, grow and get hired.
              </li>
            </ul>
          </div>
          <div className="container mx-auto grid grid-cols-2 md:flex flex-wrap justify-between flex-1">
            <div className="font-bold text-sm">
              For Designers
              <ul className="font-normal mt-1 md:mt-4">
                {desItems.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer md:mb-3  transition-all hover:text-pink-600"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-bold text-sm">
              Hire Designers
              <ul className="font-normal mt-1 md:mt-4">
                {hireItems.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer md:mb-3 transition-all hover:text-pink-600"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-bold text-sm">
              Company
              <ul className="font-normal mt-1 md:mt-4">
                {companyItems.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer md:mb-3  transition-all hover:text-pink-600"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-bold text-sm">
              Directories
              <ul className="font-normal mt-1 md:mt-4">
                {directoryItems.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer  md:mb-3 transition-all hover:text-pink-600"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="font-bold text-sm">
              Design Resources
              <ul className="font-normal mt-1 md:mt-4">
                {resItems.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer md:mb-3 transition-all hover:text-pink-600"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
        <div className="mx-3 my-4 text-xs bg-white ">
          &copy; 2024 Dribbble. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Verification;
