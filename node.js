
// to build up the express server-imports
const express = require("express");
const app = express();
const product = require('./models/products');
const provider = require('./models/providers');
const client = require('./models/clients');


//to build up the db
const { default: mongoose } = require("mongoose");
const { Router } = require("express");
mongoose.connect('mongodb://127.0.0.1:27017/project', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connection open!!');
    })
    .catch(err => {
        console.log('connection erorr!!');
        console.log(err);
    })


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/project.html");
});
//get/posr from user
// app.get('/', (req, res) => {
//     res.send("<h1> we got your request! thank you </h1>");
// })

// app.get('/products', async (req, res) => {// recive all products from my db
//     const products = await product.find({});
//     console.log(products);
// })

app.get('/products/:id', async (req, res) => {//חיפוש לפי ID
    const { id } = req.params;
    const products = await product.findById(id);
})

app.post('/prducts/:id', async (req, res) => {
    const { id } = req.params;
    const pro = await product.findByIdAndUpdate(id, req.body, { runValidators: true });
})

Router.post('/filter', async (req, res) => {
    const { category } = req.body.category;
    // const { price } = req.body.price;
    // const { quantity } = req.body.quantity;
    const pro = await product.find(category, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    });
})
app.post('/prducts/:id', async (req, res) => {
    const { id } = req.params;
    const pro = await product.findByIdAndDelete(id);

})

app.post('product/r', async (req, res) => {
    const newProduct = new product(req.body);
    await newProduct.save();
})


app.get('/providers', async (req, res) => {// recive all products from my db
    const providers = await provider.find({});
    console.log(providers);
})
app.get('/providers/:id', async (req, res) => {//חיפוש לפי ID
    const { id } = req.params;
    const providers = await provider.findById(id);
})

app.post('/providers/:id', async (req, res) => {
    const { id } = req.params;
    const pro = await provider.findByIdAndUpdate(id, req.body, { runValidators: true });
})
app.post('/providers/:id', async (req, res) => {
    const { id } = req.params;
    const pro = await provider.findByIdAndDelete(id);

})

app.post('provider/r', async (req, res) => {
    const newProvider = new provider(req.body);
    await newProvider.save();
})

app.get('/clients', async (req, res) => {// recive all products from my db
    const customers = await client.find({});
    console.log(clients);
})
app.get('/clients/:id', async (req, res) => {//חיפוש לפי ID
    const { id } = req.params;
    const clients = await client.findById(id);
})

app.post('/clients/:id', async (req, res) => {
    const { id } = req.params;
    const cli = await client.findByIdAndUpdate(id, req.body, { runValidators: true });
})
app.post('/clients/:id', async (req, res) => {
    const { id } = req.params;
    const cli = await client.findByIdAndDelete(id);

})

app.post('client/r', async (req, res) => {
    const newClient = new client(req.body);
    await newClient.save();
})




// // to build up the express server-listening on port 6000
// app.listen(20000, () => {
//     console.log("this app is listening on port 20000!");
// })




