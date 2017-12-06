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
