const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));
let answer =[];
solveQuadraticEquation(a,b,c);
if (isNaN(answer[0])){
    document.write('For your coefficient: ' + a + ', ' + b + ', ' + c + ';<br>'
          +'Aswer is: '+answer[0] +' '+answer[1] );
} else {
    document.write('For your coefficient: ' + a + ', ' + b + ', ' + c + ';<br>'
          +'Aswer is: '+answer[0] +' and '+answer[1] );
}

function solveQuadraticEquation (a,b,c) {
// if one of coefficient = 0  
    if (a === 0 && b === 0 && c === 0){
        answer[0]=answer[1]=0;
        return;
    }
    if (a === 0 || b === 0 || c === 0) {
        if (a === 0){
            const x = (c * -1) / b;
            answer[0] = answer[1] =x;
            return;
        } else if (b === 0) {
            if (-c/a < 0){
              answer[0]='that equation has no real roots';
              answer[1]='';
                return;
            }
            const x = Math.sqrt((c*-1) / a);
           answer[0] = answer[1] =x;
                return;
        } else if (c === 0) {
            const x =(b*-1) / a;
         answer[0] = answer[1] =x;
            return;
        }
    }else {
// Use Discriminant
        const d = discriminant(a,b,c);
        if (d === 0) {
            const x = (b * -1) / (2 * a);
            answer[0] = answer[1] = x;
            return;
        } else if (d > 0) {
            const x1 = ((b * -1) + Math.sqrt(d)) / (2 *a);
            const x2 = ((b * -1) - Math.sqrt(d)) / (2 *a);
            answer[0]=x1;
              answer[1]=x2;
             return;
        } 
            answer[0]='Discriminant < 0, You need to use a formula with complex numbers.';
            answer[1]='<a href="https://en.wikipedia.org/wiki/Quadratic_equation">Quadratic equation</a>';
        return;
        
    }
}
function discriminant (a,b,c) {
    const d = (b*b) - 4 * (a*c);
    return d;
}