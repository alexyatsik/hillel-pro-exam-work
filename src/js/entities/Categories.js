'use strict';

class Categories extends Element {
    constructor(categories) {
        super('nav', $nR('#category'))

        this.showCategories(categories);
        this.showProducts(categories);

    }

    showCategories = (categories) => {
        const list = new Element('ul', this.element)
        list.addClass('categories__list');

        for (let key in categories) {
            const itemLi = new Element('li', list);
            itemLi.attr({'name': `${key}`});
            itemLi.addClass('categories__item-li');
            itemLi.html(`${capitalize(key)}`);
        }
    }

    showProducts = (categories) => {
        $nR('.categories__list').addEventListener('click', (event) => {
            let target = event.target;
            let currentCategoryProducts = [];
            let currentCategory = [];

            for (let key in categories) {
                if (target.getAttribute('name') === key) {
                    for (let item of categories[key]) {
                        currentCategoryProducts.push(new Product(item, categories[key])); //

                        let test = new Product(item, categories[key]);
                        for (let key in test) {
                            if (key === 'dataObj') {
                                // console.log(test[key]);
                                currentCategory.push(test[key]);
                            }
                        }
                        
                    }
                }
            }
            // console.log(currentCategory);
            new Filter(currentCategory);
            // console.log(currentCategoryProducts);
            new ProductsList(currentCategoryProducts).init();
        })
    }
}
