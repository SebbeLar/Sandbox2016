//var test = require('./function.js');  

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    var str = test();
    expect(str).toBe('Hello World');
  });
});