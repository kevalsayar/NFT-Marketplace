/*
Project : TheNftAgency
FileName : auth.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to check whether user is authorized or not to use private API.
*/

let jwt = require('jsonwebtoken');

const {SECRET_KEY} = require("../env")

let optionalauth = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; 

  if(token != null) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            status: false,
            message: 'Token is not valid'
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        status: false,
        message: 'Auth token is not supplied'
      });
    }
  } else {
    req.decoded = {
      user_id : null
    }
    next();
  }
};

module.exports = optionalauth