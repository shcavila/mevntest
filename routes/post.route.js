const express = require('express');
const postRoutes = express.Router();

// Require Post model in our routes module

let author = require('../models/author.model');
let Post = require('../models/post.model');
// Defined store route
postRoutes.route('/add').post(function (req, res) {

      let test = req.body.author
     
      author.find({name:test},function(err,docs){
        if(docs.length){
          let post = new Post(req.body);

          post.save(function (err) {
            if (err) {
              res.status(400).send("unable to save");
            } else {
              res.json("successfully saved")

            }

          });
        }
      })

})

      // Defined get data(index or listing) route
      postRoutes.route('/').get(function (req, res) {
       
        Post.find(function (err, posts) {
          if (err) {
            res.json(err);
          } else {
            res.json(posts);
          }
        });
        console.log("hello")
      });

      // Defined edit route
      postRoutes.route('/edit/:id').get(function (req, res) {
        let id = req.params.id;
        Post.findById(id, function (err, post) {
          if (err) {
            res.json(err);
          }
          res.json(post);
        });
      });

      //  Defined update route
      postRoutes.route('/update/:id').post(function (req, res) {
        Post.findById(req.params.id, function (err, post) {
          if (!post)
            res.status(404).send("data is not found");
          else {
            post.title = req.body.title;
            post.body = req.body.body;
            post.save().then(() => {
                res.json('Update complete');
              })
              .catch(() => {
                res.status(400).send("unable to update the database");
              });
          }
        });
      });

      // Defined delete | remove | destroy route
      postRoutes.route('/delete/:id').delete(function (req, res) {
        Post.findByIdAndRemove({
          _id: req.params.id
        }, function (err) {
          if (err) res.json(err);
          else res.json('Successfully removed');
        });
      });

      module.exports = postRoutes;