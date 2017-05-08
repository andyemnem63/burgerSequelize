// Require packages and files
let db = require('../models/');

module.exports = (app) => {
   // Read all from Database
    app.get("/", (req,res) => {
        db.Burger.findAll({}).then(function(data) {
            var hbsObject = {
               foods: data 
            }
            res.render("index", hbsObject);
        });
    });

    //Post to database
	app.post('/', (req,res) => {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: 0
        }).then((data) => {
            console.log('Posted!!');
            // Redirect to homepage
            res.redirect('/');
        });
	});

    //Moves to devoured
     app.put('/:id', (req,res) => {
        db.Burger.update({
            devoured:1
        },
        {
            where: {
                id: req.params.id
            }
        }).then((data) => {
            console.log("Devoured!!!");
            res.redirect('/');
        });
     });
}

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
