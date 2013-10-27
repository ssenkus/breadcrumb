describe("jqueryCookie", function() {
    it("should set an object as a cookie value as a JSON string", function() {
        $.cookie('bcCooke', {"test":"testValue"});
        expect($.cookie('bcCookie')).toEqual({"test":"testValue"});
    });
});