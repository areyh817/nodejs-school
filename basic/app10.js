function add(x, y){
    return x + y;
}
console.log(add(1, 1))

const add1 = function(x, y){
    return x + y;
}
console.log(add1(12, 1));

const add2 = (x, y) => {
    return x + y;
}
console.log(add2(10, 10));

const add3 = (x, y) => x + y;
console.log(add3(1, 5));

const add4 = (x, y) => (x + y);
console.log(add4(10, 5));
