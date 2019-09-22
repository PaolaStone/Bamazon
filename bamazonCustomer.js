var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "12345678",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  displayAll();
});




function displayAll() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
      console.log("");
      console.log("                    Inventory")
      console.log("---------------------------------------------------");
      console.log("");
      
      for (var i = 0; i < res.length; i++) {
        console.log("Item ID:       " + res[i].item_id); 
        console.log("Product:       " + res[i].product_name); 
        console.log("Department:    " + res[i].department_name); 
        console.log("Price:         $" + res[i].price.toFixed(2));
        console.log("Qty in stock:  " + res[i].stock_quantity);
        console.log("----------------------------------------------------");
    }
    console.log("----------------------------------------------------");
    console.log("");
    customerChoice();
    // connection.end();
  });
};

function customerChoice() {
  inquirer
    .prompt([
      {
        name: "item_id",
        type: "number",
        message: "Please enter the ID of the product you would like to buy  ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          // return false;
          connection.end();
          console.log("");
          console.log("This is not a valid entry, please start process from beginning");
        }
      },
      {
        name: "quantity",
        type: "number",
        message: "How many would you like to buy?  ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          // return false;
          connection.end();
          console.log("");
          console.log("This is not a valid entry, please start process from beginning");
        }
      }
    ])
    .then(function(answer) {
      var query = "SELECT item_id, product_name, product_name, price, stock_quantity FROM products WHERE ?";
      connection.query(query, { item_id: answer.item_id}, function(err, res) {
        if (err) throw err;
          for (var i = 0; i < res.length; i++) {
            console.log("")
            console.log(" This is what we have in inventory for this product")
            console.log("---------------------------------------------------");
            console.log("Product:       " + res[i].product_name);
            console.log("Price:         $" + res[i].price.toFixed(2));
            console.log("Qty. in stock: " + res[i].stock_quantity);
            console.log("");
            if (answer.quantity > res[i].stock_quantity){
              console.log("---------------------------------------------------")
              console.log("***Sorry, we do not have the quantity you need***")
              console.log("---------------------------------------------------")
              connection.end();
            }else{
              customerTotal = answer.quantity * res[i].price
              quantityUpdate = res[i].stock_quantity - answer.quantity
              console.log("")
              console.log("---------------------------------------------------");
              console.log("This is the total of your purchase: $" + customerTotal);
              console.log("---------------------------------------------------");
              connection.query(
                "UPDATE products SET ? WHERE ?",
                  [
                    {
                      stock_quantity: quantityUpdate
                    },
                    {
                      item_id: answer.item_id
                    }
                  ],
              );
                console.log("")
                console.log("")
                console.log(" This is what we have in inventory after this purchase")
                console.log("---------------------------------------------------");
                console.log("Product:       " + res[i].product_name);
                console.log("Price:         $" + res[i].price.toFixed(2));
                console.log("Qty. in stock: " + quantityUpdate);
                console.log("");
                connection.end();
              
            }
          
        };
        
    });
})};
