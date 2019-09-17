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
  displayAll()
  });


function displayAll() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
      console.log("---------------------------------------------------");
      console.log("Inventory")
      console.log("---------------------------------------------------");
      console.log("Item ID | Product | Department | Price | Available ")
      console.log("---------------------------------------------------");

      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + 
        res[i].product_name + " | " + 
        res[i].departmemt_name + " | " + 
        res[i].price + " | " + 
        res[i].stock_quantity);
    }
    console.log("----------------------------------------------------");
    connection.end();
  });
};