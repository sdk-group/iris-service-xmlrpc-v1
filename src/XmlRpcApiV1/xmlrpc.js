'use strict'
let Promise = require('bluebird');
let _ = require("lodash");
let qs = require("querystring");
let request = Promise.promisify(require("request"));
let emitter = require("global-queue");

//REPLICATOR

class XmlRpcV1 {
	constructor() {
		this.emitter = emitter;
	}

	init(config) {
	}

	//API

	TestMethod(name) {
		return Promise.resolve("Hello " + name + "!");
	}
}

module.exports = XmlRpcV1;