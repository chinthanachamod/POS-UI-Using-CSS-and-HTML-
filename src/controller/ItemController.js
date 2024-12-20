import {ItemModel} from "../model/ItemModel.js";
import { item_array } from "../db/database.js";

const loadItemTable = () => {
    $("#itemTableBody").empty();
    item_array.map((item, index) => {
        let data = `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"></td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editItem(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Delete</button>
                </td>
            </tr>`;
        $("#itemTableBody").append(data);
    });
}

const clearItemForm = () => {
    $('#itemName').val("");
    $('#itemPrice').val("");
    $('#itemQty').val("");
    $('#itemImage').val("");
}

$("#item_save_btn").on("click", function() {
    let itemName = $('#itemName').val();
    let itemPrice = parseFloat($('#itemPrice').val());
    let itemQty = parseInt($('#itemQty').val());
    let itemImage = $('#itemImage').val();

    if (!itemName || isNaN(itemPrice) || isNaN(itemQty) || !itemImage) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Please fill out all fields correctly.",
        });
        return;
    }

    let item = {
        id: item_array.length + 1,
        name: itemName,
        price: itemPrice,
        quantity: itemQty,
        image: itemImage
    };

    item_array.push(item);
    clearItemForm();
    loadItemTable();
});

const editItem = (index) => {
    let item = item_array[index];
    $('#itemName').val(item.name);
    $('#itemPrice').val(item.price);
    $('#itemQty').val(item.quantity);
    $('#itemImage').val(item.image);
}

const updateItem = () => {
    let itemName = $('#itemName').val();
    let itemPrice = parseFloat($('#itemPrice').val());
    let itemQty = parseInt($('#itemQty').val());
    let itemImage = $('#itemImage').val();

    let item = {
        id: item_array[selectedItemIndex].id,
        name: itemName,
        price: itemPrice,
        quantity: itemQty,
        image: itemImage
    };

    item_array[selectedItemIndex] = item;
    clearItemForm();
    loadItemTable();
}

const deleteItem = (index) => {
    Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
    }).then((result) => {
        if (result.isConfirmed) {
            item_array.splice(index, 1);
            loadItemTable();
            Swal.fire({
                title: "Deleted!",
                text: "The item has been removed.",
                icon: "success"
            });
        }
    });
}

// Initialize table on page load
$(document).ready(() => {
    loadItemTable();
});
