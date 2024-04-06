// import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import Button from "../Components/Button";
import InactiveButton from "../Components/InactiveButton";

function GetStarted() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);

    setFile(URL.createObjectURL(e.target.files[0]));
  }

  function handleImageClick() {
    document.getElementById("file-upload").click();
  }

  return (
    <>
      <div className="flex justify-center mx-5 h-full mt-20">
        <div>
          <div>
            <p className="font-bold text-2xl md:text-3xl mb-2">
              Welcome! Let&apos;s create your profile
            </p>

            <p className="text-base mb-7">
              Let others get to know you better! You can do these later.
            </p>
            <p className="font-bold text-lg md:text-xl  mb-3">Add an avatar</p>
            {/* Image thingie and choose image button here!*/}
            <div className="flex gap-4">
              <div
                onClick={handleImageClick}
                className="h-24 w-24 cursor-pointer md:h-36 md:w-36 flex overflow-hidden  hover:border-pink-600 transition-all justify-center items-center rounded-full m-5 border-dashed border-2 border-slate-950"
              >
                {file ? (
                  <img src={file} className="" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-slate-700 hover:text-black focus-within:outline-none transition-all "
                >
                  <span className="p-2 border-2 absolute top-10 text-center w-32 border-solid hover:border-pink-600  border-slate-200 cursor:pointer rounded-md  transition-all focus-within:outline-none">
                    Choose Image
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <p className="font-bold text-lg md:text-xl mb-3">
              Add your location
            </p>
            <input
              type="text"
              placeholder="Enter a location"
              className=" focus:outline-none bg-slate-100 rounded w-full mb-3 focus:border-b-2 h-9 pl-2 col-span-2"
            />

            {file ? (
              <Link to="/interests">
                <Button type="submit">Next</Button>
              </Link>
            ) : (
              <InactiveButton type="submit">Next</InactiveButton>
            )}
          </div>
        </div>
        <div className="absolute top-0 left-0 md:top-5 md:left-5">
          <Link to="/">
            <img src="https://www.vectorlogo.zone/logos/dribbble/dribbble-ar21.svg" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
