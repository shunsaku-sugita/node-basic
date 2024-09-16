import express from 'express';

const router = express.Router();

const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];

// GET
router.get('/', function (req, res) {
  res.json(products);
});

// GET by id
router.get('/:id', (req, res) => {
  const targetId = req.params.id;
  res.json(products[targetId]);
})

// POST
router.post('/', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  console.log(products);
  res.json(newProduct)
});

// DELETE
router.delete('/:id', (req, res) => {
  const deleteId = req.params.id;
  products.splice(deleteId, 1);
  console.log(products);
  res.json({ deleteId });
});

// UPDATE
router.patch('/:id', (req, res) => {
  const targetProduct = products[req.params.id];

  if (req.body.hasOwnProperty('name')) {
    targetProduct.name = req.body.name;
  }
  if (req.body.hasOwnProperty('price')) {
    targetProduct.price = req.body.price;
  }

  console.log(products);
  res.json(targetProduct);
});

export default router;