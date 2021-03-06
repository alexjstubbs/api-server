/*
 * JSON Web Tokens
 */

var config  = require('./keys/config.js'),
	jwt     = require('jsonwebtoken'),
    Promise = require('bluebird');
    

/*
 * issueToken
 * 
 * description: Issues a JSON Web Token via Secret Key
 *
 * @param: payload  : JSON Object Payload (object) 
 * 
 */

exports.issueToken = (payload) => {
    return new Promise((resolve, reject) => {
        var token = jwt.sign(payload, config.ignition_secret);
        resolve(token);
    });
};

/*
 * verifyToken
 * 
 * description: Verifies the JSON Web Token
 *
 * @param: token    : JSON web token input (string) 
 * @param: verified :                      (string) 
 * 
 */

exports.verifyToken = (token, verified) => {
    return new Promise((resolve, reject) => {
        resolve(jwt.verify(token, config.ignition_secret, {}, verified));
    });
};
