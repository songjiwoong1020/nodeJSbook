/*
process객체는 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다.
*/

console.log(process.version)//설치된 노드의 버전
console.log(process.arch)//프로세서 아키택처 정보
console.log(process.platform)//운영체제 플랫폼
console.log(process.pid)//현재 프로세서의 아이디. 프로세스 여러개 가질때 구분 가능하게 해줌
console.log(process.uptime())//프로세스가 시작 된 후 흐른 시간.(초단위)
console.log(process.execPath)//노드의 경로
console.log(process.cwd())//현재 프로세스가 실행되는 위치
console.log(process.cpuUsage())//현재 cpu 사용량
