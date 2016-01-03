'use strict'
let Promise = require('bluebird');
let _ = require("lodash");
let qs = require("querystring");
let request = Promise.promisify(require("request"));
let emitter = require("global-queue");
let auth = require(_base + "/Auth")

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

	TestLogin(params) {
		if (!_.isArray(params) || params.length < 2) {
			return Promise.reject(false);
		}
		let login = params[0], password = params[1], origin = "";
		if (params.length > 2) {
			origin = params[2];
		}
		console.log('TestLogin succeed:', params);
		return Promise.resolve(true);
	}
}

module.exports = XmlRpcV1;