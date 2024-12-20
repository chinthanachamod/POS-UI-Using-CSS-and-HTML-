// Item Model Class
export class ItemModel {
    constructor(id, name, price, quantity, image) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._image = image;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }
}
