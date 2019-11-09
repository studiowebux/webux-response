# Webux Response

This module allow to overload the express responses to create custom response.

## Installation

```bash
npm i --save webux-response
```

## Usage

functions available:  

- success
- created
- updated
- deleted
- forbidden
- badRequest
- serverError
- notFound
- unauthorized
- unprocessable
- custom

### example
```
const express = require("express");
const app = express();

require("webux-response")(express);

app.get("/", (req, res) => {
  return res.success({ msg: "Hello WORLD !" }, "this is a test !", "dev ...");
});

app.get("/error", (req, res) => {
  return res.serverError();
});

app.get("/custom", (req, res) => {
  return res.custom(244, { msg: "this is a 244 code !", text: "bla bla bla" });
});

app.listen(1337);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

SEE LICENSE IN license.txt
