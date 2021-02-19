let a = [1,2,[1,2,3,4,5],3,4,5];

console.log('a', a);

let b = a.slice();
// let b = JSON.parse(JSON.stringify(a));

console.log('b', b);

b[1] = 'X';

console.log('a', a);

console.log('b', b);

b[2][2] = 'V';

console.log(b[2][2])