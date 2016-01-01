'use strict'
let Promise = require('bluebird');
let _ = require("lodash");
let qs = require("querystring");
let request = Promise.promisify(require("request"));
let emitter = require("global-queue");

//REPLICATOR

class Replicator {
	constructor() {
		this.emitter = emitter;
	}

	init(config) {
	}

	//API

	TestMethod() {
		return Promise.resolve("Hello world!");
	}
}

module.exports = Replicator;