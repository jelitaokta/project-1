const db = require('../models');
const transaksi = db.transaksi

// untuk tambah data
exports.create = async (req, res) => { 
    console.log(req)
     const data_transaksi = {    
        elemenData: req.body.elemenData,   
        id_transaksi: req.body.id_transaksi, 
        nama: req.body.nama,    
        email: req.body.email,
        password: req.body.password,
        no_hp: req.body.no_hp,
        metode_pembayaran: req.body.metode_pembayaran  
    }
    console.log("data_",data_transaksi)     
      await transaksi.create(data_transaksi) //menyimpan data_peserta ke table peserta    
      .then(data => {    
        res.send({    
          message: "Data was insert successfully."   
        })   
        })   
      .catch(err => {
        res.status(500).send({    
          message:    
            err.message || "Some error occurred while creating data."   
        });   
      })  
    }

    // untuk menampilkan semua data
    exports.readAll = async (req, res) => {
        await transaksi.findAll()      
        .then(data => {     
          res.send(data);      
        })      
        .catch(err => {      
          res.status(500).send({     
            message:     
              err.message || "Some error occurred while retrieving data."      
          });     
        });     
      }
      
      // untuk menampilkan data dengan id tertentu
    exports.readById = async (req, res) =>{
        const id = req.params.id   
        await transaksi.findOne({where: { id: id}})   
        .then(data => {   
          res.send(data);   
        })   
        .catch(err => {   
          res.status(500).send({   
            message:   
              err.message || "Some error occurred while retrieving data."   
          });   
        });   
    }

    // untuk update data
    exports.update = async (req, res) => {
        const id = req.params.id     
        await transaksi.update(req.body, { where: { id: id}})     
        .then(num => {    
            num == 1 ? res.send({  
              message: "Data was updated successfully."     
            }) : res.send({     
              message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`     
            });     
        })     
        .catch(err => {     
          res.status(500).send({    
            message: `Error updating Data with id=${id}`,    
            error: err    
          })    
        })    
      }

      // untuk menghapus data
      exports.delete = async (req, res) => {
        const id = req.params.id     
        await transaksi.destroy({ where: {     
          id: id     
      }})     
      .then(num => {     
        num == 1 ? res.send({     
          message: "Data was deleted successfully."    
        }) : res.send({    
          message: `Cannot delete Data with id=${id}. Maybe Data was not found or req.body is empty!`     
        });     
      })    
        .catch(err => {     
          res.status(500).send({     
            message: `Error deleting Data with id=${id}`,     
            error: err     
          })     
        })    
      }
