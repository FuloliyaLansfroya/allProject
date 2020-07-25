import gourmet from "./module/gourmet";
import shopping from "./module/shopping";
import DrinkAdesert from "./module/drinkAdesert";
import Scale from "./module/scale";
import Staff from "./module/staff";
import Join from "./module/join";
const routers = [
  ...gourmet,
  ...shopping,
  ...DrinkAdesert,
  ...Scale,
  ...Staff,
  ...Join,
];

export default routers;
