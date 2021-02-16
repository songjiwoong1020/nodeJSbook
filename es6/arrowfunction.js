/*
화살표 함수는 function대신 =>기호로 함수를 선언, 변수에 대입하면 재사용 가능.
함수 내부에 return문밖에 없는경우 중괄호 대신 바로 return할 식을 적어도 됨(ex)add3, add4)
매개변수가 한개면 소괄호로 묶지 않아도 됨.(ex)not2)
*/
function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x){
    return !x;
}

const not2 = x => !x;

/*
기존 function과 다른점은 this 바인드 방식.

*/

var relationship1 = {
    name : 'jiwoong',
    friends : ['jiwoong1', 'jiwoong2', 'jiwoong3'],
    logFriends : function(){
        var that = this; //relationship1을 가르키는 this를 that에 저장
        this.friends.forEach(function (friend){
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name : 'jiwoong',
    friends : ['jiwoong1', 'jiwoong2', 'jiwoong3'],
    logFriends(){
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();