//var expect = chai.expect;


describe('basic functions', function () {
    var sum = 2 + 2;

    it('adds 2 + 2', function () {
        expect(sum).to.equal(4);
    });

    it('is a number', function () {
        expect(sum).to.be.a('number');
    });


    describe('Whatever', function () {

        it("should have a default name", function() {
            var cow = new Person();
            expect(cow.name).to.equal("Guy");
        });


        it("should set a name if provided", function() {
            var object = new Person("Thomas");
            expect(object.name).to.equal("Thomas");
        });

        it("should throw if no target is passed in", function () {
            expect(function () {
                (new Person()).greets();
            }).to.throw(Error);
        });
    })
})
