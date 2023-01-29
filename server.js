const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

require("dotenv").config();

// import routes
// const authRoutes = require("./routes/auth");

// app
const app = express();

// mongoose
mongoose.set("strictQuery", false);

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection err: ", err));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//   route middlewares
// app.use("/api", authRoutes);
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

//   route
app.get("/", (req, res) => {
  res.json({
    data: "Welcome to the DEMO project!",
  });
});

// port
let PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

// DATABASE = "mongodb+srv://admin:admin@cluster0.ocvywqa.mongodb.net/theDemoDB";
// PORT = 8000;
// JWT_SECRET = "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk";
