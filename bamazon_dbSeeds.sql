DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 4) NOT NULL,
    stock_quantity INT,
	primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BOB Rambler Jogging Stroller ", "Baby Travel Gear", 299.99, 70), 
        ("Munchkin Wipe Warmer", "Diaper Wipes & Refills", 24.70, 92), 
        ("Huggies Dry Baby Diapers", "Disposable Diapers", 42.53, 50), 
        ("Graco Harness Booster Seat", "Baby Travel Gear", 99.99, 52), 
        ("Boogie Wipes", "Diaper Wipes & Refills", 20.21, 270), 
        ("Simple Joys Baby Pajamas", "Baby Clothing", 22.30, 290), 
        ("Burt's Bees Baby Wash", "Baby Bathing Products", 14.99, 95), 
        ("All-Purpose First Aid Kit Case", "Supplies", 16.82, 462), 
        ("Loulou Lollipop Llama Soft Teether", "Toys", 26.00, 30), 
        ("Fisher-Price Rock-a-stack and First Blocks", "Toys", 14.75, 45);

SELECT * FROM products;