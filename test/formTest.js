"use strict"
var app = require('../server');
var http = require('http');
var Browser = require('zombie');

process.env.NODE_ENV = 'test';

Browser.localhost('cap app', 3000);

describe('form page', function(){
    const browser = new Browser();
    
    before(function(done) {
        browser.visit(done);
    });

    describe('should show a form page', function(){
        it('should be succesful', function(){
            browser.assert.success();
        })
    });
    it ('should not accept invalid email');
    it ('should accept submissions');
    it ('should not accept partial submissions');
})