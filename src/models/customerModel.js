export class CustomerModel {
    constructor(id, customer_name, mobile, email, address) {
        this._id = id;
        this._customer_name = customer_name;
        this._mobile = mobile;
        this._email = email;
        this._address = address;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get customer_name() {
        return this._customer_name;
    }

    set customer_name(value) {
        this._customer_name = value;
    }

    get mobile() {
        return this._mobile;
    }

    set mobile(value) {
        this._mobile = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}
