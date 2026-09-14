class Product {
    #id;
    #name;
    #price;
    #quantity;

    constructor(id, name, price, quantity) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }

    get quantity() {
        return this.#quantity;
    }

    showInfo() {
        return `Id: ${this.#id}
Name: ${this.#name}
Price: ${this.#price.toLocaleString("vi-VN")} VNĐ
Quantity: ${this.#quantity}`;
    }
}

export default Product;