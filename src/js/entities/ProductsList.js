'use strict';

class ProductsList extends Element {
    constructor(products) {
        super('div');
        this.products = products || [];

        // if list exists - delete
        $('#product-list').slick('unslick');
        $nD('#product-list');

        this.attr({'id': 'product-list'});
        this.addClass('product-list');
        this.click(productsHandler);
        $nR('#products').appendChild(this.element);
    }

    init() {
        this.fill();
        this.slider();
    }

    fill() {
        for (let i = 0; i < this.products.length; i++) {
            this.element.appendChild(this.products[i].listView());
        }
    }

    slider() {
        $('#product-list').slick({
            dots: true,
            arrows: false,
            infinite: false,
            variableWidth: true,
            speed: 300,
            //slidesToShow: 6,
            rows: 2,
            slidesPerRow: 4,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    //slidesToShow: 3,
                    //slidesToScroll: 3,
                }
                },
                {
                breakpoint: 600,
                settings: {
                    //slidesToShow: 2,
                    //slidesToScroll: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    //slidesToShow: 1,
                    //slidesToScroll: 1
                }
                }
            ]
        });
    }
}