var expect = chai.expect;

describe('helloWorld function', function() {
    it('should return \'Hello World\'', function() {
        var str = helloWorld();

        expect(str).to.equal('Hello World');
        expect(str).to.have.length(11);
    });
});

describe('myFunction', function() {
    it('should subtract the numbers', function() {
        var tot = myFunction(8,4);

        expect(tot).to.equal(4);
    });
    it('should add the numbers', function() {
        var tot = myFunction(4,8);

        expect(tot).to.equal(12);
    });
});

// describe('myASyncFunction', function() {
//     it('should return 9', function() {
//         var tot = myASyncFunction(1000, 3);

//         expect(tot).to.equal(9);
//     });
// });