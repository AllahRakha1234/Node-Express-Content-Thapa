// *** 79) ADDING ROUTER IN EXPRESS ***

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routers/users");

app.use(userRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
