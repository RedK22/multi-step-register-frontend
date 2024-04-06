import {useState} from "react";
import Button from "../Components/Button";
import DribImg from "../images/drib.png";
// import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && username && email && password) {
      navigate("/getstarted");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="hidden md:flex shrink-0 bg-slate-100">
          <div className="h-screen">
            <img src={DribImg} alt="Image" className="h-screen w-full" />
          </div>
        </div>
        <div className="mx-4 mt-10 flex-1 2xl:flex-none 2xl:ml-10">
          {/* Form starts here-- */}
          <div className="w-[300px] lg:w-[450px] mx-auto 2xl:w-[600px]">
            <div>
              <p className="text-2xl font-bold mb-5 mt-12">
                Sign up to Dribbble
              </p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <label className="font-semibold text-base">Name</label>
                <label className="font-semibold text-base">Username</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className=" focus:outline-none bg-slate-200 rounded h-9 pl-2"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className=" focus:outline-none bg-slate-200 rounded h-9 pl-2"
                />
                <label className="font-semibold text-base">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className=" focus:outline-none bg-slate-200 rounded h-9 pl-2 col-span-2"
                />
                <label className="font-semibold text-base">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="6+ Characters"
                  className=" focus:outline-none bg-slate-200 rounded h-9 pl-2 col-span-2"
                />
              </div>
              <div className="mt-5 w-full">
                <input type="checkbox" required className="w-4 h-4 rounded" />
                <span className="pl-2 text-xs lg:text-sm font-semibold">
                  Creating an account means you&apos;re okay with our{" "}
                  <span className="text-blue-700 hover:cursor-pointer hover:underline">
                    Terms of Service
                  </span>
                  ,{" "}
                  <span className="text-blue-700 hover:cursor-pointer hover:underline">
                    Privacy Policy
                  </span>
                  , and our default{" "}
                  <span className="text-blue-700 hover:cursor-pointer  hover:underline">
                    Notification Settings
                  </span>
                  .
                </span>
              </div>

              <Button type="submit">Create Account</Button>
            </form>
            <div className="mt-4 text-xs text-gray-600">
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="text-blue-700 hover:cursor-pointer hover:underline">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-blue-700 hover:cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              apply.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
