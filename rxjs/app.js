import { Observable, Observer } from 'rxjs';

let numbers = [1, 2, 3];
let source = Observable.from(numbers);

// Making the observer a class is usefull when needing to track state
// or need an internal API.
class MyObserver {
    next(value) {
        console.log(`Value: ${value}`);
    }
    error(e) {
        console.log(`Error: ${e}`);
    }
    complete() {
        console.log('Done');
    }
};

source.subscribe(new MyObserver());

// You can also just pass in a function directly into the subscribe
// method. With only next method being required.
source.subscribe(
   value => console.log(`Value: ${value}`),
   e => console.log(`Error: ${e}`),
   () => console.log('Done!')
);

// create method is a lower level API that takes a function with a parameter that is
// a Observer object. So in using create we get more control over how the Observable interacts
// with the Observer. Seems like we are not able to pass only a next method and complete method.
let createSource = Observable.create(observer => {
    for(let n in numbers) {
       observer.next(n); 
    }

    observer.complete();
});

createSource.subscribe(
    value => console.log(`createSource value: ${value}`),
    e => console.log('Something went wrong'),
    () => console.log('createSource is done')
);
