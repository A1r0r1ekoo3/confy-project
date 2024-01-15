import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function ListColumn() {
  const { data, isPending, error } = useFetch(
    `https://strapi-store-server.onrender.com/api/products`
  );

  // Assuming data is an object with a property named 'products' that contains the array
  const products = data ? data.data : [];

  return (
    <div className="mt-12 grid gap-y-8">
      {products &&
        products.map((product) => {
          return (
            <Link
              to={`products/${product.id}`}
              key={product.id}
              className="flex  items-start justify-between shadow-xl  hover:shadow-slate-500 dark:bg-[#222831]  rounded-2xl p-8  "
            >
              <div className="flex items-start gap-10">
                <img
                  className="rounded-2xl  w-24 h-24 sm:w-32 sm:h-32 "
                  src={product.attributes.image}
                  alt={product.attributes.title}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="card-title capitalize tracking-wider pb-4 dark:text-white">
                    {product.attributes.title}
                  </h3>
                  <h3 className="text-xl text-neutral-content font-bold mt-2 ">
                    {product.attributes.category}
                  </h3>
                </div>
              </div>
              <p className="text-secondary pb-8">${product.attributes.price}</p>
            </Link>
          );
        })}
      {isPending && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default ListColumn;
