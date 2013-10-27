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

describe("checkPage", function() {
    it("should return true if the page contains the # element", function() {

        // == SETUP == //
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');
       
        expect($('#home')).toHaveText('home page');
    });


});