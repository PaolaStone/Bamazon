DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
​USE bamazonDB;
​CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
  ("pen", "office", 3.50, 100),
  ("eraser", "office", 2.50, 100),
  ("notebook", "office", 5, 100),
  ("laptop","electronics", 800, 50),
  ("monitor", "electronics", 200, 50),
  ("windex", "cleaning", 6.30, 70),
  ("detergent", "cleaning", 12, 70),
  ("coockies", "food", 3, 100),
  ("orange", "food", 1, 100),
  ("cereal", "food", 6, 100)