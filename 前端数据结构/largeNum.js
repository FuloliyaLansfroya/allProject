function addLargeNum(num1, num2) {
  let a = String.prototype.split.call(num1, "");
  let b = String.prototype.split.call(num2, "");
  let res = [];
  let addOrder = 0;
  while (a.length || b.length) {
    let item1 = parseInt(a.pop()) | 0;
    let item2 = parseInt(b.pop()) | 0;
    let temp = item1 + item2 + addOrder;
    if (temp > 9) {
      addOrder = 1;
      temp %= 10;
    } else {
      addOrder = 0;
    }
    res.unshift(temp);
  }
  if (addOrder) res.unshift(1);
  return res.join("");
}
