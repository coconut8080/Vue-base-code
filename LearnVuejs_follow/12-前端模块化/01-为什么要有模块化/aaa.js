console.log('小明的代码块');

let moduleA = (function () {
  // 导出的对象
  let obj = {}

  // 小明
  let name = '小明';
  let age = 22;

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true;

  if (flag) {
    console.log(sum(20, 40));
  }

  obj.flag = flag;
  obj.sum = sum;

  return obj
})()
