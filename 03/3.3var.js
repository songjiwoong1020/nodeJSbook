/*
노드는 모듈을 만들 수 있다는 점에서 브라우저의 자바스크립트와 다르다.
모듈이란 특정한 기능을 하는 함수나 변수들의 집합을 말함.
*/
const odd = '홀수입니다';
const even = '짝수입니다';

module.exports = {
    odd,
    even
};

// exports.odd = '홀수입니다';
// exports.even = '짝수입니다';
// 이것도 가능함.