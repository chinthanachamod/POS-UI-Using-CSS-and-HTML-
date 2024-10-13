/*
////////////////////////////////////////////////////// Sidebar Toggle //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            const navLink = this.querySelector('.nav-link');
            navLink.classList.add('active');
            navLink.style.background = 'rgba(128, 128, 128, 0.7)';
            navLink.style.color = '#333333';
        });

        item.addEventListener('mouseout', function() {
            const navLink = this.querySelector('.nav-link');
            navLink.classList.remove('active');
            navLink.style.background = '';
        });
    });
});

/////////////////////////////////////////////////////////// Nav-Brand ///////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const navbarBrand = document.querySelector('.header span');

    // Set default color
    navbarBrand.style.color = '#333333';

    // Change color on hover
    navbarBrand.addEventListener('mouseover', function () {
        navbarBrand.style.color = 'rgba(128, 128, 128, 0.7)';
    });

    // Revert to default color when not hovering
    navbarBrand.addEventListener('mouseout', function () {
        navbarBrand.style.color = 'black';
    });
});

/////////////////////////////////////////////////////////// Sidebar Toggle - Selected //////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the 'bold' class from all links
            navLinks.forEach(nav => nav.classList.remove('bold'));

            // Add the 'bold' class to the clicked link
            this.classList.add('bold');
        });
    });
});

////////////////////////////////////////////////////// Customer Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerSecButton = document.getElementById('customerBtn');
    const mainContent = document.querySelector('.main-content');
    const customerSecSection = document.querySelector('.customer');

    customerSecButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(customerSecSection);
        customerSecSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Customer Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const customerAddButton = document.getElementById('customer-add-btn');
    const customerAddModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    customerAddButton.addEventListener('click', function () {
        try {
            customerAddModal.show();
            console.log("Modal opened successfully");
        } catch (error) {
            console.error("Error opening the modal: ", error);
        }
    });

    // Add event listener for closing the modal
    document.querySelector('.modal .btn-close').addEventListener('click', function () {
        try {
            customerAddModal.hide();
            console.log("Modal closed successfully");
        } catch (error) {
            console.error("Error closing the modal: ", error);
        }
    });
});

////////////////////////////////////////////////////// Data load for Edit Customer Form //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.customer-table tbody tr');
    const customerTableModal = new bootstrap.Modal(document.querySelector('.customer-form-edit .modal'));

    const id = document.getElementById('customer-id');
    const name = document.getElementById('customer-name');
    const email = document.getElementById('customer-email');
    const phone = document.getElementById('customer-phone');
    const address = document.getElementById('customer-address');

    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const customer_id = row.querySelector('.row-id').textContent;
            const customer_name = row.querySelector('.row-name').textContent;
            const customer_email = row.querySelector('.row-email').textContent;
            const customer_phone = row.querySelector('.row-phone').textContent;
            const customer_address = row.querySelector('.row-address').textContent;

            id.textContent = customer_id;
            name.value = customer_name;
            email.value = customer_email;
            phone.value = customer_phone;
            address.value = customer_address;

            customerTableModal.show();
        });
    });
});

////////////////////////////////////////////////////// User Section Load //////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const userButton = document.getElementById('userBtn');
    const mainContent = document.querySelector('.main-content');
    const userSection = document.querySelector('.user');

    userButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(userSection);
        userSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// User Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const UserAddButton = document.getElementById('user-add-btn');
    const UserAddModal = new bootstrap.Modal(document.querySelector('.user-form .modal'));

    UserAddButton.addEventListener('click', function () {
        UserAddModal.show();
    });
});

////////////////////////////////////////////////////// Data load for Edit User Form //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.user-table tbody tr');
    const userTableModal = new bootstrap.Modal(document.querySelector('.user-form-edit .modal'));
    const id = document.getElementById('user-id');
    const name = document.getElementById('user-name');
    const email = document.getElementById('user-email');
    const phone = document.getElementById('user-phone');
    const address = document.getElementById('user-address');
    const salary = document.getElementById('user-salary');

    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const user_id = row.querySelector('.row-id').textContent;
            const user_name = row.querySelector('.row-name').textContent;
            const user_email = row.querySelector('.row-email').textContent;
            const user_phone = row.querySelector('.row-phone').textContent;
            const user_address = row.querySelector('.row-address').textContent;
            const user_salary = row.querySelector('.row-salary').textContent;

            id.textContent = user_id;
            name.value = user_name;
            email.value = user_email;
            phone.value = user_phone;
            address.value = user_address;
            salary.value = user_salary;

            userTableModal.show();
        });
    });
});

////////////////////////////////////////////////////// Product Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const productButton = document.getElementById('productBtn');
    const mainContent = document.querySelector('.main-content');
    const productSection = document.querySelector('.product');

    productButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(productSection);
        productSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Product Add Form Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const productAddButton = document.getElementById('product-add-btn');
    const productAddModal = new bootstrap.Modal(document.querySelector('.product-form-new .modal'));

    productAddButton.addEventListener('click', function () {
        productAddModal.show();
    });
});


////////////////////////////////////////////////////// Image Upload for New Product Form //////////////////////////////////////////////////////////

const uploadBoxNew = document.getElementById('uploadBoxNew');
const fileInputNew = document.getElementById('fileInputNew');
const browseFileButtonNew = document.getElementById('browseFileButtonNew');

browseFileButtonNew.addEventListener('click', () => {
    fileInputNew.click();
});

uploadBoxNew.addEventListener('dragover', (event) => {
    event.preventDefault();
    uploadBoxNew.style.borderColor = '#fff';
});

uploadBoxNew.addEventListener('dragleave', () => {
    uploadBoxNew.style.borderColor = '#ffffff';
});

uploadBoxNew.addEventListener('drop', (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileNew(file);
    uploadBoxNew.style.borderColor = '#ffffff';
});

fileInputNew.addEventListener('change', (event) => {
    const file = event.target.files[0];
    handleFileNew(file);
});

function handleFileNew(file) {
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function (event) {
            uploadBoxNew.innerHTML = `
                <img src="${event.target.result}" alt="Image Preview" class="preview">
                <button class="delete-button" id="deleteButtonNew">Delete Image</button>
            `;

            document.getElementById('deleteButtonNew').addEventListener('click', resetUploadBoxNew);
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please upload an image file.");
    }
}

function resetUploadBoxNew() {
    uploadBoxNew.innerHTML = `
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <p>Drag & Drop to Upload File</p>
        <p>OR</p>
        <button id="browseFileButtonNew">Browse File</button>
        <input type="file" id="fileInputNew" hidden>
    `;

    const browseFileButtonNew = document.getElementById('browseFileButtonNew');
    const fileInputNew = document.getElementById('fileInputNew');

    browseFileButtonNew.addEventListener('click', () => fileInputNew.click());
    fileInputNew.addEventListener('change', (event) => handleFileNew(event.target.files[0]));
}

////////////////////////////////////////// Product Edit Form Load //////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const tableRows = document.querySelectorAll('.product-table tbody tr');
    const productModalEdit = new bootstrap.Modal(document.querySelector('.product-form-edit .modal'));
    const code = document.getElementById('editProductCode');
    const description = document.getElementById('editProductDesc');
    const unitPrice = document.getElementById('editProductUnitPrice');
    const qtyOnHand = document.getElementById('editProductQtyOnHand');
    const uploadBoxEdit = document.getElementById('uploadBoxEdit');
    const imagePreviewEdit = document.getElementById('imagePreviewEdit');
    const uploadTextEdit = document.getElementById('uploadTextEdit');
    const fileInputEdit = document.getElementById('fileInputEdit');

    function resetUploadBoxEdit() {
        imagePreviewEdit.style.display = 'none';
        imagePreviewEdit.src = '';
        uploadTextEdit.style.display = 'block';
    }

    tableRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const item_code = row.querySelector('.row-id').textContent;
            const item_description = row.querySelector('.row-desc').textContent;
            const item_unit_price = row.querySelector('.row-price').textContent;
            const item_qty_on_hand = row.querySelector('.row-qty').textContent;
            const item_image = row.querySelector('.row-image img')?.getAttribute('src');

            code.value = item_code;
            description.value = item_description;
            unitPrice.value = item_unit_price;
            qtyOnHand.value = item_qty_on_hand;

            if (item_image) {
                imagePreviewEdit.src = item_image;
                imagePreviewEdit.style.display = 'block';
                uploadTextEdit.style.display = 'none';
            } else {
                resetUploadBoxEdit();
            }

            productModalEdit.show();
        });
    });

    fileInputEdit.addEventListener('change', function () {
        const file = fileInputEdit.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreviewEdit.src = e.target.result;
                imagePreviewEdit.style.display = 'block';
                uploadTextEdit.style.display = 'none';
            };
            reader.readAsDataURL(file);
        } else {
            resetUploadBoxEdit();
        }
    });

    document.getElementById('browseFileButtonEdit').addEventListener('click', function () {
        fileInputEdit.click();
    });
});

////////////////////////////////////////////////////// Product Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('registerBtn');
    const mainContent = document.querySelector('.main-content');
    const registerSection = document.querySelector('.cash-register');

    registerButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(registerSection);
        registerSection.style.display = 'block';
    });
});


////////////////////////////////////////////////////// Customer Add Form Load for Cash Register //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const custButton = document.getElementById('customer-add-btn-reg');
    const custModal = new bootstrap.Modal(document.querySelector('.customer-form .modal'));

    custButton.addEventListener('click', function () {
        custModal.show();
    });
});

////////////////////////////////////////////////////// Data for arrays //////////////////////////////////////////////////////////

let products = [
    { code: "F001", description: "Apple", unitPrice: 150.00, qtyOnHand: 20, image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Apple_fruit.jpg" },
    { code: "F002", description: "Banana 1Kg", unitPrice: 120.00, qtyOnHand: 50, image: "https://images.forbesindia.com/media/images/2022/Sep/img_193773_banana.jpg" },
    { code: "F003", description: "Orange", unitPrice: 120.00, qtyOnHand: 30, image: "https://hips.hearstapps.com/hmg-prod/images/orange-1558624428.jpg" },
    { code: "F004", description: "Dragon Fruit", unitPrice: 200.00, qtyOnHand: 25, image: "https://hips.hearstapps.com/hmg-prod/images/white-dragon-fruit-royalty-free-image-1594218654.jpg" },
    { code: "F005", description: "Stowberry 1Kg", unitPrice: 1000.00, qtyOnHand: 40, image: "https://images.everydayhealth.com/images/diet-nutrition/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg?w=720" },
    { code: "F006", description: "Watermellon", unitPrice: 300.00, qtyOnHand: 20, image: "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/watermelon.jpg?itok=WlQcb2Uh" },
    { code: "F007", description: "Olive 1Kg", unitPrice: 2200.00, qtyOnHand: 15, image: "https://t3.ftcdn.net/jpg/06/44/02/46/360_F_644024600_z6kDBNfJr5BKcfqnry4Nv7Otxza8Un5T.jpg" },
    ];



/!*let customers = [
    { id: "C001", name: "Chinthana Chamod", email: "dinesh.perera@example.com", phone: "0771234567", address: "123" + " Galle " },
    { id: "C002", name: "Nimali jayasinghe", email: "nimali.fern@example.com", phone: "0782345678", address: "456" + " Kandy " },
    { id: "C003", name: "Chamilka Kalhara", email: "chamilka.jayas@example.com", phone: "0753456789", address: "789" + " Negombo " },
    { id: "C004", name: "Ravi Royster", email: "ravi.kumara@example.com", phone: "0714567890", address: "112 Mount" + " Lavinia" },
    { id: "C005", name: "Saman Wickramasinghe", email: "saman.wickrama@example.com", phone: "0705678901", address: "223 Matara " },
    { id: "C006", name: "Pavithra Rajapaksha", email: "pavithra.rajap@example.com", phone: "0776789012", address: "334 Jaffna " },
    { id: "C007", name: "Kasun Viboda", email: "kamal.weera@example.com", phone: "0787890123", address: "445" + " Battaramulla" },
];*!/

let customers = [
    { id: "C001", name: "Chinthana Chamod", email: "dinesh.perera@example.com", phone: "0771234567", address: " Galle " },
    { id: "C002", name: "Nimali jayasinghe", email: "nimali.fern@example.com", phone: "0782345678", address: " Kandy" },
    { id: "C003", name: "Chamilka Kalhara", email: "chamilka.jayas@example.com", phone: "0753456789", address: " Negombo " },
    { id: "C004", name: "Ravi Royster", email: "ravi.kumara@example.com", phone: "0714567890", address: " Lavinia" },
    { id: "C005", name: "Saman Wickramasinghe", email: "saman.wickrama@example.com", phone: "0705678901", address: " Matara " },
    { id: "C006", name: "Pavithra Rajapaksha", email: "pavithra.rajap@example.com", phone: "0776789012", address: "Jaffna " },
    { id: "C007", name: "Kasun Viboda", email: "kamal.weera@example.com", phone: "0787890123", address: " Battaramulla" },
];


let users = [
    { id: "U001", name: "Chamod", email: "chamod@gmail.com", phone: "111222333", address: "Panadura", salary: 30000 },
    { id: "U002", name: "Kasun", email: "kasun@gmail.com", phone: "222333444", address: "Dematagoda", salary: 25000 }
];

//////////////////////////////////////////////////////////////////////// Table data display //////////////////////////////////////////////////////////

// Function to display products in a table
function displayProducts() {
    const productTableBody = document.querySelector('.product-table tbody');
    productTableBody.innerHTML = ''; // Clear existing rows

    products.forEach(product => {
        let row = `
            <tr>
                <td class="row-id">${product.code}</td>
                <td class="row-desc">${product.description}</td>
                <td class="row-image" style="width: 10%; height: auto;" ><img src="${product.image}" alt="${product.description}" style="width: 100%;
                aspect-ratio: auto;
                object-fit: cover;"></td>
                <td class="row-price">${product.unitPrice.toFixed(2)}</td>
                <td class="row-qty">${product.qtyOnHand}</td>
                <td class="row-actions"> <button class="btn btn-danger">Update</button> </td>
            </tr>
        `;
        productTableBody.innerHTML += row;
    });
}

// Function to display customers in a table
function displayCustomers() {
    const customerTableBody = document.querySelector('.customer-table tbody');
    customerTableBody.innerHTML = ''; // Clear existing rows

    customers.forEach(customer => {
        let row = `
            <tr>
                <td class="row-id">${customer.id}</td>
                <td class="row-name">${customer.name}</td>
                <td class="row-email">${customer.email}</td>
                <td class="row-phone">${customer.phone}</td>
                <td class="row-address">${customer.address}</td>
                <td class="row-actions"> <button class="btn btn-danger">Update</button> </td>
            </tr>
        `;
        customerTableBody.innerHTML += row;
    });
}

/////////////////////////////////////////////////////////////////////// Saving Data///////////////////////////////////////////////

// Function to display users in a table
function displayUsers() {
    const userTableBody = document.querySelector('.user-table tbody');
    userTableBody.innerHTML = ''; // Clear existing rows

    users.forEach(user => {
        let row = `
            <tr>
                <td class="row-id">${user.id}</td>
                <td class="row-name">${user.name}</td>
                <td class="row-email">${user.email}</td>
                <td class="row-phone">${user.phone}</td>
                <td class="row-address">${user.address}</td>
                <td class="row-salary">${user.salary}</td>
                <td class="row-actions"><button class="btn btn-danger">Delete</button> </td>
            </tr>
        `;
        userTableBody.innerHTML += row;
    });
}

// Call these functions to initially load the tables
displayProducts();
displayCustomers();
displayUsers();


// Function to add a new product
function addProduct(product) {
    products.push(product);
    displayProducts(); // Refresh the product table
}

// Function to add a new customer
function addCustomer(customer) {
    customers.push(customer);
    displayCustomers(); // Refresh the customer table
}

// Function to add a new user
function addUser(user) {
    users.push(user);
    displayUsers(); // Refresh the user table
}

// Example: Adding a new product from a form
document.getElementById('product-add-btn').addEventListener('click', function() {
    let newProduct = {
        code: document.getElementById('productCode').value,
        description: document.getElementById('productDesc').value,
        image: document.getElementById('productImage').value, // Assuming an input for image URL
        unitPrice: parseFloat(document.getElementById('productUnitPrice').value),
        qtyOnHand: parseInt(document.getElementById('productQtyOnHand').value),

    };
    addProduct(newProduct);
    // Hide modal, clear form, etc.
});

////////////////////////////////////////////////////// Product cards load ////////////////////////////////////////////

// Select the product list container
const productList = document.getElementById("product-list");

// Loop through the products array and generate product cards
products.forEach(product => {
    const productCard = `
        <div class="col">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.description}">
                <div class="card-body">
                    <h5 class="card-title">${product.description}</h5>
                    <p class="card-text">$${product.unitPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    `;

    // Append the product card to the product list
    productList.innerHTML += productCard;
});

////////////////////////////////////////////////////// Invoice Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const invoiceButton = document.getElementById('invoiceBtn');
    const mainContent = document.querySelector('.main-content');
    const invoiceSection = document.querySelector('.invoice');

    invoiceButton.addEventListener('click', function (event) {
        event.preventDefault();
        mainContent.innerHTML = '';
        mainContent.appendChild(invoiceSection);
        invoiceSection.style.display = 'block';
    });
});

////////////////////////////////////////////////////// Dashboard Section Load //////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const dashboardButton = document.getElementById('dashboardBtn');
    const mainContent = document.querySelector('.main-content');
    const dashboardSection = document.querySelector('.dashboard');

    // Function to load the dashboard section
    function loadDashboard() {
        mainContent.innerHTML = ''; // Clear existing content
        mainContent.appendChild(dashboardSection); // Append dashboard section
        dashboardSection.style.display = 'block'; // Show the dashboard section
    }

    // Load the dashboard when the page is fully loaded
    loadDashboard();

    // Event listener for dashboard button click (if needed)
    dashboardButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button action
        loadDashboard(); // Call the function to load dashboard
    });
});

////////////////////////////////////////////////////////////////// Charts ////////////////////////////////////////////////////////////

// Line Chart

var ctxLine = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['July', 'August', 'September', 'October', 'November'], // Updated labels for the last three months and the following two
        datasets: [{
            label: 'Profits',
            data: [5000, 7000, 8000, 9000, 9500], // Example profit data
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
            {
                label: 'Losses',
                data: [3000, 2000, 1500, 1800, 1300], // Example loss data
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true // Ensure that the y-axis starts at zero for clarity
            }
        }
    }
});


// Pie Chart

var ctxPie = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Banana', 'Watermelon', 'Apples', 'Olives', 'Oranges', 'Dragon Fruits', 'Strawberries'], // Updated
        // labels
        // for seven fruits
        datasets: [{
            label: 'Top Fruit Categories',
            data: [43, 31, 20, 15, 25, 10, 18], // Example data for each fruit category
            backgroundColor: [
                'rgb(255, 99, 132)', // Banana
                'rgb(54, 162, 235)', // Watermelon
                'rgb(255, 206, 86)', // Apples
                'rgb(75, 192, 192)', // Olives
                'rgb(153, 102, 255)', // Oranges
                'rgb(255, 159, 64)', // Dragon Fruits
                'rgb(255, 205, 86)'  // Strawberries
            ]
        }]
    },
    options: {
        responsive: true
    }
});


*/
