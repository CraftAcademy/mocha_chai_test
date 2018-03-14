describe('FizzBuzz', function () {
    var game;

    beforeEach(function () {
        game = new FizzBuzz();
    });

    it('returns "WTF" if number is negative', function () {
        expect(game.check(-10)).to.equal('WTF?');
    });

    it('returns "WTF?" if object is not a number', function () {
        expect(game.check('Thomas')).to.equal('WTF?');
    });

    it('returns "fizz" if number is divisible by 3', function () {
        expect(game.check(3)).to.equal('fizz');
    });

    it('returns "buzz" if number is divisible by 5', function () {
        expect(game.check(5)).to.equal('buzz');
    });

    it('returns "fizz-buzz" if number is divisible by 15', function () {
        expect(game.check(15)).to.equal('fizz-buzz');
    });

    it('returns number if number is NOT divisible by 3', function () {
        expect(game.check(4)).to.equal(4);
    });


});