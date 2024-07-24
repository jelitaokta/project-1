module.exports = (app) => {

    const JenisKamar = require("../controllers/JenisKamar.controller")
    let router = require("express").Router() 

    router.post("/create", JenisKamar.create)
    router.get("/readall", JenisKamar.readAll)
    router.get("/readid/:id", JenisKamar.readById)
    router.put("/update/:id", JenisKamar.update)
    router.delete("/delete/:id", JenisKamar.delete)

    app.use("/api/JenisKamar" , router)
  }