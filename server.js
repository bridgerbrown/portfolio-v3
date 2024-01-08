import express from "express";
import path from "path";

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 10000, () => console.log("Server is running..."));
