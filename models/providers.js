const mongoose = require('mongoose');
const providerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    adress: {
        type: String,
        require: true
    },

    category: {
        type: String,
        require: true
    },



})
const Providers = mongoose.model('provider', providerSchema);
Providers.insertMany([
    { name: "dior ", adress: "TV", category: "בשמים" },
    { name: "chanel", adress: "אשדוד", category: "קרמים" },
    { name: "אסתי לאודר", adress: "אשקלון", category: "מארזים" }

]).then(data => {
    console.log('it works!!');
})
    .catch(err => {

        console.log(err);
    })