import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
export const AppLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};
