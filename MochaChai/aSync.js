function majs(fn, ln, cb) {
    var name = fn + ln;
    cb(name);
}

function log(name) {
    console.log(name);
}

majs('Sebbe', ' Larsson', log); 

(function fizzBuzz() {
    // FizzBuzz function
    for(var i = 0; i < 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} FIZZBUZZ`);
        }
        if(i % 3 === 0) {
            console.log('FIZZ' + i);
        }
        if(i % 5 === 0) {
            console.log('BUZZ' + i);
        }
    }
})();

// fizzBuzz();
function hello() {
    console.log('Hello World')
    return 'My oh My!';
}

function fetcha() {
    fetch('http://echo.jsontest.com/one/two/three/four', {
        method: 'get'
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(j) {
        console.log(j);
    })
    .catch(function(err) {
        console.log(err);
    })
}

fetcha();