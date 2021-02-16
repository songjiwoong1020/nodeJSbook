/*
객체의 메서드에 함수를 연결할때 콜론(:)과 function을 붙이지 않아도 됨.(ex)sayJS)
속성명과 변수명이 동일한 경우 한 번만 써도 됨.(ex)sayNode)
객체의 속성명을 동적으로 생성 할 수 있음. 그 이전에는 객체리터럴 밖에서 해야했음.(ex)[es + 6])
*/
var sayNode = function(){
    console.log('Node');
};
var es = 'ES';

var oldObject = {
    sayJS : function(){
        console.log('JS');
    },
    sayNode : sayNode,
};
oldObject[es + 6] = 'Fantastic'
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);


const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6] : 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);