# Webux Response

This module allows to add new responses to express to provide custom responses.

## Installation

### Linux

```bash
npm i --save @studiowebux/response
```

### Windows

```bash
npm i --save @studiowebux/response
```

### Mac OS

```bash
npm i --save @studiowebux/response
```

## Usage

### Requirements

- Knowledge about the HTTP status code

### Configurations

Each method have arguments,  
these arguments are described below,

### Functions

Responses available:

#### Success (HTTP 200)

> body is Mandatory

```javascript
res.success(body, msg, devMsg);
```

#### Created (HTTP 201)

> body is Mandatory

```javascript
res.created(body, msg, devMsg);
```

#### Updated (HTTP 200)

> body is Mandatory

```javascript (HTTP 200)
res.updated(body, msg, devMsg);
```

#### Deleted (HTTP 204)

> id is Mandatory

```javascript
res.deleted(id, msg, devMsg);
```

#### Forbidden (HTTP 403)

```javascript
res.forbidden(msg, devMsg);
```

#### Bad Request (HTTP 400)

```javascript
res.badRequest(msg, devMsg);
```

#### Server Error (HTTP 500)

```javascript
res.serverError(msg, devMsg);
```

#### Not Found (HTTP 404)

```javascript
res.notFound(msg, devMsg);
```

#### Unauthorized (HTTP 401)

```javascript
res.unauthorized(msg, devMsg);
```

#### Unprocessable (HTTP 422)

```javascript
res.unprocessable(msg, devMsg);
```

#### Custom

> code and object are Mandatory

```javascript
res.custom(code, object);
```

### Example

Check the /examples directory.

## Test

> Tested with jest 24.9.0

Install jest globally

```bash
npm install -g jest
```

Launch the test

```bash
npm install
npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

SEE LICENSE IN license.txt
