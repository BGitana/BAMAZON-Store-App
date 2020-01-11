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



