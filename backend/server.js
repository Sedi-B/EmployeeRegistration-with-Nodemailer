const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/adding", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((dcoc) => ({
    d: dcoc.id,
    ...document.data(),
  }));
  res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  console.log(data);
  //console.log("Data of Users ", data);
  //await User.add(data);
  res.send({ msg: "Added" });
});

app.post("/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {
  const id = req.body.id;
  const data = req.body;
  await User.doc(id).delete(data);
  res.send({ msg: "Deleted" });
});
app.listen(3000, () => console.log("Its up and running *3000"));
