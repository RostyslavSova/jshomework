const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));
solveQuadraticEquation(a,b,c)();



function solveQuadraticEquation (a,b,c) {
// if one of coefficient = 0  
    if (a === 0 || b === 0 || c === 0) {
        if (a === 0){
            const x = (c * -1) / b;
            document.write('For your coefficient: '+a+', '+b+', '+c+'<br>'
            +'Aswer is: '+'X= ' + x);
            return;
        } else if (b === 0) {
            if (-c/a < 0){
                document.write('For your coefficient: ' + a + ', ' + b + ', ' + c + '<br>'
                +'Aswer is: '+'that equation has no real roots');
                return;
            }
            const x = Math.sqrt((c*-1) / a);
            document.write('For your coefficient: ' + a + ', ' + b + ', ' + c + '<br>'
                +'Aswer is: '+'X1 and X2 ' + x);
                return;
        } else if (c === 0) {
            const x =(b*-1) / a;
            document.write('For your coefficient: ' + a + ', ' + b + ', ' + c + '<br>'
              +'Aswer is: '+'X= ' + x);
            return;
        }
    }else {
// Use Discriminant
        const d = discriminant(a,b,c);
        if (d === 0) {
            const x = (b * -1) / (2 * a);
            document.write('For your coefficient: ' + a + ', ' + b + ', ' + c + '<br>'
                +'Aswer is: '+'X1 and X2= ' + x);
            return;
        } else if (d > 0) {
            const x1 = ((b * -1) + Math.sqrt(d)) / (2 *a);
            const x2 = ((b * -1) - Math.sqrt(d)) / (2 *a);
            document.write('For your coefficient: ' + a + ', ' + b + ', ' + c + '<br>'
              +'Aswer is: '+'X1= ' + x1 +'; X2= '+ x2);
             return;
        } 
        document.write('For your coefficient: ' + a + ', ' + b + ', ' + c + '<br>'
          +'Aswer is: '+'Discriminant < 0, You need to use a formula with complex numbers.' + '<a href="https://en.wikipedia.org/wiki/Quadratic_equation">Quadratic equation</a>');
        return;
        
    }
}
function discriminant (a,b,c) {
    const d = (b*b) - 4 * (a*c);
    return d;
}