'use strict';

class ProductsList extends Element {
    constructor(products) {
        super('div');
        this.addClass('product-list');

        this.products = products || [];
    }

    get() {
        for (let i = 0; i < this.products.length; i++) {
            this.element.appendChild(this.products[i].listView());
        }

        return this.element;
    }

    slider() {
        $(document).ready(function(){
            $('.product-list').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                rows: 2,
                slidesToScroll: 4,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: false,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
            });
          });
    }
}

const data = {
    id: '123123',
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

const myProductsList = new ProductsList(myProduct);
$nR('#products').appendChild(myProductsList.get());
myProductsList.slider();