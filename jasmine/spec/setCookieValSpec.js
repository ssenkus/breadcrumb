describe("setCookieVal", function() {
    
    
    $.cookie.json = true;
    
    it("should set a JSON string as the 'bcHistory' cookie value", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');
       
        setCookieVal('test string');
       
        expect($.cookie('bcHistory')).toBe('"test string"');
    });
    
    it("should set a JSON object as the 'bcHistory' cookie value", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');
       
        
        var testObj = {
            test: 'test value'
            
        };
        setCookieVal(testObj);
       
        expect($.cookie('bcHistory')).toBe('{"test":"test value"}');
    });    
    
});