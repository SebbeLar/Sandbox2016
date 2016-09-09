function helloWorld() {
    return 'Hello World';
};

function myFunction(a, b) {
    if(a > b) {
        return a - b;
    }
    return a + b;
};

function myASyncFunction(ms, a) {
    setTimeout(function() {
        return (a * a);
    }, ms);
};

function myObjFunc(obj) {
    return obj.name;
}

const test = (bajs) => console.log(bajs);

test('HEJ!'); 