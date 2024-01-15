import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function FeatureProducts() {
  const { data, isPending, error } = useFetch(
    `https://strapi-store-server.onrender.com/api/products?featured=true`
  );

  // Assuming data is an object with a property named 'products' that contains the array
  const products = data ? data.data : [];

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {products &&
        products.map((product) => {
          return (
            <Link
              to={`products/${product.id}`}
              key={product.id}
              className="flex flex-col items-center shadow-xl w-[323px] hover:shadow-slate-500 dark:bg-[#222831]  rounded-2xl  "
            >
              <img
                className="rounded-2xl  w-[290px] h-[210px] mt-4"
                src={product.attributes.image}
                alt={product.attributes.title}
              />
              <h3 className="card-title capitalize tracking-wider pt-8 pb-4 dark:text-white">
                {product.attributes.title}
              </h3>
              <p className="text-secondary pb-8">${product.attributes.price}</p>
            </Link>
          );
        })}
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default FeatureProducts;
