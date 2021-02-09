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