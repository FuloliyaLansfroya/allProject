import Mock from "mockjs";

const shop = Mock.mock(/\/test.com\/shop/, {
  code: "0",
  data: {
    "list|10": [
      {
        id: "@id",
        title: "@ctitle",
        introduce: "@cparagraph(1)"
      }
    ],
    "city|10": [
      {
        id: "@id",
        title: "@ctitle"
      }
    ]
  },
  msg: "操作成功"
});

export default {
  shop
};
