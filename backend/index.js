const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT_BACKEND || 8080;
const { readFile, writeFile } = require("fs").promises;

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/data", async (req, res) => {
  const data = await readFile("./data.json", "utf8");
  res.send(JSON.parse(data));
});

app.post("/add", (req, res) => {
  const input = req.body;
  const inData = {};
  inData[`${input.id}`] = { ...input };
  if (Object.keys(input).length) {
    readFile("./data.json", "utf8")
      .then((text) => {
        const data = JSON.parse(text);
        const newData = { ...data.data, ...inData };
        const finalData = { data: newData };
        writeFile("./data.json", JSON.stringify(finalData))
          .then(() => res.send("Successfully added!!"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  } else {
    res.status(418).send("no DATA sent");
  }
});

app.listen(PORT, () => console.log(`Server is up and running at ${PORT}`));
