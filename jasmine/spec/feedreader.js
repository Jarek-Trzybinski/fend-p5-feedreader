/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    // test suite 'RSS Feeds'
    describe('RSS Feeds', function() {
        // Test make sure that the allFeeds variable has been defined and that it is not empty.
        it('allFeeds variable are defined and not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
        it('feed URL is defined and URL not empty', function(){
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // Test loops through each feed  in the allFeeds object and ensures it has a name defined and that the name is not empty.
        it('feed name is defined and name is not empty', function(){
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });

    // test suite "The menu"
    describe('The menu', function() {

        // Test ensures the menu element is  hidden by default. 
        it('menu element is hidden by default', function(){
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });

        // Test ensures the menu changes visibility when the menu icon is clicked. 
         it('menu changes visibility when menu clicked', function() {
             $('a.menu-icon-link').trigger('click');
             expect(document.body.classList.contains('menu-hidden')).toBe(false);
             $('a.menu-icon-link').trigger('click');
             expect(document.body.classList.contains('menu-hidden')).toBe(true);
         });
        });

    // test suite "Initial Entries"
    describe('Initial Entries', function(){
        // Test ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
         beforeEach(function(done){
             loadFeed(0, done);
        });
        
        it('Initial Entries', function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });
    
    // test suite "New Feed Selection" 
    describe('New Feed Selection', function(){
        // Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        let firstFeedTest;
        let secondFeedTest;
        beforeEach(function(done){
            loadFeed(0, function(){
                firstFeedTest = $('.feed').html();
                loadFeed(1, function(){
                    secondFeedTest = $('.feed').html();
                    done();
                });
            });
        });

        it('content changes', function(done){
            expect(firstFeedTest===secondFeedTest).toBe(false);
            done();
        });
    });
}());