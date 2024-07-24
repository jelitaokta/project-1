module.exports = (app) => {

    const kategori = require("../controllers/kategori.controller")
    let router = require("express").Router() 

    router.post("/create", kategori.create)
    router.get("/readall", kategori.readAll)
    router.get("/readid/:id", kategori.readById)
    router.put("/update/:id", kategori.update)
    router.delete("/delete/:id", kategori.delete)

    app.use("/api/kategori" , router)
  }