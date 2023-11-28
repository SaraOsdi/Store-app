const boxes = [
    { name: "Chloe קלואה נומאד אדפ 75 מל + תחליב גוף 100 מל + אדפ 5 מל", price: 429, quantity: 0 },
    { name: "מארז לגבר GENTLEMAN RP EDP 100 מל+מוקטן 12.5 מל+ ג'ל רחצה 75 מל ", price: 370, quantity: 0 },
    { name: " סט אמברקומבי בלו לגבר 100 מל + 15 מל", price: 189, quantity: 0 },
    { name: "LADY MILLION א.ד.פ 50 מל+ תחליב גוף 75 מל לאישה", price: 199, quantity: 0 },
    { name: "סט גולדן סנרייז בושם לאישה 100 מל+דאודורנט 200 מל ", price: 249, quantity: 0 }

];
let shoppingCart = [];

const perfume = [
    { name: "בושם מולקולות לאשה", price: 149, quantity: 0 },
    { name: "בושם אליאן לאשה ", price: 399, quantity: 0 },
    { name: "בושם נשים Coco Mademoiselle L'Eau Privée Chanel א.ד.פ 100 מ”ל שאנל", price: 599, quantity: 0 },
    { name: " LA VIE EST BELLE EAU DE PARFUM לה וי אה בל או דה פרפיום", price: 289, quantity: 0 },
    { name: "בושם ורסצ'ה לאשה", price: 299, quantity: 0 },
    { name: " בושם גברים Sauvage Dior EDP 100 מ”ל דיור", price: 499, quantity: 0 },
    { name: " בושם AL HARAMAIN AMBER OUD GOLD א.ד.פ", price: 299, quantity: 0 },
    { name: " בושם TOM FORD BLACK ORCHID א.ד.פ", price: 579, quantity: 0 },
    { name: "BY Kilia Woman In Gold א.ד.פ לאשה", price: 999, quantity: 0 },
    { name: " HERMES TERE D א.ד.ט לגבר", price: 790, quantity: 0 },
    { name: "  KAJAL HOMME II א.ד.פ לגבר", price: 699, quantity: 0 },
    { name: "  Gentlemen Only Givenchy edt Men", price: 269, quantity: 0 }

];
const creams = [
    { name: 'Méthode Jeanne Piaubert קרם לעור יבש עד רגיל הידרו אקטיב ', price: 191, quantity: 0 },
    { name: 'Clinique קרם לחות במרקם קליל SPF25', price: 157, quantity: 0 },
    { name: 'Stendhal קרם לחות הידרו הרמוני', price: 333, quantity: 0 },
    { name: 'Lancome קרם רנגי H.P.N פפטידים', price: 458, quantity: 0 },
    { name: 'Estee Lauder קרם לחות דיי וור לעור יבש SPF 15', price: 242, quantity: 0 },
    { name: 'Stendhal קרם לחות פור לוקס אנטי אייגינג במרקם קליל', price: 974, quantity: 0 },
    { name: 'Méthode Jeanne Piaubert קרם יום סקין ברקפסט ', price: 131, quantity: 0 },
    { name: 'Méthode Jeanne Piaubert קרם יום ולילה דיווין סקין', price: 303, quantity: 0 },
    { name: 'Estee Lauder קרם לילה רוויטלייזינג סופרים+ לשיקום אינטינסיבי', price: 331, quantity: 0 },
    { name: 'Clinique קרם לחות במרקם גל ל-100 שעות', price: 131, quantity: 0 }

];

function updateQuantity(nameArray, index, delta) {

    let currentArr = [];
    switch (nameArray) {
        case 'boxes':
            currentArr = boxes
            break;
        case 'perfume':
            currentArr = perfume
            break
        case 'creams':
            currentArr = creams
            break
        default:
            break;
    }
    currentArr[index].quantity += delta;
    if (currentArr[index].quantity < 0) {
        currentArr[index].quantity = 0;
    }
    document.getElementById("quantity" + index).innerHTML = currentArr[index].quantity;
    calculateTotal(currentArr);
    addToCart(index, currentArr[index].name, currentArr[index].price);
}
function calculateTotal(currentArr) {
    let total = 0;
    for (let i = 0; i < currentArr.length; i++) {
        total += currentArr[i].price * currentArr[i].quantity;
    }
    document.getElementById("total").innerHTML = total;
}

// function addToCart(arr) {
//     let cart = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].quantity > 0) {
//             cart += arr[i].name + " x " + arr[i].quantity + "\n";
//         }
//     }
//     if (cart === "") {
//         alert("אנא בחר לפחות מוצר אחד להוספה לסל!");
//     } else {
//         alert("המוצרים הבאים נוספו לסל:\n\n" + cart + "\nסך הכל: " + document.getElementById("total").innerHTML + " שקלים");
//     }
// }



function addToCart(id, name, price) {
    let product = {
        id: id,
        name: name,
        price: price
    };
    shoppingCart.push(product);
}

function generateTable() {

    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    let headerRow = tbl.insertRow();
    headerRow.innerHTML = '<th>Product</th><th>Price</th>';
    // creating all cells
    //  for (let i = 0; i < 2; i++) 
    // creates a table row
    const row = document.createElement("tr");

    //for (let j = 0; j < 2; j++) {
    for (let product of shoppingCart) {
        // let row = tbl.insertRow();
        // row.innerHTML = `<td>${product.name}</td><td>${product.price}</td>`;

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        console.log("product", product.name)
        cell.innerHTML = `<td>${product.name}</td><td>${product.price}</td>`;
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);


    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}

function updateCartUI() {
    let cartContentsElement = document.getElementById('cart-contents').innerHTML;
    console.log("lslslsl", cartContentsElement)
    cartContentsElement.innerHTML = '';

    let cartTable = document.createElement('table');
    console.log("table", cartTable)

    let headerRow = cartTable.insertRow();
    headerRow.innerHTML = '<th>Product</th><th>Price</th>';

    for (let product of shoppingCart) {
        let row = cartTable.insertRow();
        row.innerHTML = `<td>${product.name}</td><td>${product.price}</td>`;
    }

}




