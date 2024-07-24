module.exports = (app) => {

    const galery = require("../controllers/galery.controller")
    let router = require("express").Router() 

    router.post("/create", galery.create)
    router.get("/readall", galery.readAll)
    router.get("/readid/:id", galery.readById)
    router.put("/update/:id", galery.update)
    router.delete("/delete/:id", galery.delete)

    app.use("/api/galery" , router)
  }