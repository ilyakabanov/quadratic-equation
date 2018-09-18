module.exports = function solveEquation(equation) {
  let equationArr = equation.replace(/(\s|x\^2)/g, '').match(/(-|)\d+/g);;

  let a = Number(equationArr[0]);
  let b = Number(equationArr[1]);
  let c = Number(equationArr[2]);
  let d, x1, x2;

  d = b * b - 4 * a * c;

  x1 = Math.round(( -b - Math.sqrt(d) ) / ( 2 * a ));
  x2 = Math.round(( -b + Math.sqrt(d) ) / ( 2 * a ));

  return [x1, x2].sort((a, b) => a - b);
}
