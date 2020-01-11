var inquirer = require("inquirer");
var mysql = require("mysql");
var conTable = require("console.table");

var connection = mysql.createConnection({
  // Your port; if not 3306
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Must have correct your password
  password: "rootgitana2!",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connection Successful!");
  makeTable();
  // console.log("connected as id " + connection.threadId);
  // connection.end();
});

var makeTable = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    console.log(
      "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - "
    );
    // Show User message
    // console.log("Welcome to BAMAZON. Check out our selection...\n");
    console.log(
      "- - - - Welcome to BAMAZON. Check out our BABY product selection! - - - - "
    );

    console.log(
      "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \n"
    );

    // Set up table header
    console.log(
      "ID" +
        " ||" +
        " Product Name " +
        "         ||" +
        " Department Name" +
        "      ||" +
        " Price " +
        "||" +
        " In Stock" +
        " \n "
    );

    console.log(
      "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - "
    );

    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].item_id +
          " || " +
          res[i].product_name +
          " || " +
          res[i].department_name +
          " || " +
          res[i].price +
          " || " +
          res[i].stock_quantity +
          " \n "
      );
    }
    console.log(
      "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - "
    );
    promptCustomer(res);
  });
};

var promptCustomer = function(res) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What would like to purchase? [Quit with Q]"
      }
    ])
    .then(function(answer) {
      var correct = false;
      if (answer.choice.toUpperCase() == "Q") {
        process.exit();
      }
      for (var i = 0; i < res.length; i++) {
        if (res[i].product_name == answer.choice) {
          correct = true;
          var product = answer.choice;
          var id = i;
          inquirer
            .prompt({
              type: "input",
              name: "quant",
              message: "How many would you like to buy?",
              validate: function(value) {
                if (isNaN(value) == false) {
                  return true;
                } else {
                  return false;
                }
              }
            })
            .then(function(answer) {
              if (res[id].stock_quantity - answer.quant > 0) {
                connection.query(
                  "UPDATE products SET stock_quantity='" +
                    (res[id].stock_quantity - answer.quant) +
                    "' WHERE product_name='" +
                    product +
                    "'",
                  function(err, res2) {
                    console.log("Product Bought!");
                    makeTable();
                  }
                );
              } else {
                console.log("Not a valid selection!");
                promptCustomer(res);
              }
            });
        }
      }
      if (i == res.length && correct == false) {
        console.log("Not a valid selection!");
        promptCustomer(res);
      }
    });
};
