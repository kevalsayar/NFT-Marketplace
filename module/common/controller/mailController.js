/*
Project : TheNftAgency
FileName : mailController.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to send email notificaiton to user
*/
var nodemailer = require("nodemailer");
var handlebars = require("handlebars");
var fs = require("fs");
const {
  MAIL_TYPE,
  MAIL_HOST,
  MAIL_SECURE,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASS,
  SITE_NAME,
  SITE_LINK,
} = require("../../../env");
var path = require("path");

/**
 *   This is the function handle html render
 */
var readFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      throw err;
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

/**
 * This is the function which used to send email
 */
exports.mail = function (data, receiptant, subject, sender, callback) {
  if (MAIL_TYPE == "") {
    callback(null, "success");
    return;
  }
  var filePath = __basedir;
  readFile(filePath + "/templates/mail/index.html", async function (err, html) {
    var template = handlebars.compile(html);
    data.sitename = SITE_NAME;
    data.maillink = SITE_LINK;
    var htmlToSend = template(data);
    try {
      let transporter = nodemailer.createTransport({
        host: MAIL_HOST,
        port: MAIL_PORT,
        auth: {
          user: MAIL_USER, // generated ethereal user
          pass: MAIL_PASS, // generated ethereal password
        },
      });
      await transporter.sendMail({
        from: sender, // sender address
        to: receiptant, // list of receivers
        subject: subject, // Subject line
        html: htmlToSend, // html body
      });
    } catch (error) {
      callback("mail error", "");
    }
  });
};
