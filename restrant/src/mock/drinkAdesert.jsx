import Mock from "mockjs";

const drinkAdesert = Mock.mock(/\/test.com\/drinkAdesert/, {
  code: "0",
  data: {
    "list|4": [
      {
        "id|+1": 1,
        dishName: "@cname",
        introduce: "@cparagraph(1)",
        price: "@natural(1,100)",
        "type|1": [1, 2, 3],
      },
    ],
  },
  msg: "操作成功",
});
export default {
  drinkAdesert,
};
