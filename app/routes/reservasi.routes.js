module.exports = (app) => {

    const reservasi = require("../controllers/reservasi.controller")
    let router = require("express").Router() 

    router.post("/create", reservasi.create)
    router.get("/readall", reservasi.readAll)
    router.get("/readid/:id", reservasi.readById)
    router.put("/update/:id", reservasi.update)
    router.delete("/delete/:id", reservasi.delete)

    app.use("/api/reservasi" , router)
  }