import loadable from "../../utils/loadable";

const Scale = [
  {
    path: "/scale/:count&:type",
    name: "scale",
    component: loadable({
      loader: () =>
        import(/* webpackChunkName: 'gourmet' */ "../../templates/scale"),
    }),
    childRoutes: [
      {
        path: "/drinkAdesert/dish",
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

export default Scale;
