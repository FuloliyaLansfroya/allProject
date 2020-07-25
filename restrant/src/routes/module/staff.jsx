import loadable from "../../utils/loadable";

const Staff = [
  {
    path: "/staff/:identity",
    name: "staff",
    component: loadable({
      loader: () =>
        import(/* webpackChunkName: 'gourmet' */ "../../templates/staff"),
    }),
  },
];

export default Staff;
