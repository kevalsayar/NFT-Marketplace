/*
Project : TheNftAgency
FileName : adminauth.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to check whether user is authorized or not to use Admin API.
*/

let jwt = require('jsonwebtoken');
const {SECRET_KEY} = require("../env")

let adminauth = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; 
  if(token == null) {
    return res.json({
        status: false,
        message: 'Auth token is not supplied'
      }); 
  }
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
        if(decoded.role != 1) {
            return res.json({
                status: false,
                message: "Access denied. you didn't have permission to access this end point"
              });
        }
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
};

module.exports = adminauth