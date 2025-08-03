module.exports = app => {
  const pedidos = require("../controllers/pedido.controller.js");
  const router = require("express").Router();

  router.post("/", pedidos.create);
  router.get("/", pedidos.findAll);
  router.get("/:id", pedidos.findOne);
  router.put("/:id", pedidos.update);
  router.delete("/:id", pedidos.delete);

  app.use("/api/pedidos", router);
};
