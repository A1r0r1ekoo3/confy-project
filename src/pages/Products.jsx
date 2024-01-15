import { useState } from "react";

// react icons
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

// componenents
import ListRow from "../components/ListRow";
import ListColumn from "../components/ListColumn";

function Products() {
  const [lyout, setLyout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text btn btn-circle text-sm ${
      pattern === lyout
        ? "btn-primary btn-primary-content"
        : "btn-ghost btn-base-content"
    }`;
  };
  // range input
  const [rangeValue, setRangeValue] = useState(5);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="dark:bg-[#222831]">
      <div className="max-container flex flex-col py-20">
        <form className=" dark:bg-black bg-[#DDF2FD] rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
          <label className="flex flex-col gap-2">
            <span className="text-[#213363] text-base capitalize dark:text-white">
              search product
            </span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full dark:bg-[#222831] dark:text-white"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[#213363] text-base capitalize dark:text-white">
              select category
            </span>
            <select className="select select-bordered select-sm w-full dark:bg-[#222831] dark:text-white">
              <option disabled selected>
                all
              </option>
              <option>all</option>
              <option>Tables</option>
              <option>Chairs</option>
              <option>Kids</option>
              <option>Sofas</option>
              <option>Beds</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[#213363] text-base capitalize dark:text-white ">
              select company
            </span>
            <select className="select select-bordered select-sm w-full dark:text-white dark:bg-[#222831]">
              <option disabled selected>
                all
              </option>
              <option>Modenze</option>
              <option>Luxora</option>
              <option>Artifex</option>
              <option>Comfora</option>
              <option>Hamestead</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[#213363] text-base capitalize dark:text-white">
              sort by
            </span>
            <select className="select select-bordered select-sm w-full dark:text-white dark:bg-[#222831]">
              <option disabled selected>
                a-z
              </option>
              <option>a-z</option>
              <option>z-a</option>
              <option>high</option>
              <option>low</option>
            </select>
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text text-[#213363] text-base dark:text-white">
                Select Price
              </span>
              <span className="label-text-alt text-[#213363] text-base dark:text-white">
                $100000
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={rangeValue}
              onChange={handleRangeChange}
              className="range range-primary dark:bg-[#ED5AB3]"
            />
            <div className="label">
              <span className="label-text-alt text-[#213363] text-sm font-bold dark:text-white">
                0
              </span>
              <span className="label-text-alt text-[#213363] text-sm font-bold dark:text-white">
                Max $1,000.00
              </span>
            </div>
          </label>
          <label className="form-control items-center gap-3 label cursor-pointer">
            <span className="label-text dark:text-white">Free Shipping</span>
            <input
              type="checkbox"
              checked="checked"
              className="checkbox checkbox-primary dark:bg-[#ED5AB3]"
            />
          </label>
          <button class="btn btn-active btn-primary btn-sm dark:bg-[#ED5AB3] dark:text-black dark:border-none">
            SEARCH
          </button>
          <button class="btn btn-active btn-secondary btn-sm dark:bg-[#FF8400] dark:text-black dark:border-none">
            RESET
          </button>
        </form>
        <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-[#213363] text-lg capitalize dark:text-white">
              22 pointer
            </h1>
            <div className="flex items-center gap-4 pr-4">
              <button
                type="button"
                className={`${setActiveStyles("grid")}`}
                onClick={() => {
                  setLyout("grid");
                }}
              >
                <AiFillAppstore size={24} className="dark:text-white" />
              </button>
              <button
                type="button"
                className={`${setActiveStyles("list")}`}
                onClick={() => {
                  setLyout("list");
                }}
              >
                <AiOutlineMenu size={24} className="dark:text-white " />
              </button>
            </div>
          </div>
        </div>
        {/* <ListRow /> */}
        {/* <ListColumn /> */}
        {lyout === "grid" ? <ListRow /> : <ListColumn />}
      </div>
    </div>
  );
}

export default Products;
