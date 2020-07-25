import Mock from "mockjs";

const staff = Mock.mock(/\/test.com\/staff/, "post", (options) => {
  console.log(options);
  const { body } = options;
  console.log(JSON.parse(body));
  const { match } = JSON.parse(body);
  return Mock.mock({
    code: "0",
    data: {
      "list|4": [
        {
          "id|+1": 1,
          name: "@cname",
          introduce: "@cparagraph(1)",
          tel: "@id",
          live: "@cparagraph(1)",
          identity: match.params.identity,
        },
      ],
    },
    msg: "操作成功",
  });
});
export default {
  staff,
};
