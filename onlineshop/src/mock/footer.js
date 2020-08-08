import Mock from "mockjs";

const footer = Mock.mock(/\/test.com\/footer/, {
  code: "0",
  data: {
    "list|10": [
      {
        id: '@id',
        title: "@ctitle",
        introduce: "@cparagraph(1)"
      }
    ]
  },
  msg: "操作成功"
});

export default {
  footer
};
