const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  // se agrega el nombre del archivo que se desea renderizar
  const title = "mi pagina creada desde express";
  let isActive = true;
  res.render("index", { title, isActive });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
