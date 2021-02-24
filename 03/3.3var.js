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

/*
3.4.5 module, exports, require
module객체 말고 exports객체로도 모듈생성 가능.
동일하게 동작하는 이유는 module.exports와 exports가 같은 객체를 참조하기 때문임.
*/
// exports.odd = '홀수입니다';
// exports.even = '짝수입니다';