// import React from "react";

function InactiveButton({type, children}) {
  return (
    <button
      type={type}
      className=" transition-all cursor-not-allowed rounded-md bg-pink-300 px-6 py-2 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 mt-4"
    >
      {children}
    </button>
  );
}

export default InactiveButton;
