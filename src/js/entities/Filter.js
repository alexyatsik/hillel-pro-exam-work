'use strict';

class Filter extends Component {
    constructor(category) {
        super();
        const filterObject = this.getFilterObject(category);
        this.drawFilters(filterObject);
        this.getProductsFromFilter(category);
        // console.log(test)
    }

    getFilterObject(currentCategory) {
        const filtersCollection = {};
        const filtersCollectionKey = new Set();

        currentCategory.forEach((elem) => {
            Object.keys(elem.characteristics).forEach((key) => {
                filtersCollectionKey.add(key);
            })
        });

        filtersCollectionKey.forEach((keyMap) => {
            filtersCollection[keyMap] = new Set();
        });

        currentCategory.forEach((elem) => {
            filtersCollectionKey.forEach((keyMap) => {
                if (elem.characteristics[keyMap]) {
                    filtersCollection[keyMap].add(elem.characteristics[keyMap]);
                }
            })
        })

        return filtersCollection;
    }

    drawFilters(filterObj) {
        const filterBox = new Component($nR('#filter'));
        filterBox.addClass('filter-category-wrap');

        for (let filterName in filterObj) {
            const filterItemHead = new Element('h3', filterBox);
            filterItemHead.addClass('filter-item__head');
            filterItemHead.html(`${capitalize(filterName)}`);
            const filterItemList = new Element('ul', filterBox);
            filterItemList.addClass('filter-item__list');

            for (let filterValue of filterObj[filterName]) {
                const filterItemValue = new Element('li', filterItemList);
                filterItemValue.addClass('filter-item__value');
                filterItemValue.html(`${capitalize(filterValue)}`);
            }
        }
    }


    getProductsFromFilter(currentCategory) {
        const filtredProductsCollection = new Set();
        let filtredProductsArray;

        let itemList = document.querySelectorAll('.filter-item__list');

        itemList.forEach(item => {
            item.addEventListener('click', e => {
                let target = e.target.innerText;
                console.log(target)

                currentCategory.forEach(obj => {
                    let object = obj;
                    for (let key in object.characteristics) {
                        if (target === object.characteristics[key] && !filtredProductsCollection.has(object)) {
                            filtredProductsCollection.add(object);
                            filtredProductsArray = Array.from(filtredProductsCollection);
                        } else if (target === object.characteristics[key] && filtredProductsCollection.has(object)) {
                            filtredProductsCollection.delete(object);
                            filtredProductsArray = Array.from(filtredProductsCollection);
                        }
                        // return filtredProductsArray;
                    }
                })
                console.log(filtredProductsArray)
            })
        });
    }
}