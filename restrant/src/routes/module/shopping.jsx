import loadable from "../../utils/loadable";

const shopping = [
  {
    path: "/shopping",
    name: "shopping",
    component: loadable({
      loader: () =>
        import(/* webpackChunkName: 'shopping' */ "../../templates/shopping"),
    }),
  },
];

export default shopping;
