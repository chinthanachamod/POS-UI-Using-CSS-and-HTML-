/*Add navigation event listeners to display corresponding sections and hide others
=============================================================================================*/

/*Select navigation elements by ID for future event handling*/
let dashboard_nav = document.getElementById("dashboard-nav");
let signin_nav = document.getElementById("signin-nav");
let signup_nav = document.getElementById("signup-nav");
let customer_nav = document.getElementById("customer-nav");
let item_nav = document.getElementById("item-nav");
let order_nav = document.getElementById("order-nav");
let order_history_nav = document.getElementById("order-history-nav");


/*Select section elements by ID for content management*/
let dashboard_section = document.getElementById("dashboardSection");
let signin_section = document.getElementById("signinSection");
let signup_section = document.getElementById("signupSection");
let customer_section = document.getElementById("customerSection");
let item_section = document.getElementById("itemSection");
let order_section = document.getElementById("orderSection");
let order_history_section = document.getElementById("orderHistorySection");


/*Show dashboard section and hide other sections for navigation control*/
dashboard_section.style.display="block";
signin_section.style.display="none";
signup_section.style.display="none";
customer_section.style.display="none";
item_section.style.display="none";
order_section.style.display="none";
order_history_section.style.display="none";


/*Add click event to dashboard navigation for section visibility control*/
dashboard_nav.addEventListener('click', function () {
    dashboard_section.style.display="block"
    signin_section.style.display="none"
    signup_section.style.display="none";
    customer_section.style.display="none";
    item_section.style.display="none";
    order_section.style.display="none";
    order_history_section.style.display="none";
});


/*Implement click event for sign-in navigation to show sign-in section*/
signin_nav.addEventListener('click', function () {
    dashboard_section.style.display="none"
    signin_section.style.display="block"
    signup_section.style.display="none";
    customer_section.style.display="none";
    item_section.style.display="none";
    order_section.style.display="none";
    order_history_section.style.display="none";
});


/*Add click event for sign-up navigation to display sign-up section*/
signup_nav.addEventListener('click', function () {
    dashboard_section.style.display="none"
    signin_section.style.display="none"
    signup_section.style.display="block";
    customer_section.style.display="none";
    item_section.style.display="none";
    order_section.style.display="none";
    order_history_section.style.display="none";
});


/*Implement click event for customer navigation to show customer section*/
customer_nav.addEventListener('click', function () {
    dashboard_section.style.display="none"
    signin_section.style.display="none"
    signup_section.style.display="none";
    customer_section.style.display="block";
    item_section.style.display="none";
    order_section.style.display="none";
    order_history_section.style.display="none";
});


/*Implement click event for item navigation to show item section*/
item_nav.addEventListener('click', function () {
    dashboard_section.style.display="none"
    signin_section.style.display="none"
    signup_section.style.display="none";
    customer_section.style.display="none";
    item_section.style.display="block";
    order_section.style.display="none";
    order_history_section.style.display="none";
});

/*Implement click event for order navigation to show order section*/
order_nav.addEventListener('click', function () {
    dashboard_section.style.display="none"
    signin_section.style.display="none"
    signup_section.style.display="none";
    customer_section.style.display="none";
    item_section.style.display="none";
    order_section.style.display="block";
    order_history_section.style.display="none";
});

/*Implement click event for order history navigation to show order history section*/
order_history_nav.addEventListener('click', function () {
    dashboard_section.style.display="none"
    signin_section.style.display="none"
    signup_section.style.display="none";
    customer_section.style.display="none";
    item_section.style.display="none";
    order_section.style.display="none";
    order_history_section.style.display="block";
});


/*
=======================================================================================================*/

/*
Add functionality to handle customer CRUD operations
Note: The customer_array variable is assumed to be an array of customer objects with properties id, customer_name, customer_email, and mobile.
 */
let customer_array = [];

