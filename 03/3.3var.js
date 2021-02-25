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

/*
exports 객체 사용시 주의사항
module.exports와의 참조 관계가 깨지지 않도록 주의 해야한다.
module.exports에는 어떤 값이든 대입되도 되지만 exports에는 반드시 객체처럼 속성과 속성명을 대입해야한다.(3.3func.js처럼 함수를 대입한경우 exports로 사용불가)
exports에 다른 값을 대입하면 객체의 참조관계가 끊겨 더이상 모듈로 기능하지 않게된다.
한 모듈에 exports와 module.exports를 동시에 사용하지 않는게 좋다.
*/