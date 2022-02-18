const { authJwt } = require("../middlewares");
const controller = require("../controllers/image.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });



  app.post("/api/image/createImage", controller.createImage);

  app.post("/api/image/allImages", controller.getAllImages);

  app.delete("/api/image/remove/:id", controller.deleteImages);

  app.get("/api/imageDetails/:id", controller.findOneImage);

  app.get("/api/bringAllImages", controller.bringAllImages);

  app.put("/api/imageUpdate/:id", controller.updateImage);

};

