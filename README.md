# Bamazon
Bamazon (Customer solution) allows users to see the inventory of products available for purchase, then it requests for information about product ID and quantity they want to purchase.
Once the information is validated, the database is updated, and the user receives a message with total amount to pay.

## How it works?
At the terminal prompt just type **node bamazonCustomer.js**
The app will run automatically after that.

## 

#### 1. Run node bamazonCustomer.js to start the app and display inventory
![display_inventory](images/displayInventory.PNG)

#### 2. Once inventory is display, Bamazon requests the user to enter product ID and number of items he/she wants to buy. The app will display information about the item selected, the total amount the user will have to pay, and the updated quantity for the item purchased.
![user_input](images/userInput.PNG)

#### 3. Restarting the app will show the updated quantity for item previously purchased.
![updated_quantity](images/updatedQuantity.PNG)

#### 4. If the quantity required by the user is higher than what exists in inventroy, the app will display the product information and terminates conenctivity.
![not_available](images/notAvailable.PNG)


## Technology
This project was built with JavaScript, Node, MySQL
notAvailable
