module.exports = (app) => {

    const fasilitas = require("../controllers/fasilitas.controller")
    let router = require("express").Router() 

    router.post("/create", fasilitas.create)
    router.get("/readall", fasilitas.readAll)
    router.get("/readid/:id", fasilitas.readById)
    router.put("/update/:id", fasilitas.update)
    router.delete("/delete/:id", fasilitas.delete)

    app.use("/api/fasilitas" , router)
  }