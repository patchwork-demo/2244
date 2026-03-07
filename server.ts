import express from "express";
import path from "path";

const app = express();
const port = 3333;

app.set("view engine", "pug");
app.set("views", path.join(import.meta.dir, "src", "templates"));
app.use(express.static(path.join(import.meta.dir, "public")));

app.get("/", (req, res) => {
  res.render("home", { name: "World" });
});

app.listen(port, () => {
  console.log(`Wowzers is happening on port: ${port}`);
});
