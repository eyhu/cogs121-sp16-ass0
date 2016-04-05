var models = require('../models');

exports.view = function(req, res) {
    //var data = {data: []};

    models.Message
      .find()
      .sort('-date')
      .exec(displayPosts);

      function displayPosts(err, data)  {
      	//console.log(err);
      	res.render('index', {'data': data})
      }

    //res.render("index", data);
}