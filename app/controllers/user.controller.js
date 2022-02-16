const UserModel = require("../models/user.model");
const mongoose = require('mongoose');

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.findOneUser = (req,res) => {
  
    const {id} = req.params;
    //console.log(id)
    UserModel.findById(id)
    .then(response=>{
      res.json(response);
      //console.log(response)
    })
    .catch(err=>{
      res.json(err)
    })
  }
  
  exports.getAllUsers = async (req, res) => {
    try {
      const { page = 1 } = req.query;
  
      function arrayUnique(array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i].title === a[j].title)
                    a.splice(j--, 1);
            }
        }
        return a;
    }
  
      const response = await UserModel.find()
        
      const pages = 1 ;
      res.json({
        totalUsers: response.length,
        users: response,
        totalPages: pages,
        currentPage: page - 1,
      });
    } catch (error) {
      res.json({ status: 404, message: error });
    }
  };
  
  
  exports.deleteUser = (req,res) => {
    const {id} = req.params
    UserModel.findByIdAndRemove(id)
    .then(response=>{
      res.json(response)
    })
    .catch(err=>{
      res.json(err)
    })
  }
  
  exports.updateUser = (req,res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
      .then((user)=>{res.json(user)})
      .catch((error)=>{res.json(error)})
  }
  
  
  exports.findUserByUsername = (req,res) => {
    UserModel.find({username: { $in: [ req.params.id ] }})
      .then((user)=>{res.json(user)})
      .catch((error)=>{res.json(error)})
  }

  exports.bringAllUsers = (req,res) => {
    UserModel.find()
      .then((user)=>{res.json(user)})
      .catch((error)=>{res.json(error)})
  }