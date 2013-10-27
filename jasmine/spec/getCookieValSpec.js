describe("getCookieVal", function() {

    it("should return a string from the 'bcHistory' cookie", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');

        $.cookie.json = true;
        $.cookie.raw = false;

        setCookieVal('test string');
        var cookieValue = getCookieVal();
        expect(cookieValue).toBe('test string');
    });

    it("should return an object from the 'bcHistory' cookie", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');

        $.cookie.json = true;
        $.cookie.raw = false;

        var testObj = {
            test: 'test value'
        };
        setCookieVal(testObj);
        var cookieValue = getCookieVal();

        expect(cookieValue).toEqual(testObj);
    });

});