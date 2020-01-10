var inquirer = require("inquirer");
var mysql = require("mysql");
// var conTable = require ("console.table");

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
    console.log("connection scuccess!");
    makeTable();
    // console.log("connected as id " + connection.threadId);
    // connection.end();
  });

  var makeTable = function () {
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i=0; i<res.length; i++){
            console.log(res[i].item_id+" || "+res[i].product_name+" || "+res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quantity+" \n ");
        }
        promptCustomer(res);
    });
  }

  var promptCustomer = function(res){
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: "What would like to purchase? [Quit with Q]"
        }]).then(function(answer){
            var correct = false;
            if(answer.choice.toUpperCase()=="Q"){
                process.exit();
            }
            for(var i=0;i<res.length;i++){
                if(res[i].product_name==answer.choice){
                    correct=true;
                    var product=answer.choice;
                    var id=i;
                    inquirer.prompt({
                        type: "input",
                        name: "quant",
                        message: "How many would you like to buy?",
                        validate: function(value){
                            if(isNaN(value) == false){
                                return true;    
                            } else {
                                return false;
                            }
                        }
                    }).then(function(answer){
                    if((res[id].stock_quantity-answer.quant)>0){
                        connection.query("UPDATE products SET stock_quantity='"+(res[id].stock_quantity-answer.quant)+"' WHERE product_name='"+product +"'", function(err,res2){
                            console.log("Product Bought!");
                            makeTable();  
                    })
                } else {
                    console.log("Not a valid selection!");
                    promptCustomer(res);
                }
            })
         }
        }
            if (i==res.length && correct==false) {
            console.log("Not a valid selection!");
            promptCustomer(res);    
        }
    })
}
  

// function displayAll(){

//     connection.query("SELECT * FROM store", function(err, data){
//         if (err) throw err;
//         console.log("==============================================================================")
//         console.table(data);
//         console.log("==============================================================================")
//     })

// }

// displayAll();
// setTimeout(runGame, 1500);

// function totalCalc (data, count){
//     var total = data[0].price * count;
//     return total;
// }

// function updateStock(data, count, id){
//     var stock = data[0].stock_quantity - count;
//     connection.query(`UPDATE store SET stock_quantity = ${stock} WHERE item_id = ${id}`);
//     return stock;
// }
// function updateProductSales(data, count, id){
//     var product_sales = data[0].price * count;
//     connection.query(`UPDATE store SET product_sales = ${product_sales} WHERE item_id = ${id}`);
// }
// function again(){
//     inquirer.prompt([
//         {
//             type: "list",
//             message: "Would you like to purchase anything else?",
//             choices: ["yes", "no"],
//             name: "confirm"
//         }
//     ]).then(function(answer){
//         if (answer.confirm === "yes"){
//             runGame();
//         } else{
//             connection.end();
//             console.log("Thank you!");
//         }
//     })
// }
// function runGame (){
//     inquirer.prompt([
//         {
//             message: "Enter ID of the product you'd like to purchase",
//             name: "id"
//         }, 
//         {
//             message: "How many items would you like to purchase??",
//             name: "count"
//         }
//     ]).then(function(answer){
//         var id = parseInt(answer.id);
//         var count = parseInt(answer.count);
        
//         connection.query(`SELECT * FROM store WHERE item_id = ${id}`, function (err, data){
//                 if (err) {
//                     console.log("We're sorry, that doesn't appear to be a valid input. Please try again.")
//                     return runGame();
//                 };

//                 if(count <= data[0].stock_quantity){
//                     console.log(`Purchase successful! You've purchased ${count} ${data[0].product_name}.`);
//                     console.log(`Your total is $${totalCalc(data, count)}.`);
//                     updateStock(data, count, id);
//                     updateProductSales(data, count, id);
//                     setTimeout(displayAll, 2500);
//                 } else {
//                     console.log(`There doesn't appear to be enough inventory of ${data[0].product_name}`);
//                     console.log(`Looks like there's only ${data[0].stock_quantity} left`);
//                 }
            
    
//                 setTimeout(again, 5500);

//         })


//     })
// }

// id and amount 
//check store determine if enough items and either fulfill order or state theres not enough
//update database to show updated totals 
//let customer know their total