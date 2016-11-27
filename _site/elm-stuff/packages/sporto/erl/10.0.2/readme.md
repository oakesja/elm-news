# Erl

[ ![Codeship Status for sporto/erl](https://codeship.com/projects/74c708d0-6c07-0133-ba44-0e105eb8924a/status?branch=master)](https://codeship.com/projects/115393)

A URL parsing and construction library for ELM

## `parse` a url string

```elm
-- Given a url string
url = "http://sam:pass@api.example.com:3000/products/kids?color=red&age=10#toys/1"

Erl.parse url 

-- Returns a Erl.Url record:

{
  protocol: "http",
  username: "sam",
  password: "pass",
  host: ["api", "example", "com"],
  port_: 3000,
  path: ["products", "kids"],
  hash: "toys/1",
  hasLeadingSlash: True,
  hasTrailingSlash: False,
  query: Dict {
    "color": "red",
    "age": "10"
  }
}
```

See MDN for more details (https://developer.mozilla.org/en-US/docs/Web/API/Location). Note that in MDN `query` is called `search`.

## Construct

### `new`

```elm
-- Construct an empty Erl.Url record:

url = 
  Erl.new
```

### Mutations

```elm
-- Modify the protocol
{ url | protocol = "https" }

-- Modify host
{url | host = ["api", "acme", "com"] }

-- Modify port
{ url | port_ = 9000 }

-- Modify path
{url | path = ["users", "1"] }

-- Modify path by appending segments
Erl.appendPathSegments url ["users", "1"]

-- Modify hash
{url | hash = "users/1" }

-- Clear query string
Erl.clearQuery url

-- Add one query string key/value (patches previous query string)
Erl.addQuery "key" "value" url

-- Remove one query string key/value
Erl.removeQuery "key" url

-- Replaces query string with key/value (removes any previous keys)
Erl.setQuery "key" "value" url
```

### `toString`

```elm
-- Given a Erl.Url record (url):

Erl.toString url 

-- Returns the url as string:

"http://www.foo.com:2000/users/1?k=2&q=1#a/b"
```

## Documentation

[Documentation at package.elm-lang.org](http://package.elm-lang.org/packages/sporto/erl/latest/Erl)

## Test

```
yarn install
npm test
```

## Todo

- Username
- Password

## [Changelog](https://github.com/sporto/erl/blob/master/changelog.md)
