function sum() {
  let fixedNumber = 0;
  return (num) => (fixedNumber += num);
}

const result = sum();
console.log("result:", result(3));
console.log("result:", result(5));
console.log("result:", result(20));
console.log("result:", result(33));
console.log("result:", result(45));
