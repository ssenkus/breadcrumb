/*function checkPage() {
 // are breadcrumbs on this page?
 var bcWrapper = $('#c4-breadcrumbs-id10T');
 // is this a product page? does page have breadcrumb wrapper?            
 var bcs = $('.breadcrumbs');
 if (bcWrapper.length > 0 || bcs.length > 0) {
 console.log('breadcrumbs are present!');
 bcPresence = true;
 } else {
 console.log('breadcrumbs are not present!');
 bcPresence = false;
 }
 return bcPresence;
 }*/
//#c4-breadcrumbs-id10T
describe("Page Setups", function() {
    it("container element is not on the home page", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');
       
        expect($('#c4-breadcrumbs-id10T')).not.toExist();
    });
    
    it("container element is on the category page", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('baby-layette.html');
       
        expect($('#c4-breadcrumbs-id10T')).toExist();
    });    
    
    it("container element is on the product page", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('simply-stunning.html');
       
        expect($('#c4-breadcrumbs-id10T')).toExist();
    });

});


describe("checkPage", function() {
    
    it("should return false on the product page", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');        

        expect(checkPage()).toBe(false);
    });     
    
    
    it("should return true on the category page", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('baby-layette.html');        

        expect(checkPage()).toBe(true);
    });     
    
    it("should return true on the product page", function() {
        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('simply-stunning.html');        

        expect(checkPage()).toBe(true);
    }); 
});
    