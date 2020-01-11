# BAMAZON-Store-App **:gift:**

### Overview

BAMAZON is an command prompt (CLI) shopping platform. A Node.JS, CLI application that allows the user to engage in online ordering with data persistence via MySQL. This application also incorporates Inquirer in order to facilitate user movement through the online store in a clean and concise way. 

### BAMAZON's Commands

	* `node bamazonCustomer.js`


### Prerequisites

- Clone down repo.
- Node.js - Download the latest version of Node https://nodejs.org/en/
- MySQL - Start MySQL server on your computer and execute the queries found in the bamazon_dbSeeds.sql file to create the database and products table.
- Run command 'npm install' in Terminal or GitBash.


### What App Does

App starts by displaying all available items to purchase in a table. The application then prompts the customer to enter the name of a product they'd like to purchase. Once the user has input a value, the application asks how many the user would like to purchase. The available items table displays again with the updated stock. The app then asks if the user would like to make additional purchases or quit. If the user selects Q, the application will disconnect from mysql and stop.


### Tech Used

* [NodeJS Website](https://nodejs.org/en/ "Node.js")
* [MySQL Module](https://www.npmjs.com/package/mysql/ "mysql")
* [Inquirer Module](https://www.npmjs.com/package/inquirer/ "inquirer")
* [Dot-env Module](https://www.npmjs.com/package/dot-env "Dot-env")
* [console.table Module](https://www.npmjs.com/package/console.table/ "console.table")



### Built With
- Visual Studio Code - Text Editor



////////////////////////////////////////////////////

### Screenshots and Additional Information

Customer User Experience | Results
---- | -------------
Customer Entry, with prompts on desire to start shopping | ![Customer Entry](/images/customerEntry.JPG)
If the user decides to shop at Bamazon, the current inventory is displayed | ![Customer Inventory](/images/customerInventory.JPG)
The user is then prompted to answer a few questions about the item that they want to purchase and if enough stock of that item exists, then the purchase will be successful and the total cost of the purchase will be displayed | ![Customer Purchase](/images/customerPurchase.JPG)
If the user tries to buy an item but the stock is too low to meet their needs, they will be notified that thier purchase has not been successful and will be asked if they want to shop again | ![Customer Low Inventory](/images/customerLowInventory.JPG)
Once the user is done with all of their shopping, they may select to leave the store, this action terminates the connection with MySQL | ![Customer End](/images/customerEnd.JPG)

===================================================================

