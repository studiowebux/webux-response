const express = require("express");
const response = require("../index");

test("It should attach all the custom responses to express", () => {
  response(express);

  expect(express.response).toHaveProperty("success");
  expect(express.response).toHaveProperty("created");
  expect(express.response).toHaveProperty("updated");
  expect(express.response).toHaveProperty("deleted");
  expect(express.response).toHaveProperty("forbidden");
  expect(express.response).toHaveProperty("badRequest");
  expect(express.response).toHaveProperty("serverError");
  expect(express.response).toHaveProperty("notFound");
  expect(express.response).toHaveProperty("unauthorized");
  expect(express.response).toHaveProperty("unprocessable");
  expect(express.response).toHaveProperty("custom");
});
