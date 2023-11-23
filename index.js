const express = require("express");
const port = process.env.PORT || 5004;
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ success: true, message: "megy" });
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
