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

	/**
	 * data: {
	 *		request: request,
	 *		response: response,
	 *		params: params
	 *	}
	 */
	TestMethod(data) {
		return Promise.resolve("Hello " + data.params + "!");
	}

	TestLogin(data) {
		if (!_.isArray(data.params) || data.params.length < 2) {
			return Promise.reject(false);
		}
		let login = data.params[0], password = data.params[1], origin = "";
		if (data.params.length > 2) {
			origin = data.params[2];
		}
		return auth.authorize({
			user: login,
			password_hash: password,
			address: origin
		})
		.then((res) => {
			data.response.setHeader("Set-Cookie", ["PHPSESSID=" + res.token]);
			return true;
		})
		.catch((err) => {
			console.error(err);
			if ('undefined' !== err.stack) {
				console.error(err.stack);
			}
		});
	}
}

module.exports = XmlRpcV1;