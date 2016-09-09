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

describe('myObjFunc', function() {
    it('should return name', function() {
        var name = myObjFunc({ name: 'John' });

        expect(name).to.equal('John');
    });
});

describe('myASyncFunction', function() {
    it('should return 9', function(done) {
        var tot = myASyncFunction(100, 3);

        setTimeout(function() {
            expect(tot).to.equal(9);
            done();
        }, 1001); 
            
        
        
    });
});