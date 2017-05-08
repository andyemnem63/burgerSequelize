// Require packages and files
let db = require('../models');

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            console.log(data);
            var hbsObject = {
               foods: data 
            }
            res.render("index", hbsObject);
        });
    });
}
// router.post("/", function(req, res) {
//     // Colums, [forminput, boolean = false;
//     food.insertOne(["burger_name", "devoured"], [req.body.burger_name, "0"], function() {
//         res.redirect("/");
//     });
// });

// router.put("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//      console.log("condition", condition);

//     food.updateOne({
//         devoured: req.body.devoured
//                 }, condition, function() {
//         res.redirect("/");
//     });
// });         
// router.delete('/:id', function(req, res) {
//                 var condition = "id = " + req.params.id;
//     console.log("condition", condition);
        
//     food.deleteOne(condition, function() {
//         res.redirect('/');
//     });
// });
// module.exports = router;
