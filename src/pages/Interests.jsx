// import React from 'react'
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import InactiveButton from "../Components/InactiveButton";
import DesImg from "../images/Image1.png";
import AiImg from "../images/Image2.png";
import InspImg from "../images/Image3.png";
import Button from "../Components/Button";
import {useMediaQuery} from "react-responsive";

function Interests() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  return (
    <>
      <div>
        <div className="text-center mt-20 mx-4">
          <p className="text-xl md:text-2xl font-bold">
            What brings you to Dribbble?
          </p>
          <p className="text-sm mt-2">
            Select the options that describe you. Don&apos;t worry, you can
            explore other options later.
          </p>
        </div>
        {/* Components here */}

        <div>
          <div className="md:flex md:gap-7 grid place-content-center md:mx-10  justify-center mt-12 md:mt-24">
            <Box
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              imgSrc={DesImg}
              text="I'm a designer looking to share my work"
              miniText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            />
            <Box
              isChecked={isChecked2}
              setIsChecked={setIsChecked2}
              imgSrc={AiImg}
              text="I'm looking to hire a designer"
              miniText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            />
            <Box
              isChecked={isChecked3}
              setIsChecked={setIsChecked3}
              imgSrc={InspImg}
              text="I'm looking for design inspiration"
              miniText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "
            />
          </div>

          <div className="flex justify-center my-2">
            {isChecked || isChecked2 || isChecked3 ? (
              <Link to="/verification">
                <Button>Finish</Button>
              </Link>
            ) : (
              <InactiveButton>Finish</InactiveButton>
            )}
          </div>
        </div>

        {/* Logo */}
        <div className="absolute top-0 left-0 md:top-5 md:left-5 ">
          <Link to="/">
            <img src="https://www.vectorlogo.zone/logos/dribbble/dribbble-ar21.svg" />
          </Link>
        </div>
      </div>
    </>
  );
}

function Box({imgSrc, text, miniText, isChecked, setIsChecked}) {
  const imageRef = useRef(null);
  const isMdScreen = useMediaQuery({query: "(min-width: 768px)"});

  const handleBoxClick = () => {
    setIsChecked((e) => !e); // Toggle isChecked
  };

  useEffect(() => {
    if (!isMdScreen) return; // Blocking animation for smaller devices.
    if (isChecked) {
      gsap.to(imageRef.current, {duration: 0.5, marginTop: -100});
    } else {
      gsap.to(imageRef.current, {duration: 0.5, marginTop: 0});
    }
  }, [isChecked]);

  return (
    <>
      <div
        className={`peer w-64 h-80 ${
          isChecked ? "border-pink-600" : ""
        } transition-all mb-4 border-2 border-gray-300 rounded-xl text-center cursor-pointer px-4`}
        onClick={handleBoxClick}
      >
        <div>
          <img
            src={imgSrc}
            className={`w-full mb-2 box-image  `}
            alt="Box"
            ref={imageRef}
          />
        </div>
        <div className="text-xl font-bold">{text}</div>
        <div
          className={`text-sm  ${
            isChecked ? "hidden mt-2 md:block md:mt-0" : "hidden"
          } transition-all`}
        >
          {miniText}
        </div>
        <div className="h-8 grid place-content-center">
          {/* <input
            type="checkbox"
            className="form-checkbox cursor-pointer rounded-full w-4 h-4 outline-none border-none text-pink-600 focus:ring-pink-500 focus:border-pink-500 accent-pink-600"
            onChange={(e) => setIsChecked}
            checked={isChecked}
          /> */}
        </div>
      </div>
    </>
  );
}

export default Interests;
