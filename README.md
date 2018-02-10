# Declarative Web

Experimental project to development server side programming with almost only YAML format file.

# Example

Write this YAML:

```yaml
- uri: /
  method: get
  return:
    json:
      message: 'Hello Declarative Web'
```

This create the following route:

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

- [ ] paramas
- [ ] db connection
- [ ] model definition
