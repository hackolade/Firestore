'use strict';

module.exports = {
	connect: function (connectionInfo, logger, cb, app) {
		cb();
	},

	disconnect: function (connectionInfo, logger, cb, app) {
		cb();
	},

	testConnection: function (connectionInfo, logger, cb, app) {
		cb(true);
	},
};
