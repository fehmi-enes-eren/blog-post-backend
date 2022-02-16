const PostModel = require("../models/post.model");
const mongoose = require('mongoose');


exports.createPost = (req, res, next)=>{
    const newPost = new PostModel(req.body)
    newPost.save()
    .then((recipe)=>{res.json(recipe)})
    .catch((error)=>{
        next({message:error})
        /*res.json(error)*/
    })
  }

  exports.findOnePost = (req,res) => {
  
    const {id} = req.params;
    //console.log(id)
    PostModel.findById(id)
    .then(response=>{
      res.json(response);
      //console.log(response)
    })
    .catch(err=>{
      res.json(err)
    })
  }
  
  exports.getAllPosts = async (req, res) => {
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
  
      const response = await PostModel.find()
        
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
  
  
  exports.deletePost = (req,res) => {
    const {id} = req.params
    PostModel.findByIdAndRemove(id)
    .then(response=>{
      res.json(response)
    })
    .catch(err=>{
      res.json(err)
    })
  }
  
  exports.updatePost = (req,res) => {
    PostModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
      .then((user)=>{res.json(user)})
      .catch((error)=>{res.json(error)})
  }
  

  exports.bringAllPosts = (req,res) => {
    PostModel.find()
      .then((user)=>{res.json(user)})
      .catch((error)=>{res.json(error)})
  }