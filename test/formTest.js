"use strict"
var app = require('../server');
var http = require('http');
var Browser = require('zombie');

process.env.NODE_ENV = 'test';

describe('form page', function(){
    before(function(done) {
        //starts headless browser for front-end testing
        this.Browser = new Browser({ site: 'http://localhost:3000' });
    });

    before(function() {
    this.Browser.visit('/');
    });

    it('should show a form page', function(){
        assert.ok(this.browser.success);
    });

    it ('should not accept invalid email');
    it ('should accept submissions');
    it ('should not accept partial submissions');

})