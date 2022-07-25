/*function helloWorld() {
    console.log('Hello World');
    helloWorld();
}

function helloNode() {  
    console.log('Hello Node');
}

helloWorld();
*/

// 화살표 함수로 바꿔보기
let helloWorld = () => {
    console.log('Hello World'); 
    helloWorld();
}

let helloNode = () => console.log('Hello Node');

helloWorld();