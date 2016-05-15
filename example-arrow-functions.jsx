/*
var names = ['mina', 'lena', 'yoojin', 'niko'];

names.forEach(function(name) {
    console.log('forEach ', name);
});

names.forEach((name) => {
    console.log('=>', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('relja'));

var person = {
    name: 'Relja',
    greet: function() {
        names.forEach((name) => {
            console.log(this.name + " says hi to " + name)
        });
    }
};

person.greet();

var objOne = {
    author: 'Relja',
    location: 'Seattle'
};

var objTwo = {
    age: 42,
    ...objOne
};

console.log(objTwo);
*/
function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
};

var addExpression = (a, b) => (a + b);

console.log(addStatement(1, 3));
console.log(addExpression(9, 0));