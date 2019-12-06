//index_spec.js
let String = require("../index")
describe("String Calculator", function() {


    it ("should return zero when '' is passed", function() {
        expect(String('')).toEqual(0);
    });

    it ("should return the number itself when a single number is passed", function() {
        expect(String.add('1')).toEqual(1);
    });

    it ("should return the sum of the number if two are given", function() {
        expect(String.add('1,1')).toEqual(2);
    });

    it("should allow \\n in between the input number string", function() {
        expect(String.add("1\n2,3")).toEqual(6);
    });


 });
    
    
