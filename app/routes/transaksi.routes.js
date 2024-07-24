module.exports = (app) => {

    const transaksi = require("../controllers/transaksi.controller")
    let router = require("express").Router() 

    router.post("/create", transaksi.create)
    router.get("/readall", transaksi.readAll)
    router.get("/readid/:id", transaksi.readById)
    router.put("/update/:id", transaksi.update)
    router.delete("/delete/:id", transaksi.delete)

    app.use("/api/transaksi" , router)
  }