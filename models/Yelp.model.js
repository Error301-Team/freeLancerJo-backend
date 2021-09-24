"use strict";
class businesse {
    constructor(id, alias, name, image_url, is_closed, url, review_count, categories, rating, coordinates, transactions, location, phone, display_phone) {
        this.id = id;
        this.alias = alias;
        this.name = name;
        this.image_url = image_url;
        this.is_closed = is_closed;
        this.url = url;
        this.review_count = review_count;
        this.categories = categories;
        this.rating = rating;
        this.coordinates = coordinates;
        this.transactions = transactions;
        this.location = location;
        this.phone = phone;
        this.display_phone = display_phone;
    }
}
module.exports = businesse;