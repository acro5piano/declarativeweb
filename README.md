# Declarative Web

Development REST API in declarative way.

# Example

Write this YAML:

```yaml
- uri: /
  method: get
  response:
    json:
      message: 'Hello Declarative Web'
```

This create the following api endpoint:

```
$ curl -Ss localhost:3000/ | jq .
{
  "message": "Hello Declarative Web"
}
```

# Concept

We are tired to write typical server side code such as:

- HTTP
  - Routing
- Logic
  - Authentication
  - Authorization
- Facades
  - Mail
  - Slack
  - Calling other API
- Database
  - Model and ORM
  - Schema Mapping
  - Migration
- Testing
  - Unit
  - Feature
  - Browser

And more.
Actually these stuff is just boilerplate.

How easy if we could build web without boilerplate. We can focus our business logic.

# TODO

- [ ] create plug-in system on the top of app
- [ ] paramas
- [ ] db connection
- [ ] model definition
