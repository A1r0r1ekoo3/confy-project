import { Link } from "react-router-dom";
// bg video

import { FcGoogle } from "react-icons/fc";
// useSingup

function Singup() {
  return (
    <div className="h-screen  relative">
      <div className="flex flex-col items-center md:items-center justify-center h-full w-full ">
        <h1 className="text-4xl mb-4  text-green-600">Signup</h1>
        <form className="flex flex-col gap-4 ">
          <label className="flex flex-col items-center gap-2">
            <div className="w-full flex justify-start ">
              <span className="text-xl font-semibold text-white ">
                User Name:
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs "
            />
          </label>
          <label className="flex flex-col items-center gap-2 ">
            <div className="w-full flex justify-start">
              <span className="text-xl font-semibold text-white ">Email</span>
            </div>
            <input
              required
              type="email"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </label>
          <label className="flex flex-col items-center gap-2 ">
            <div className="w-full flex justify-start ">
              <span className="text-xl font-semibold text-white ">
                Password:
              </span>
            </div>
            <input
              required
              type="password"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs mb-3"
            />
          </label>
          <div className="flex flex-col justify-center gap-3">
            <Link to="/" className="btn text-lg font-semibold w-[280px] md:[400px] rounded-lg text-white bg-cyan-500 py-2">
              Singup
            </Link>
            <Link
              className="pl-2 text-xl hover:underline text-white py-2 px-3 bg-green-700 rounded-md text-center"
              to="/login"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup;
