/*
프로미스는 기존 콜백의 문제점(콜백이 꼬리에꼬리를무는 콜백지옥)을 극복.
사용법
1.프로미스 객체를 생성. 내부에 resolve와 reject를 매개변수로 갖는 콜백 함수를 넣음.
2.이렇게 만든 프로미스 변수에는 then과 catch메서드를 붙일 수 있으며 프로미스 내부에서
    resolve가 호출되면 then이, reject가 호출되면 catch가 실행됨.
*/
const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    } else {
        reject('실패');
    }
});
//다른코드가 들어갈수 있음
promise
    .then((message) => {
        console.log(message); //성공 한 경우 실행
    })
    .catch((error) => {
        console.log(error); // 실패 한 경우 실행
    })
    .finally(() => {
        console.log('무조건'); // 끝나고 무조건 실행
    });

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error);
    });