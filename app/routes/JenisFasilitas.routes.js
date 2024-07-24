module.exports = (app) => {

    const JenisFasilitas = require("../controllers/JenisFasilitas.controller")
    let router = require("express").Router() 

    router.post("/create", JenisFasilitas.create)
    router.get("/readall", JenisFasilitas.readAll)
    router.get("/readid/:id", JenisFasilitas.readById)
    router.put("/update/:id", JenisFasilitas.update)
    router.delete("/delete/:id", JenisFasilitas.delete)

    app.use("/api/JenisFasilitas" , router)
  }