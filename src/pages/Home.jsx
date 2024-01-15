import { Link } from "react-router-dom";

// componenets
import FeatureProducts from "../components/FeatureProducts";

function Home() {
  return (
    <div className="dark:bg-[#222831]">
      <div className="max-container  flex flex-col items-start ">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between pt-20">
          <div className="flex flex-col items-start">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-[#213363] dark:text-white">
              We are changing the way people shop
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link
              to="/products"
              className="btn btn-primary mt-10 text-white border-none dark:text-slate-800 dark:bg-[#ED5AB3] "
            >
              OUR PRODUCTRS
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="   carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box ">
              <div className="carousel-item">
                <img
                  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
                  className="rounded-box h-full w-80 object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
                  className="rounded-box h-full w-80 object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
                  className="rounded-box h-full w-80 object-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
                  className="rounded-box h-full w-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-24 w-full">
          <div className="border-b border-base-300 pb-5">
            <h2 className="text-3xl font-medium tracking-wider text-[#213363] dark:text-white">
              Featured Products
            </h2>
          </div>
          <FeatureProducts />
        </div>
      </div>
    </div>
  );
}

export default Home;
