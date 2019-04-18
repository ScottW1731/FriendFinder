var friends = require("../data/friends.js")

module.exports = function(app){

    app.get("/api/allfriends", function(req, res){
        res.json(friends);


    });
    app.post("/api/allfriends", function(req, res){
        // var newFriend = req.body;
        var name = req.body.name;
        var image = req.body.image;
        var scores = req.body.scores;
        
        var newFriend = {
            name: name, 
            image: image, 
            scores: scores
        };
        var bestMatch = friends[Math.floor(Math.random()*friends.length)];
        friends.push(newFriend);
        res.json(bestMatch);
        console.log(req.body);

    });

}