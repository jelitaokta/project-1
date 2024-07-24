module.exports = (app) => {

    const admin = require("../controllers/admin.controller")
    let router = require("express").Router() 

    router.post("/create", admin.create)
    router.get("/readall", admin.readAll)
    router.get("/readid/:id", admin.readById)
    router.put("/update/:id", admin.update)
    router.delete("/delete/:id", admin.delete)

    app.use("/api/admin" , router)
  }