const ImageModel = require("../models/image.model");
const mongoose = require('mongoose');


exports.createImage = (req, res, next)=>{
    const newImage = new ImageModel(req.body)
    newPost.save()
    .then((image)=>{res.json(image)})
    .catch((error)=>{
        next({message:error})
        /*res.json(error)*/
    })
  }

  exports.findOneImage = (req,res) => {
  
    const {id} = req.params;
    //console.log(id)
    ImageModel.findById(id)
    .then(response=>{
      res.json(response);
      //console.log(response)
    })
    .catch(err=>{
      res.json(err)
    })
  }
  
  exports.getAllImages = async (req, res) => {
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
  
      const response = await ImageModel.find()
        
      const pages = 1 ;
      res.json({
        totalPosts: response.length,
        posts: response,
        totalPages: pages,
        currentPage: page - 1,
      });
    } catch (error) {
      res.json({ status: 404, message: error });
    }
  };
  
  
  exports.deleteImage = (req,res) => {
    const {id} = req.params
    ImageModel.findByIdAndRemove(id)
    .then(response=>{
      res.json(response)
    })
    .catch(err=>{
      res.json(err)
    })
  }
  
  exports.updateImage = (req,res) => {
    ImageModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
      .then((user)=>{res.json(user)})
      .catch((error)=>{res.json(error)})
  }
  

  exports.bringAllImages = (req,res) => {
    ImagesModel.find()
      .then((user)=>{res.json(user)})
      .catch((error)=>{res.json(error)})
  }