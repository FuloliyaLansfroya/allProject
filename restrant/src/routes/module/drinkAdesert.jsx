import loadable from "../../utils/loadable";

const DrinkAdesert = [
  {
    path: "/drinkAdesert",
    name: "drinkAdesert",
    component: loadable({
      loader: () =>
        import(/* webpackChunkName: 'gourmet' */ "../../templates/drinkAdesert"),
    }),
    childRoutes: [
      {
        path: "/drinkAdesert/dish/:type&:id",
        name: "dish",
        component: loadable({
          loader: () =>
            import(
              /* webpackChunkName: 'dish' */ "../../templates/dish"
            ),
        }),
      },
    ],
  },
];

export default DrinkAdesert;
