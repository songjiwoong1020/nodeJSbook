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

var relationship1 = {
    name : 'jiwoong',
    friends : ['jiwoong1', 'jiwoong2', 'jiwoong3'],
    logFriends : function(){
        var that = this;
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