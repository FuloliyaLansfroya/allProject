import loadable from "../../utils/loadable";

const gourmet = [
  {
    path: "/gourmet",
    name: "gourmet",
    component: loadable({
      loader: () =>
        import(/* webpackChunkName: 'gourmet' */ "../../templates/gourmet"),
    }),
    childRoutes: [
      {
        path: "/gourmet/dish/:type&:id",
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

export default gourmet;
