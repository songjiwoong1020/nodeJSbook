var Human = function(type){
    this.type = type || 'human';
};

Human.isHuman = function(human){
    return human instanceof Human;
}

Human.prototype.breathe = function(){
    alert(['h-a-a-a-m']);
};

var zero = function(type, firstName, lastName){
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

zero.prototype = Object.create(Human.prototype);
zero.prototype.constructor = Zero;
Zero.prototype.sayName = function(){
    alert(this.firstName + '' + this.lastName);
};

var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero);