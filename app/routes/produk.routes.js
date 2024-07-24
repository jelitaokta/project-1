module.exports = (app) => {

    const produk = require("../controllers/produk.controller")
    let router = require("express").Router() 

    router.post("/create", produk.create)
    router.get("/readall", produk.readAll)
    router.get("/readid/:id", produk.readById)
    router.put("/update/:id", produk.update)
    router.delete("/delete/:id", produk.delete)

    app.use("/api/produk" , router)
  }