const db = require('../models');
const fasilitas = db.fasilitas

// untuk tambah data
exports.create = async (req, res) => { 
    console.log(req)
     const data_fasilitas = {    
        elemenData: req.body.elemenData,    
        nama_jenis_kamar: req.body.nama_jenis_kamar,
        fasilitas: req.body.fasilitas,
        harga: req.body.harga,
    }
    console.log("data_",data_fasilitas)     
      await fasilitas.create(data_fasilitas) //menyimpan data_peserta ke table peserta    
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
        await fasilitas.findAll()      
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
        await fasilitas.findOne({where: { id: id}})   
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
        await fasilitas.update(req.body, { where: { id: id}})     
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
        await fasilitas.destroy({ where: {     
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
