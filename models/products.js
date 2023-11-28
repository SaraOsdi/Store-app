const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true,
        min: 0

    },
    category: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true,
        min: 0
    },


})
const Product = mongoose.model('Product', productSchema);

Product.insertMany([
    { name: "Chloe קלואה נומאד אדפ 75 מל + תחליב גוף 100 מל + אדפ 5 מל", price: 429, category: 'boxes', quantity: 0 },
    { name: "  מארז לגבר GENTLEMAN RP EDP 100 מל+מוקטן 12.5 מל+ ג'ל רחצה 75 מל ", price: 370, category: 'boxes', quantity: 0 },
    { name: " סט אמברקומבי בלו לגבר 100 מל + 15 מל", price: 189, category: 'boxes', quantity: 0 },
    { name: "LADY MILLION א.ד.פ 50 מל+ תחליב גוף 75 מל לאישה", price: 199, category: 'boxes', quantity: 0 },
    { name: "סט גולדן סנרייז בושם לאישה 100 מל+דאודורנט 200 מל ", price: 249,category: 'boxes', quantity: 0 },
    { name: "בושם מולקולות לאשה", price: 149,category: 'perfume', quantity: 0 },
    { name: "בושם אליאן לאשה ", price: 399,category: 'perfume', quantity: 0 },
    { name: "בושם נשים Coco Mademoiselle L'Eau Privée Chanel א.ד.פ 100 מ”ל שאנל", price: 599,category: 'perfume', quantity: 0 },
    { name: " LA VIE EST BELLE EAU DE PARFUM לה וי אה בל או דה פרפיום", price: 289,category: 'perfume', quantity: 0 },
    { name: "בושם ורסצ'ה לאשה", price: 299,category: 'perfume', quantity: 0 },
    { name: " בושם גברים Sauvage Dior EDP 100 מ”ל דיור", price: 499,category: 'perfume', quantity: 0 },
    { name: " בושם AL HARAMAIN AMBER OUD GOLD א.ד.פ", price: 299,category: 'perfume', quantity: 0 },
    { name: " בושם TOM FORD BLACK ORCHID א.ד.פ", price: 579,category: 'perfume', quantity: 0 },
    { name: "BY Kilia Woman In Gold א.ד.פ לאשה", price: 999,category: 'perfume', quantity: 0 },
    { name: " HERMES TERE D א.ד.ט לגבר", price: 790,category: 'perfume', quantity: 0 },
    { name: "  KAJAL HOMME II א.ד.פ לגבר", price: 699,category: 'perfume', quantity: 0 },
    { name: "  Gentlemen Only Givenchy edt Men", price: 269,category: 'perfume', quantity: 0 },
    { name: 'Méthode Jeanne Piaubert קרם לעור יבש עד רגיל הידרו אקטיב ', price: 191,category: 'creams', quantity: 0 },
    { name: 'Clinique קרם לחות במרקם קליל SPF25', price: 157,category: 'creams', quantity: 0 },
    { name: 'Stendhal קרם לחות הידרו הרמוני', price: 333,category: 'creams', quantity: 0 },
    { name: 'Lancome קרם רנגי H.P.N פפטידים', price: 458,category: 'creams', quantity: 0 },
    { name: 'Estee Lauder קרם לחות דיי וור לעור יבש SPF 15', price: 242,category: 'creams', quantity: 0 },
    { name: 'Stendhal קרם לחות פור לוקס אנטי אייגינג במרקם קליל', price: 974,category: 'creams', quantity: 0 },
    { name: 'Méthode Jeanne Piaubert קרם יום סקין ברקפסט ', price: 131,category: 'creams', quantity: 0 },
    { name: 'Méthode Jeanne Piaubert קרם יום ולילה דיווין סקין', price: 303,category: 'creams', quantity: 0 },
    { name: 'Estee Lauder קרם לילה רוויטלייזינג סופרים+ לשיקום אינטינסיבי', price: 331,category: 'creams', quantity: 0 },
    { name: 'Clinique קרם לחות במרקם גל ל-100 שעות', price: 131,category: 'creams', quantity: 0 }



]).then(data => {
    console.log('it works!!');
})
    .catch(err => {

        console.log(err);
    })

