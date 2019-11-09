// ██████╗ ███████╗███████╗██████╗  ██████╗ ███╗   ██╗███████╗███████╗
// ██╔══██╗██╔════╝██╔════╝██╔══██╗██╔═══██╗████╗  ██║██╔════╝██╔════╝
// ██████╔╝█████╗  ███████╗██████╔╝██║   ██║██╔██╗ ██║███████╗█████╗
// ██╔══██╗██╔══╝  ╚════██║██╔═══╝ ██║   ██║██║╚██╗██║╚════██║██╔══╝
// ██║  ██║███████╗███████║██║     ╚██████╔╝██║ ╚████║███████║███████╗
// ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝

/**
 * File: index.js
 * Author: Tommy Gingras
 * Date: 2019-06-16
 * License: All rights reserved Studio Webux S.E.N.C 2015-Present
 */

"use strict";

/**
 * return success (200)
 * @param {Object} body The body to return to the user, Mandatory
 * @param {String} msg The message for the user, optional
 * @param {String} devMsg The development message for the developer, optional
 * @return {Object} The response object
 */
function success(body, msg, devMsg) {
  this.status(200);
  this.json({
    message: msg || "",
    devMessage: devMsg || "",
    success: true,
    code: 200,
    body
  });
}

/**
 * return created (201)
 * @param {Object} body The body to return to the user, Mandatory
 * @param {String} msg The message for the user, optional
 * @param {String} devMsg The development message for the developer, optional
 * @return {Object} The response object
 */
function created(body, msg, devMsg) {
  this.status(201);
  this.json({
    message: msg || "",
    devMessage: devMsg || "",
    success: true,
    code: 201,
    body
  });
}

/**
 * return updated (200)
 * @param {Object} body The body to return to the user, Mandatory
 * @param {String} msg The message for the user, optional
 * @param {String} devMsg The development message for the developer, optional
 * @return {Object} The response object
 */
function updated(body, msg, devMsg) {
  this.status(200);
  this.json({
    message: msg || "",
    devMessage: devMsg || "",
    success: true,
    code: 200,
    body
  });
}

/**
 * return deleted (204)
 * @param {String} id The id of the deleted resource to return to the user, Mandatory
 * @param {String} msg The message for the user, optional
 * @param {String} devMsg The development message for the developer, optional
 * @return {Object} The response object
 */
function deleted(id, msg, devMsg) {
  this.status(204);
  this.json({
    message: msg || "",
    devMessage: devMsg || "",
    success: true,
    code: 204,
    id: id
  });
}

/**
 * return forbidden (403)
 * @param {String} devMsg The development message for the developer, optional
 * @param {String} msg The message for the user, optional
 * @return {Object} The response object
 */
function forbidden(devMsg, msg) {
  this.status(403);
  this.json({
    message: msg || "You are not authorize to access this resource.",
    devMessage: devMsg || "An authentication is required",
    success: false,
    code: 403
  });
}

/**
 * return bad request (400)
 * @param {String} devMsg The development message for the developer, optional
 * @param {String} msg The message for the user, optional
 * @return {Object} The response object
 */
function badRequest(devMsg, msg) {
  this.status(400);
  this.json({
    message:
      msg || "The request is malformed, please refer to the documentation.",
    devMessage: devMsg || "",
    success: false,
    code: 400
  });
}

/**
 * return server error (500)
 * @param {String} devMsg The development message for the developer, optional
 * @param {String} msg The message for the user, optional
 * @return {Object} The response object
 */
function serverError(devMsg, msg) {
  this.status(500);
  this.json({
    message: msg || "An internal error occur, please try again later.",
    devMessage: devMsg || "Hum ... ",
    success: false,
    code: 500
  });
}

/**
 * return not found (404)
 * @param {String} devMsg The development message for the developer, optional
 * @param {String} msg The message for the user, optional
 * @return {Object} The response object
 */
function notFound(devMsg, msg) {
  this.status(404);
  this.json({
    message: msg || "The resource is not available.",
    devMessage: devMsg || "Resource not found",
    success: false,
    code: 404
  });
}

/**
 * return custom (xxx)
 * @param {Number} code The code of the HTTP status, Mandatory
 * @param {Object} object it contains the response, Mandatory
 * @return {Object} The response object
 */
function custom(code, object) {
  this.status(code);
  this.json(object);
}

/**
 * return unprocessable (422)
 * @param {String} devMsg The development message for the developer, optional
 * @param {String} msg The message for the user, optional
 * @return {Object} The response object
 */
function unprocessable(devMsg, msg) {
  this.status(422);
  this.json({
    message: msg || "The resource is not compliant with the API.",
    devMessage: devMsg || "Resource unprocessable",
    success: false,
    code: 422
  });
}

/**
 * return unauthorized (401)
 * @param {String} devMsg The development message for the developer, optional
 * @param {String} msg The message for the user, optional
 * @return {Object} The response object
 */
function unauthorized(devMsg, msg) {
  this.status(401);
  this.json({
    message:
      msg ||
      "You are not authorized to access this resource, please ask an administrator to get the proper rights.",
    devMessage:
      devMsg ||
      "the user is logged in but he doesn't have the permission to do an action",
    success: false,
    code: 401
  });
}

/**
 * map the custom responses with express
 * @param {Function} express The express variable, Mandatory
 * @return {VoidFunction} return nothing.
 */
function hook(express) {
  express.response["success"] = success;
  express.response["created"] = created;
  express.response["updated"] = updated;
  express.response["deleted"] = deleted;
  express.response["forbidden"] = forbidden;
  express.response["badRequest"] = badRequest;
  express.response["serverError"] = serverError;
  express.response["notFound"] = notFound;
  express.response["unauthorized"] = unauthorized;
  express.response["unprocessable"] = unprocessable;
  express.response["custom"] = custom;
}

module.exports = hook;
