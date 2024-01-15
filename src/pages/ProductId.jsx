import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// react icons
import { FaAngleRight } from "react-icons/fa6";

// hooks
import { useFetch } from "../hooks/useFetch";
import { useState } from "react"

function ProductId() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://strapi-store-server.onrender.com/api/products/${id}`
  );
  const dispatch = useDispatch();
  const products = data ? data?.data : [];
  const [productColor, setProductColor] = useState(products?.attributes?.colors[0])
  console.log(products);
  const productToBuy = {
    cartID: products?.id,
    productID: products?.id,
    title: products?.attributes?.title,
    image: products?.attributes?.image,
    price: products?.attributes?.price,
    amount: products?.attributes?.amount,
    productColor,
    company: products?.attributes?.company,
  };
  
  const addToCart = () => {
    console.log('ok 1');
    console.log(productToBuy);
    dispatch(addItem({product: productToBuy}))
  }

  //   console.log(products.attributes.colors[0]);
  return (
    <div className="dark:bg-[#222831]">
      <div className="max-container flex flex-col py-20 items-start gap-6">
        <nav className="flex items-center  gap-4">
          <Link
            className="flex items-center justify-center gap-4 text-violet-900 text-lg dark:text-white"
            to="/"
          >
            Home <FaAngleRight />
          </Link>
          <Link
            to="/products"
            className=" text-violet-900 text-lg dark:text-white"
          >
            Products
          </Link>
        </nav>
        {data && (
          <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            <div>
              <img
                className="w-96 h-96 lg:w-[512px] rounded-lg"
                src={products.attributes.image}
                alt={products.attributes.title}
              />
            </div>
            <div>
              <h1 className="font-bold capitalize text-3xl text-[#213363] dark:text-white">
                {products.attributes.title}
              </h1>
              <h3 className="text-xl text-neutral-content font-bold mt-2  dark:text-white">
                {products.attributes.category}
              </h3>
              <span className="mt-3 text-xl text-[#213363] dark:text-white">
                ${products.attributes.price}
              </span>
              <p className="mt-6 leading-8 text-[#213363] dark:text-white w-2/3 ">
                {products.attributes.description}
              </p>
              <div className="my-8 flex flex-col gap-2">
                <h3 className="capitalize text-[#213363] dark:text-white">
                  colors
                </h3>
                <div className="flex items-center gap-2">
                  {products?.attributes?.colors.map((color) => {
                  return (
                    <button
                      key={color}
                      type="button"
                      className={`badge h-6 w-6 mr-2 ${
                        color === productColor && "border-2 border-primary"
                      }`}
                      style={{ background: color }}
                      onClick={() => {
                        setProductColor(color);
                      }}
                    ></button>
                  );
                })}
                  {/* <button
                    className={`badge w-6 h-6 mr-2 border-2 border-secondary `}
                  ></button>
                  <button className="badge w-6 h-6 mr-2 false bg-slate-500"></button> */}
                </div>
              </div>
              <form className="flex flex-col items-start gap-8">
                <label className="flex flex-col items-start gap-2">
                  <span className="text-md font-medium -tracking-wider capitalize text-[#213363] dark:text-white">
                    amount
                  </span>
                  <select className="select select-primary w-full ">
                    {/* <option disabled selected={true}>
                      What is the best TV show?
                    </option> */}
                    {Array.from({length: 20}, (_, index) => <option key={index + 1} value={index + 1}>{index + 1}</option>)}
                    {/* <option>2</option>
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
                    <option>20</option> */}
                  </select>
                </label>
                <button onClick={addToCart} className="btn btn-primary dark:text-black dark:bg-[#B0A695] dark:border-none">
                  ADD TO BAG
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductId;
