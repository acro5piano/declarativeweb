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

# Architecture

Declarative Web consists of three parts:

- `Main Handler` provides basic routing, module handling
- `Core Modules` provides basic operation for app.
- `Models` defines data structure.

![](https://docs.google.com/drawings/d/e/2PACX-1vQ4mXj1KrQciCb_kxMKcthOVsp6-MrzwUl-hlecOiyJITwBEUoF2Y4Mqtcn0bvTAo0Aki3EUO-c-Pf0/pub?w=960&h=720)

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
