import express from "express";
import bodyParser from "body-parser";

(async function () {
  try {
    const app = express();
    (await import("./src/loader/index.js")).default({app});
    app.use(bodyParser.json())
    app.get("/", (req, res, next) => {
      res.json({ success: true });
    });
    app.listen(3000, () => {
      console.log("listening on port http://localhost:3000");
    });
  } catch (e) {
    console.error(e);
  }
})();
