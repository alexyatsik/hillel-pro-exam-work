'use strict';

import Component from './commons/Component';
//import * as $ from 'jQuery';
//import '../../../../node_modules/slick-carousel/slick/slick'
//import 'slick-carousel/slick/slick';

import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'

import { $nD, $nR } from '../utils';

export default class ProductsList extends Component {
    constructor(products) {
        super();
        this.products = products || [];

        // if list exists - delete
        $('#product-list').slick('unslick');
        $nD('#product-list');

        this.attr({'id': 'product-list'});
        this.addClass('product-list');
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
        const styles = window.getComputedStyle($nR('.product'));
        const itemWidth = parseInt(styles.width) + parseInt(styles.margin) * 2;
        const slidesPerRow = parseInt($nR('#products').offsetWidth / itemWidth);
        
        $('#product-list').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 300,
            rows: 2,
            slidesPerRow: slidesPerRow,
        });
    }
}