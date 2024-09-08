import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import AboutUs from "../pages/about-us/AboutUs";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Contact from "../pages/contact-us/Contact";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import ProductDetails from "../pages/product-details/ProductDetails";
import Products from "../pages/products/Products";
import Success from "../pages/success/Success";

export const rootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/productDetails/:id", element: <ProductDetails /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/success", element: <Success /> },
    ],
  },
]);
