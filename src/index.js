module.exports = function solveEquation(equation) {
  const equationArr = equation.replace(/(\s|x\^2)/g, '').match(/(-|)\d+/g);

  const a = Number(equationArr[0]);
  const b = Number(equationArr[1]);
  const c = Number(equationArr[2]);
  let d, x1, x2;

  d = b * b - 4 * a * c;

  x1 = Math.round(( -b - Math.sqrt(d) ) / ( 2 * a ));
  x2 = Math.round(( -b + Math.sqrt(d) ) / ( 2 * a ));

  return [x1, x2].sort((a, b) => a - b);
}
