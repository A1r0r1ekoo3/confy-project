import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center md:items-center justify-center h-full w-full  bg-opacity-80 ">
        <h1 className="text-4xl mb-4  text-green-600">Login</h1>
        <form className="flex flex-col gap-4 ">
          <label className="flex flex-col items-center gap-2 ">
            <div className="w-full flex justify-start">
              <span className="text-xl font-semibold dark:text-white ">
                Email
              </span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              required
              className="input input-bordered input-info w-full max-w-xs"
            />
          </label>
          <label className="flex flex-col items-center gap-2 ">
            <div className="w-full flex justify-start ">
              <span className="text-xl font-semibold dark:text-white ">
                Password:
              </span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              required
              className="input input-bordered input-info w-full max-w-xs mb-3"
            />
          </label>
          <div className="flex flex-col justify-center gap-3">
            <Link
              to="/"
              className="btn text-lg font-semibold w-[280px] md:[400px] rounded-lg text-white bg-cyan-500 py-2"
            >
              Login
            </Link>
            <Link
              className="pl-2  text-base hover:underline text-white py-2 px-3 bg-green-700 rounded-md text-center"
              to="/singup"
            >
              if you don't have any account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
