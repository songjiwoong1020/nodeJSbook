const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    } else {
        reject('실패');
    }
});