/*
프로미스가 콜백지옥 문제를 해결했지만 then과 catch가 계속 반복되므로 코드가 깊어지진 않지만 여전히 코드가 길어짐.
async/await로 프로미스를 사용한 코드를 한 번 더 깔끔하게 줄여줄수 있음.
사용법
1.일반 함수 선언부(function)대신 async function을 사용, 프로미스 앞에 await를 붙임.
2.함수는 프로미스가 resolve가 될때까지 기다림.
*/
function findAndSaveUser(Users){
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => {
        return Users.findOne({ gender : 'm' });
    })
    .then((user) => {
        //생략
    })
    .catch(err => {
        console.error(err);
    });
}

async function findAndSaveUser2(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender : 'm' });
    //생략
}