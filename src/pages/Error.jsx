import {Link} from "react-router-dom";

function Error() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="w-full bg-pink-600 h-12 text-white font-bold text-center text-3xl">
          Error-404
        </div>
        <div className="h-full bg-pink-200 w-full text-center px-5 py-24 font-bold text">
          This page does not exist. Click{" "}
          <span className="text-blue-600 hover:underline">
            <Link to="/signup">here</Link>
          </span>{" "}
          to redirect to Sign Up page.
        </div>
      </div>
    </>
  );
}

export default Error;
