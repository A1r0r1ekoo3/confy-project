import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="dark:bg-[#222831]">
      <div className="max-container h-screen flex flex-col pt-20">
        <div className="border-b border-base-300 pb-5">
          <h1 className=" text-2xl font-bold tracking-tight sm:text-4xl text-[#213363] dark:text-white">
            Place Your Order
          </h1>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
          <form className="flex flex-col gap-6">
            <h4 className="mt-3 text-xl text-[#213363] dark:text-white">
              Shipping Information
            </h4>
            <label className="flex flex-col items-start gap-2">
              <span className="text-[#213363] dark:text-white">First Name</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full dark:bg-black dark:text-white"
              />
            </label>
            <label className="flex flex-col items-start gap-2">
              <span className="text-[#213363] dark:text-white">Adress</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full dark:bg-black dark:text-white "
              />
            </label>
            <Link
              to="/"
              className="btn btn-primary text-white capitalize dark:bg-[#ED5AB3] dark:text-black dark:border-none"
            >
              {" "}
              PLACE YOUR ORDER
            </Link>
          </form>
          <div className=" flex flex-col dark:bg-black bg-[#DDF2FD] lg:w-full  rounded-md p-8  ">
            <ul className="flex justify-between text-xs border-b border-slate-600 pb-5">
              <p className="text-[#213363] dark:text-white">Subtotal</p>
              <span className="font-semibold text-[#213363] dark:text-white">
                $6,299.81
              </span>
            </ul>
            <ul className="flex justify-between text-xs border-b border-slate-600 py-5">
              <p className="text-[#213363] dark:text-white">Shipping</p>
              <span className="font-semibold text-[#213363] dark:text-white">
                $5.00
              </span>
            </ul>
            <ul className="flex justify-between text-xs border-b border-slate-600 py-5">
              <p className="text-[#213363] dark:text-white">Tax</p>
              <span className="font-semibold text-[#213363] dark:text-white">
                $629.98
              </span>
            </ul>
            <ul className="flex justify-between text-xs pt-5">
              <p className="text-[#213363] dark:text-white">Order Total</p>
              <span className="font-semibold text-[#213363] dark:text-white">
                $629.98
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
