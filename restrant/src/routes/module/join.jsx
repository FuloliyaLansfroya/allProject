import loadable from "../../utils/loadable";

const Join = [
  {
    path: "/join",
    name: "join",
    component: loadable({
      loader: () =>
        import(/* webpackChunkName: 'gourmet' */ "../../templates/join"),
    }),
  },
];

export default Join;
