const isValidTriangle = (a, b, c) => {
  if (!a || !b || !c) {
    return false;
  }
  const con1 = a + b > c;
  const con2 = b + c > a;
  const con3 = c + a > b;
  return con1 && con2 && con3;
};

function areaOfTriangle(a, b, c) {
  if (!isValidTriangle(a, b, c)) throw "inputs cannot form a valid triangle!";
  const s = (a + b + c) / 2;
  // s is semiperimeter of triangle
  return Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
}

console.table([{ input: "3,4,5", output: areaOfTriangle(3, 4, 5) }]);

export default areaOfTriangle;
