import express from "express";

import { products } from "../../data/Data";
const app = express();

app.get("/", (req, res) => res.send("<h1>hello</h1>"));

app.get("/api/product", (req, res) => {
  res.send(products);
});
app.get("/api/product/:id", (req, res) => {
  const { id } = req.params;

  const result = products.find((i, index) => Number(id) === i.id);
  if (!result) {
    return res.status(404).send("<h1>Product does not found!</h1>");
  }

  return res.send(result);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  const sortedProducts = products;

  if (search) {
    const result = sortedProducts.filter((i, index) =>
      i.name.startsWith(search as string)
    );

    if (result.length) {
      return res.send(result);
    } else {
      return res.status(200).json({ success: true, data: [] });
    }
  }
  if (limit) {
    const limitedData = sortedProducts.slice(0, Number(limit));

    return res.send(limitedData);
  }

  return res.send(products);
});

app.get("*", (req, res) =>
  res.status(404).send("<h1>Resource not found!</h1>")
);
app.listen(5000, () => {
  console.log("The server is running on port 5000");
});
