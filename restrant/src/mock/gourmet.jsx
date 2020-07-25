import Mock from "mockjs";

const gourmet = Mock.mock(/\/test.com\/gourmet/, {
  code: "0",
  data: {
    "list|5": [
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

const dish = Mock.mock(/\/test.com\/dish/, "post", (options) => {
  const { body } = options;
  const { match } = JSON.parse(body);
  if (match.params.type === "gourmet") {
    return Mock.mock({
      code: "0",
      data: {
        list: [
          {
            name: "主料",
            innerValue: "@cparagraph(1)",
          },
          {
            name: "香辛料",
            innerValue: "@cparagraph(1)",
          },
          {
            name: "油",
            "innerValue|1": ["花生油", "调和油", "豆油"],
          },
        ],
        id: match.params.id,
        dishName: "@cname",
        introduce: "@cparagraph(1)",
        price: "@natural(1,100)",
        sellPrice: "@natural(1,100)",
        simaller: "@natural(1,10)",
      },
      msg: "操作成功",
    });
  }
  if (match.params.type === "drinkAdesert") {
    return Mock.mock({
      code: "0",
      data: {
        list: [
          {
            name: "主料",
            innerValue: "@cparagraph(1)",
          },
          {
            name: "配料",
            innerValue: "@cparagraph(1)",
          },
          {
            name: "甜度",
            "innerValue|1": ["微甜", "正常", "超甜"],
          },
        ],
        id: match.params.id,
        dishName: "@cname",
        introduce: "@cparagraph(1)",
        price: "@natural(1,100)",
        sellPrice: "@natural(1,100)",
        simaller: "@natural(1,10)",
      },
      msg: "操作成功",
    });
  }
  if (match.params.type === "scale") {
    return Mock.mock({
      code: "0",
      data: {
        list: [
          {
            name: "介绍",
            innerValue: "@cparagraph(1)",
          },
          {
            name: "剩余数量",
            innerValue: "@natural(1,30)",
          },
        ],
        id: match.params.count,
        dishName: "@cname",
        price: "@natural(1,100)",
        sellPrice: "@natural(1,100)",
      },
      msg: "操作成功",
    });
  }
  if (match.params.type === "join") {
    return Mock.mock({
      code: "0",
      data: {
        list: [
          {
            name: "店名",
            innerValue:"@cname",
          },
          {
            name: "介绍",
            innerValue:"@cparagraph(1)",
          },
          {
            name: "电话",
            innerValue:"@id",
          },
          {
            name: "居住地",
            innerValue: "@cparagraph(1)",
          },
        ],
      },
      msg: "操作成功",
    });
  }
});

export default {
  gourmet,
  dish,
};
