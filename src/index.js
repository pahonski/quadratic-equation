module.exports = function solveEquation(equation) {
  // your implementation
    let result = [];

    let reg1 = /(-?\d+)\s\*\sx\^2/;
    let reg2 = /(([+-])\s\d+)\s\*\sx/;
    let reg3 = /(([+-])\s\d+)$/;

    //let string = '2 * x^2 - 10 * x + 12';

    let a = parseInt(equation.match(reg1)[1]);
    let b = parseInt(equation.match(reg2)[1].replace(/\s+/g,''));
    let c = parseInt(equation.match(reg3)[1].replace(/\s+/g,''));

    let desc = Math.pow(b,2) - (4*a*c);


    console.log('a', a, 'b', b, 'c', c);
    console.log('desc', desc, 'Math.sqrt(desc)', Math.sqrt(desc));


    let x2 = Math.round((-b - Math.sqrt(desc))/(2*a));
    let x1 = Math.round((-b + Math.sqrt(desc))/(2*a));

    result.push(x1, x2);

    result.sort(function compareFunction(a, b) {
        return a - b;
    });

    return result;
};
