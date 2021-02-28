/*
require는 함수이고, 함수는 객체이므로 require는 객체로서 몇가지 속성을 가지고있다.
*/
console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요';

require('./3.3var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');//노드 실행시 첫 모듈을 가르킴.
console.log(require.main === module);
console.log(require.main.filename);