/*
불러올 모듈의 경로를 require함수 안에 적는다.(js나 json같은 확장자는 생략 가능.)
*/
const {odd, even} = require('./3.3var');

function checkOddOrEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;