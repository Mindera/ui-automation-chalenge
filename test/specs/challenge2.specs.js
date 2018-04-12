var expect = require('chai').expect;
var challenge2Page = require('../pageObjects/challenge2.page');

describe('Mindera QA Graduate Challenge 2:',function() {

    beforeEach(function() {
        challenge2Page.open();
    });

    it('Shoot all the bubbles that showed up after waiting 5 seconds', function () {
        browser.pause(5000);
        /** Insert the code here */
    });
});