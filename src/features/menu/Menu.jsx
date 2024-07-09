import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../service/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  // Step 3: Use the data from the loader
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
}
// Step 1: Create a loader function that fetches the menu data
export async function loader() {
  const menue = await getMenu();
  return menue;
}

export default Menu;
