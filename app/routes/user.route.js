module.exports = (app) => {

    const user = require("../controllers/user.controller")
    let router = require("express").Router() 

    router.post("/create", user.create)
    router.get("/readall", user.readAll)
    router.get("/readid/:id", user.readById)
    router.put("/update/:id", user.update)
    router.delete("/delete/:id", user.delete)

    app.use("/api/user" , router)
  }