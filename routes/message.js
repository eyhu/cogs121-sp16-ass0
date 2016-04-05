var models = require('../models');

exports.send = function(req, res) {
    //console.log(req.body); // help you see what is inside of req.body
    // your solution here

    var email_data = req.body;

    var newEmail = new models.Message({
    	"email": email_data.email,
    	"content": email_data.content,
    	"created": new Date()
    });

    //console.log(newEmail);

    newEmail.save(afterSaving);

    function afterSaving(e) {
    	if(e) {
    		console.log(e);
    		res.send(500);
    	}
    	// redirect to home
      res.redirect('/');
    }

};