import "./App.css";
import "./style.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import RegPage from "./pages/RegPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/catalog",
      element: <CatalogPage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "/reg",
      element: <RegPage />,
    },
    {
      path: "*",
      element: (
        <>
          <h1>Error 404: Page is not found</h1>
          <Link to="/">Home page</Link>
        </>
      ),
    },
  ]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <RouterProvider router={router} />
    </div>
  );
}
