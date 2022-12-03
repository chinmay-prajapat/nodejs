import express from "express";
import path from "path";
import People from "./routes/people";
import Auth from "./routes/auth";
const app = express();
app.use(express.static(path.resolve("./src/modules/express/methods-public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/people", People);
app.use("/login", Auth);
app.listen(5000, () => {
  console.log("server is running on 5000");
});
