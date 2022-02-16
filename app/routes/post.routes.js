const { authJwt } = require("../middlewares");
const controller = require("../controllers/post.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });



  app.post("/api/post/createPost", controller.createPost);

  app.post("/api/post/allPosts", controller.getAllPosts);

  app.delete("/api/post/remove/:id", controller.deletePost);

  app.get("/api/postDetails/:id", controller.findOnePost);

  app.get("/api/bringAllPosts", controller.bringAllPosts);


  app.put("/api/postUpdate/:id", controller.updatePost);

};

