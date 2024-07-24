require("dotenv").config()
const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
var hbs = require('hbs')
const path = require("path")
const multer = require('multer')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set('view engine', 'hbs')
app.use(express.static('view'))
app.set('views', path.join(__dirname, 'view'));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})

const upload = multer({storage: storage})

//middleware
const authentticate = (req, res, next) => {
  const token = req.header.authorization
  if(!token){
    return res.status(200).json({message: "tidak punya akses"})
}
  next()
}

app.post("/create" , authentticate, upload.single ("image"), async (req, res) => {
  const {username, password} = req.body
  var token = jwt.sign({ username, password }, process.env.SECRET_KEY);
  const data = {
    code: 200,
    message: req.file
  }
  try {
    return res.status(200).json(data)
  }catch (err) {
    return res.status(400).json({message: err.message})
  }
})

app.get ("/test", authentticate, async (req, res) => {
  const data = {
    code: 200,
    message: "berhasil masuk"
  }
  try {
    return res.status(200).json(data)
  }catch (err) {
    return res.status(400).json({message: err.message})
  }
})

app.use("/test", async (req, res) => {
  res.render("index");
})
