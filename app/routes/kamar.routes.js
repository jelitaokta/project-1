
module.exports = (app) => {

    const kamar = require("../controllers/kamar.controller")
    let router = require("express").Router() 

    router.post("/create", kamar.create)
    router.get("/readall", kamar.readAll)
    router.get("/readid/:id", kamar.readById)
    router.put("/update/:id", kamar.update)
    router.delete("/delete/:id", kamar.delete)

    app.use("/api/kamar" , router)
  }