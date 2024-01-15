import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="dark:bg-[#222831]">
      <div className="max-container flex flex-col py-20">
        <div className="border-b border-base-300 pb-5">
          <h2 className=" text-2xl font-bold tracking-tight sm:text-4xl text-[#213363] dark:text-white">
            Shopping Cart
          </h2>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <ul className="lg:col-span-8">
            <li className="mb-12 flex flex-col gap-y-4 sm:flex-row sm:justify-between flex-wrap border-b border-slate-700 pb-6 last:border-b-0">
              <img
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-md"
                src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="flex flex-col">
                <h3 className="mt-3 text-xl text-[#213363] dark:text-white">
                  Glass Table
                </h3>
                <h4 className="text-xl text-neutral-content font-bold mt-2  dark:text-white">
                  {" "}
                  Modenza
                </h4>
                <div className="flex items-center gap-2 mt-2">
                  <span className="capitalize text-[#213363] dark:text-white">
                    Color:
                  </span>
                  <button
                    className="badge w-6 h-6 mr-2 border-2 border-secondary"
                  ></button>
                </div>
              </div>
              <form className="flex flex-col items-start gap-4 mt-4">
                <label className="flex flex-col items-start gap-2">
                  <span className="text-md font-medium -tracking-wider capitalize text-[#213363] dark:text-white">
                    amount
                  </span>
                  <select className="select select-primary select-sm w-full ">
                    <option disabled selected>
                      1
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                  </select>
                </label>
                <button className="btn btn-error text-white dark:text-black dark:hover:bg-[#ED5AB3]  dark:border-none">
                  remove
                </button>
              </form>
              <h3 className="mt-3 text-xl text-[#213363] dark:text-white">
                $339.99
              </h3>
            </li>
          </ul>
          <div className="card-body ">
            <div className=" flex flex-col dark:bg-black bg-[#DDF2FD] lg:w-80  rounded-md p-8  ">
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
            <Link
              to="/checkout"
              className="btn btn-primary capitalize w-full lg:w-80 mt-8 dark:bg-[#ED5AB3] dark:text-black dark:border-none"
            >
              proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
