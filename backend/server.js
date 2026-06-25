const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// PRODUCTS DATA
let products = [
  {
    id: 1,
    name: "Nike Air Max 90",
    price: 6000,
    image: "/images/nike.jpg",
  },
  {
    id: 2,
    name: "Adidas Originals Superstar II",
    price: 6000,
    image: "/images/adidas.jpg",
  },
  {
    id: 3,
    name: "Puma Smash v2 Suede Sneakers",
    price: 6000,
    image: "/images/puma.jpg",
  },
  {
    id: 4,
    name: "Onitsuka Tiger Mexico 66 Sneakers",
    price: 6000,
    image: "/images/onitsuka.jpg",
  },
];

// ROUTES
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("T7 Sports Backend Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});