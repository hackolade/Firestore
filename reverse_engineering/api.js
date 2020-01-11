'use strict';

module.exports = {
	connect: function(connectionInfo, cb){
		cb()
	},

	disconnect: function(connectionInfo, cb){
		cb()
	},

	testConnection: function(connectionInfo, cb){
		cb(true);
	}
};