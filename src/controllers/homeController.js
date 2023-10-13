function printHelloWorld(req, res) {
  res.send("Hello World!");
}

function meow(req, res) {
  res.send("Meow");
}

module.exports = { printHelloWorld, meow };
