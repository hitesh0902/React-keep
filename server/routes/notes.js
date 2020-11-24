const express = require("express");
const db = require("diskdb");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(db.notes.find());
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const note = db.notes.find({ id });
  if (note.length) {
    res.json(note);
  } else {
    res.json({ message: `item ${id} doesn't exist` });
  }
});

router.post("/", (req, res) => {
  console.log(`Save ${req.body} to db`);
  db.notes.save(req.body);
  res.end();
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const note = req.body;
  console.log(`Update ${note} to db`);
  db.notes.update({ id }, note);
  res.end();
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const note = req.body;
  console.log(`Update ${note} to db`);
  db.notes.update({ id }, note);
  res.end();
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Delete item with id:${id}`);
  db.notes.remove({ id });
  res.end();
});

module.exports = router;
