"use strict"
var app = require('../server');
var http = require('http');
var Browser = require('zombie');

process.env.NODE_ENV = 'test';

describe('form page', function(){
    it('should show a form page', function(){
    });
    it ('should not accept invalid email');
    it ('should accept submissions');
    it ('should not accept partial submissions');
})