// Function to load customers into the table
const loadCustomerTable = () => {
    $("#customerTableBody").empty(); // Clear the table body before adding rows

    customer_array.map((item, index) => {
        let data = `
            <tr>
                <td>${item.id}</td>
                <td>${item.customer_name}</td>
                <td>${item.customer_email}</td>
                <td>${item.mobile}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editCustomer(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteCustomer(${index})">Delete</button>
                </td>
            </tr>`;
        $("#customerTableBody").append(data); // Append the customer row
    });
}

// Function to delete a customer
const deleteCustomer = (index) => {
    customer_array.splice(index, 1); // Remove the customer at the index
    loadCustomerTable(); // Reload the table
}

// Function to edit a customer
const editCustomer = (index) => {
    let customer = customer_array[index];

    // Populate form fields with the existing customer data for editing
    $('#customerName').val(customer.customer_name);
    $('#customerEmail').val(customer.customer_email);
    $('#customerPhone').val(customer.mobile);

    // Update Save button to act as an "Update" button
    $("#customer_save_btn").text("Update").off("click").on("click", function() {
        customer.customer_name = $('#customerName').val();
        customer.customer_email = $('#customerEmail').val();
        customer.mobile = $('#customerPhone').val();

        loadCustomerTable(); // Reload the table
        $("#customerForm")[0].reset(); // Clear form fields

        // Reset Save button back to "Save"
        $("#customer_save_btn").text("Save").off("click").on("click", addCustomer);
    });
}

// Function to add a new customer
const addCustomer = () => {
    let customer_name = $('#customerName').val();
    let customer_email = $('#customerEmail').val();
    let mobile = $('#customerPhone').val();

    if (!customer_name || !customer_email || !mobile) {
        alert("Please fill all fields");
        return;
    }

    // Create a new customer object with an auto-incremented ID
    let customer = {
        id: customer_array.length + 1,
        customer_name: customer_name,
        customer_email: customer_email,
        mobile: mobile,
    };

    // Add the new customer to the array
    customer_array.push(customer);

    loadCustomerTable(); // Reload the table to show the new customer
    $('#customerForm')[0].reset(); // Clear form fields after saving
}

// Attach addCustomer function to Save button
$("#customer_save_btn").on("click", addCustomer);


/*
==========================================================================================================*/

/*
Add functionality to handle item CRUD operations
Note: The item_array variable is assumed to be an array of item objects with properties id, item_name, item_price, and item_quantity.
 */

let item_array = [];

// Function to load items into the table
const loadItemTable = () => {
    $("#itemTableBody").empty(); // Clear the table body before adding rows

    item_array.map((item, index) => {
        let data = `
            <tr>
                <td>${item.id}</td>
                <td>${item.item_name}</td>
                <td><img src="${item.item_image}" alt="${item.item_name}" class="img-fluid" style="max-width: 50px;"></td>
                <td>Rs.${item.item_price}</td>
                <td>${item.item_quantity}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editItem(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteItem(${index})">Delete</button>
                </td>
            </tr>`;
        $("#itemTableBody").append(data); // Append the item row
    });
}

// Function to delete an item
const deleteItem = (index) => {
    item_array.splice(index, 1); // Remove the item at the index
    loadItemTable(); // Reload the table
}

// Function to edit an item
const editItem = (index) => {
    let item = item_array[index];

    // Populate form fields with the existing item data for editing
    $('#itemName').val(item.item_name);
    $('#itemPrice').val(item.item_price);
    $('#itemQty').val(item.item_quantity);
    $('#itemImage').val(item.item_image);

    // Update Save button to act as an "Update" button
    $("#item_save_btn").text("Update").off("click").on("click", function() {
        item.item_name = $('#itemName').val();
        item.item_price = $('#itemPrice').val();
        item.item_quantity = $('#itemQty').val();
        item.item_image = $('#itemImage').val();

        loadItemTable(); // Reload the table
        $("#itemForm")[0].reset(); // Clear form fields

        // Reset Save button back to "Save"
        $("#item_save_btn").text("Save").off("click").on("click", addItem);
    });
}

