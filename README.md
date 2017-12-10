# Neighbour.ly: Server

## Overview
This is the back-end of Neighbour.ly, a communications app produced as part of our final two-week project of Makers Academy.

To see the ReactJS front-end, [click here](https://github.com/alexiscarlier/neighbourly-app).

Neighbour.ly was produced as part of a wider challenge to learn how to use Go without prior knowledge. To see a record of our learning process and how we came to build Neighbour.ly, [click here](https://github.com/haletothewood/LearningGoAndReact)

## Authors

- David Halewood
- Alexis Carlier
- George Lamprakis
- Jon Sanders
- Lucas Salmins
- Ainsley Chang

## Instructions

Go must be installed and your workspace configured to use this repo. For instructions on this, [click here](https://golang.org/doc/install).

### Running Tests

```
$ go get github.com/ainsleybc/neighbourly
$ cd src/github.com/ainsleybc/neighbourly
$ go test
```

### Manually Run Server

```
$ go get github.com/ainsleybc/neighbourly
$ cd src/github.com/ainsleybc/neighbourly
$ go run main.go
```

With the server running, you can then manually simulate messages sent from the front-end with JavaScript, using the console in your web browser or a service like [JSBin]("https://jsbin.com").

For example:
```
var ws = new WebSocket("ws://localhost:4000")
ws.send('{"name": "feed add","data": {"address":"Makers Academy"}')
```

## Technologies used

#### Go
Main server-side language

#### RethinkDB
Database

#### External packages
- [GoRethink](https://github.com/GoRethink/gorethink): RethinkDB Driver for Go
- [wstest](https://github.com/posener/wstest): Client for testing WebSocket connections in Go



## File Manifest

```
|-- neighbourly-app
    |-- .babelrc
    |-- .gitignore
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- yarn.lock
    |-- __mocks__
    |   |-- react.js
    |-- __test__
    |   |-- FeedContainer.test.js
    |   |-- Signup.test.js
    |   |-- feed.test.js
    |   |-- socket.test.js
    |-- coverage
    |   |-- clover.xml
    |   |-- coverage-final.json
    |   |-- lcov.info
    |   |-- lcov-report
    |       |-- base.css
    |       |-- index.html
    |       |-- prettify.css
    |       |-- prettify.js
    |       |-- sort-arrow-sprite.png
    |       |-- sorter.js
    |       |-- src
    |       |   |-- Feed.js.html
    |       |   |-- FeedContainer.js.html
    |       |   |-- Signup.js.html
    |       |   |-- index.html
    |       |   |-- socket.js.html
    |       |-- test
    |           |-- index.html
    |           |-- jestsetup.js.html
    |-- public
    |   |-- NeighbourlyLogoSquare.png
    |   |-- index.html
    |   |-- manifest.json
    |-- src
    |   |-- App.css
    |   |-- App.js
    |   |-- Feed.js
    |   |-- FeedContainer.js
    |   |-- Signup.js
    |   |-- index.css
    |   |-- index.js
    |   |-- logo.svg
    |   |-- registerServiceWorker.js
    |   |-- socket.js
    |-- test
        |-- jestsetup.js
```



# Neighbour.ly front-end

The front-end to Neighbour.ly

### Technologies used

* React
* create-react-app

### Instructions

* Clone the repo
* Ensure create-react-app is installed globally:

```
npm install -g create-react-app
```
* Run `$ npm install`

### Notes

When the user submits their name, the event sends the name information to the websocket. The [Kaazing WebSocket Echo Demo](http://demos.kaazing.com/echo/) is currently hard-coded into the app, so the name is returned in the data payload.
