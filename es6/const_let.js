/*
var의 경우 함수 스코프를 가지므로 if문 블록과 관계없이 접근 가능.
하지만 const와 let의 경우 블록 스코프를 가지므로 블록 밖에서는 접근 불가능. => 호이스팅같은 문제가 해결되었다?
*/
if(true){
    var x = 3;
}
console.log(x); //3


if(true){
    const y = 3;
}
console.log(y); // Uncaught ReferenceError : y is not defined

/*
const는 한 번 값을 할당하면 다른값을 할당 할 수 없음. 또한 초기화 할때 값을 할당하지 않으면 에러발생.
 */
const a = 0;
a = 1 ;

let b = 0;
b = 1;

const c;
