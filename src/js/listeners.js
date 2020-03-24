'use strict';

function windowHandler() {
    const data = {
        id: Math.random(),
        title: 'Custom Laptop Limited',
        price: '1000',
        iconPath: 'https://picsum.photos/200',
        imgPath: 'https://i.picsum.photos/id/924/200/300.jpg',
        characteristics: {
            cpu: 'Intel I-5',
            ram: '8Gb',
            hd: '120Gb'
        }
    };
    
    const myProduct = [
        new Product(data),
        new Product(data),
        new Product(data),
        new Product(data),
        new Product(data),
        new Product(data),
        new Product(data),
        new Product(data),
        new Product(data),
        new Product(data)
    ];

    new ProductsList(myProduct).init();
}

function productsHandler() {
    const data = {
        id: Math.random(),
        title: 'Custom Laptop Limited',
        price: '1000',
        iconPath: 'https://picsum.photos/200',
        imgPath: 'https://i.picsum.photos/id/924/200/300.jpg',
        characteristics: {
            cpu: 'Intel I-5',
            ram: '8Gb',
            hd: '120Gb'
        }
    };

    if (
        event.target.parentElement.classList.contains('product') ||
        event.target.classList.contains('product')) {
            console.log(new Product(data).expandedView());
    }
}