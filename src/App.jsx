import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layout
import RootLayout from "./layout/RootLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import ProductId from "./pages/ProductId";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
function App() {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <ProductId />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/singup",
      element: <Singup />,
    },
  ]);

  return <RouterProvider router={roots} />;
}

export default App;
