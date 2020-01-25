const express = require("express");
const app = express();

require("../index")(express);

app.get("/", (req, res) => {
  return res.success({ msg: "Hello WORLD !" }, "this is a test !", "dev ...");
});

app.post("/created", (req, res) => {
  return res.created(
    { user: { fullname: "example" } },
    "User Created",
    "this is a optional dev msg"
  );
});

app.put("/updated", (req, res) => {
  return res.updated(
    { user: { fullname: "A real user" } },
    "User Updated",
    "this is a optional dev msg"
  );
});

app.delete("/delete", (req, res) => {
  return res.deleted(
    101,
    "A user has been deleted",
    "this is a optional dev msg"
  );
});

app.get("/forbidden", (req, res) => {
  return res.forbidden("optional custom message", "this is a optional dev msg");
});

app.get("/notfound", (req, res) => {
  return res.notFound("optional custom message", "this is a optional dev msg");
});

app.get("/badrequest", (req, res) => {
  return res.badRequest(
    "optional custom message",
    "this is a optional dev msg"
  );
});

app.get("/unauthorized", (req, res) => {
  return res.unauthorized(
    "optional custom message",
    "this is a optional dev msg"
  );
});

app.get("/unprocessable", (req, res) => {
  return res.unprocessable(
    "optional custom message",
    "this is a optional dev msg"
  );
});

app.get("/error", (req, res) => {
  return res.serverError();
});

app.get("/custom", (req, res) => {
  return res.custom(244, {
    msg: "this is a 244 code !",
    text: "bla bla bla",
    another: "Some custom stuff",
    devMsg: "if I need it :)"
  });
});

app.listen(1337, () => {
  console.log("App is listening on port 1337");
});
