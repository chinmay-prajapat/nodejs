import express from "express";
const router = express.Router();
router.post("/", (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name as string}`);
  }
  return res.status(401).send("Please provide your name");
});

export default router;
