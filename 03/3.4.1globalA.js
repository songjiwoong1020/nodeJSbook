/*
노드의 내장객체 global
- 브라우저의 window와 같은 전역 객체. => 모든 파일에서 접근가능.
또한 window.open 메서드를 그냥 open으로 호출 할 수 있는거처럼 global도 생략 가능.(require도 global.require임.)
*/
module.exports = () => global.message;