// Function to add a new item
const addItem = () => {
    let item_name = $('#itemName').val();
    let item_price = $('#itemPrice').val();
    let item_quantity = $('#itemQty').val();
    let item_image = $('#itemImage').val();

    if (!item_name || !item_price || !item_quantity || !item_image) {
        alert("Please fill all fields");
        return;
    }

    // Create a new item object with an auto-incremented ID
    let item = {
        id: item_array.length + 1,
        item_name: item_name,
        item_price: item_price,
        item_quantity: item_quantity,
        item_image: item_image,
    };

    // Add the new item to the array
    item_array.push(item);

    loadItemTable(); // Reload the table to show the new item
    $('#itemForm')[0].reset(); // Clear form fields after saving
}

// Attach addItem function to Save button
$("#item_save_btn").on("click", addItem);


/*
==========================================================================================================*/

/*
Add functionality to handle order operations
Note: The order_array variable is assumed to be an array of order objects with properties id, customer_id, total_amount, and order_date.
 */


let order_array = [];

// Function to load orders into the table
const loadOrderTable = () => {
    $("#orderTableBody").empty(); // Clear the table body before adding rows

    order_array.map((order, index) => {
        let data = `
            <tr>
                <td>${order.id}</td>
                <td>${order.customer_name}</td>
                <td>${order.item_name}</td>
                <td>${order.quantity}</td>
                <td>Rs.${order.unit_price.toFixed(2)}</td>
                <td>Rs.${order.total_price.toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editOrder(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteOrder(${index})">Delete</button>
                </td>
            </tr>`;
        $("#orderTableBody").append(data); // Append the order row to the table body
    });
}

// Function to delete an order
const deleteOrder = (index) => {
    order_array.splice(index, 1); // Remove the order at the index
    loadOrderTable(); // Reload the table
}

// Function to edit an order
const editOrder = (index) => {
    let order = order_array[index];

    // Populate form fields with the existing order data for editing
    $('#ordercustomerName').val(order.customer_name);
    $('#orderitemName').val(order.item_name);
    $('#quantity').val(order.quantity);

    // Update Save button to act as an "Update" button
    $("#order_save_btn").text("Update").off("click").on("click", function() {
        order.customer_name = $('#ordercustomerName').val();
        order.item_name = $('#orderitemName').val();
        order.quantity = $('#quantity').val();
        order.total_price = order.unit_price * order.quantity;

        loadOrderTable(); // Reload the table
        $("#orderForm")[0].reset(); // Clear form fields

        // Reset Save button back to "Place Order"
        $("#order_save_btn").text("Place Order").off("click").on("click", addOrder);
    });
}

// Function to add a new order
const addOrder = () => {
    let customer_name = $('#ordercustomerName').val();
    let item_name = $('#orderitemName').val();
    let quantity = $('#quantity').val();

    // Validate form inputs
    if (!customer_name || !item_name || !quantity) {
        alert("Please fill all fields");
        return;
    }

    // Define unit price for simplicity (you can change this logic as needed)
    let unit_price = 100; // For example purposes
    let total_price = unit_price * quantity;

    // Create a new order object
    let order = {
        id: order_array.length + 1,
        customer_name: customer_name,
        item_name: item_name,
        quantity: quantity,
        unit_price: unit_price,
        total_price: total_price
    };

    // Add the new order to the array
    order_array.push(order);

    loadOrderTable(); // Reload the table to show the new order
    $('#orderForm')[0].reset(); // Clear form fields after saving
}

// Attach addOrder function to Place Order button
$("#order_save_btn").on("click", addOrder);


/*
==========================================================================================================*/

/*
Add functionality to handle order-history operations
Note: The order_history_array variable is assumed to be an array of order history objects with properties id, customer_id, total_amount, order_date, and order_status.
 */

