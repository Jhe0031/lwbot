module.exports.run = (client, message, args) => {
    const Browser = require('zombie');

    Browser.localhost('example.com', 3000);
    
   describe('User visits signup page', function() {
    
     const browser = new Browser();
    
     before(function(done) {
       browser.visit('/signup', done);
     });
    
     describe('submits form', function() {
    
       before(function(done) {
         browser
           .fill('email',    'zombie@underworld.dead')
           .fill('password', 'eat-the-living')
           .pressButton('Sign Me Up!', done);
       });
    
       it('should be successful', function() {
         browser.assert.success();
       });
    
       it('should see welcome page', function() {
         browser.assert.text('title', 'Welcome To Brains Depot');
       });
     });
   });
}