var path = require('path');

module.exports = function(app){
    //route to display our index.handlebars (homepage)
    app.get("/", function(req, res){
    // res.json({"message": "hello"});
    burger.selectAll(function(data){
      var hbsObject = {
        burger: data
      };
      res.render('index', hbsObject)
    })
    });
    
    // route to update the burger throught its id]
    app.put("/:id", function(req, res){
      burger.update(function(data){
        
    
      })
    })
    
    // route to create a burger (post request)
    app.post("/create", function(req, res){
      res.status(200).send('OK');
    })
}