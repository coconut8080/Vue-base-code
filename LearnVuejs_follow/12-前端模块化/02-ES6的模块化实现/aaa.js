let name = '小明'
let age = 18
let flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(50, 40));
}

// 1.导出方式一
export default{
  flag, sum
}

