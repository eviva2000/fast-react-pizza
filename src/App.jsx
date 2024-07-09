import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import { AppLayout } from "./ui/AppLayout";
function App() {
  // we use this imparative way (createBrowserRouter) in order to fetch data/load data with react router
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
