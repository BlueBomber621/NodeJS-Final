const display =
  ("/",
  (req, res) => {
    res.send("Hello from my route!");
  });

module.exports = { display };
