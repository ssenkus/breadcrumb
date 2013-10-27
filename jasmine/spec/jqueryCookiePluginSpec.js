describe("jqueryCookie", function() {
    it("should set an object as a cookie value as a JSON string", function() {

        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');
        
        //$.cookie.raw = true;
        $.cookie.json = true;
        var testObj = {
            "test": "testValue"
        };
        
        console.log($.cookie('bcCookie'));
        
        $.cookie('bcCookie', testObj);
        //expect($.cookie('bcCookie')).toEqual("{\"test\":\"testValue\"}");
        expect($.cookie('bcCookie')).toEqual(testObj);
    });
    
    it("should set an object as a cookie value as a raw string", function() {

        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');
        
        $.cookie.raw = true;
        //$.cookie.json = true;
        var testObj = {
            "test": "testValue"
        };
        
        console.log($.cookie('bcCookie'));
        
        $.cookie('bcCookie', testObj);
        expect($.cookie('bcCookie')).toEqual("{\"test\":\"testValue\"}");
        
    });    
    
});


