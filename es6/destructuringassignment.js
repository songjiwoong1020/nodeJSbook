var candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy : function(){
        this.status.count --;
        return this.status.count;
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const candyMachine2 = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy(){
        this.status.count --;
        return this.status.count;
    },
};
const {getCandy, status : {count}} = candyMachine2;