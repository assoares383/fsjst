import express from "express";

const app = express();

// Routes
app.get("/boards", (req, res) => {
  const boards = [{ name: "Projeto 1" }];

  res.json(boards);
});

app.listen(3000);
