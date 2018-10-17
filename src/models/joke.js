const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Joke = function () {
  this.text = null;
}

Joke.prototype.getData = function () {
  const request = new Request("https://icanhazdadjoke.com/");
  request.get((data) => {
    PubSub.publish("Joke:joke-loaded", data.joke);

  });
}

module.exports = Joke;
