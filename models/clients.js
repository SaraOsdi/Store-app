const mongoose = require('mongoose');

 const clientSchema = new mongoose.Schema({
         name: {
         type: String,
        required: true
        },
    email: {
       type: String,
        required: true
    },
    id: {
         type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
     }
})

 const Client = mongoose.model('Client', clientSchema);

 module.exports = Client;

var clients = Client.find({});

 //app.post('/clientDetails', function (req, res, next) {
    // var clientDetails = new clientModel({
     //    name: req.body.uname,
      //   email: req.body.email,
       // id: req.body.Id,
      //   phone: req.body.Phone,
      //  address: req.body.address,
  //  });
  // });

// clientDetails.save(function (err, req1) {
//     if (err) throw err;
//     clients.exec(function (err, data) {
//         if (err) throw err;
//         res.render('index', { title: 'Client Records', records: data, success: 'Record Inserted Successfully' });
//     });
// })
//     .then(data => {
//         console.log('it works!!');
//     })
//     .catch(err => {

//         console.log(err);
//     })


