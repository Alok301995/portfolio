const route = require("express").Router();
const messageSchema = require("../Model/Message");

route.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const user = await messageSchema.findOne({ email: email });
    console.log();
    if (user) {
      const newData = new messageSchema({ name: name, message: message });
      console.log(newData);
      const savedResponse = await user.save(newData);
      console.log(savedResponse);
      res.send({ msg: "saved successfully" });
    } else {
      const newData = new messageSchema({
        name: name,
        email: email,
        message: message,
      });
      //   create new user
      const newUser = await messageSchema.create(newData);
      console.log(newUser);
      res.send({ msg: "new user created" });
    }
  } catch (error) {
    console.log("error", error.message);
  }
});

module.exports = route;
