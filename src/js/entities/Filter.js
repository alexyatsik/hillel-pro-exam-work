'use strict';

class Filter extends Component {
    constructor(category, selectedCategory) {
        super();
        const filterObject = this.getFilterObject(category);
        this.drawFilters(filterObject);
        this.getProductsFromFilter(category);
        this.toggleClass();
        this.selectedCategory = selectedCategory;
    }

    getFilterObject(currentCategory) {
        const filtersCollection = {};
        const filtersCollectionKey = new Set();

        currentCategory.forEach((obj) => {
            Object.keys(obj.characteristics).forEach((key) => {
                filtersCollectionKey.add(key);
            })
        });

        filtersCollectionKey.forEach((keyMap) => {
            filtersCollection[keyMap] = new Set();
        });

        currentCategory.forEach((obj) => {
            filtersCollectionKey.forEach((keyMap) => {
                if (obj.characteristics[keyMap]) {
                    filtersCollection[keyMap].add(obj.characteristics[keyMap]);
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
                
                currentCategory.forEach(obj => {
                    for (let key in obj.characteristics) {
                        if (target === obj.characteristics[key] && !filtredProductsCollection.has(obj)) {
                            filtredProductsCollection.add(obj);
                            return filtredProductsArray = Array.from(filtredProductsCollection);
                        } else if (target === obj.characteristics[key] && filtredProductsCollection.has(obj)) {
                            filtredProductsCollection.delete(obj);
                            return filtredProductsArray = Array.from(filtredProductsCollection);
                        }
                    }
                })

                let finalyProductArray = [];

                for(let elem of filtredProductsArray){ 
                    finalyProductArray.push(new Product(elem, this.selectedCategory)); 
                }

                if(filtredProductsArray.length === 0){
                    for(let obj of currentCategory){
                        finalyProductArray.push(new Product(obj, this.selectedCategory));  // place items of current category
                    }
                }

                new ProductsList(finalyProductArray).init();
            })
        });
    }

    toggleClass(){
        let itemList = document.querySelectorAll('.filter-item__list');
        itemList.forEach(item => {
            item.addEventListener('click', e => {
                let target = e.target;
                target.classList.toggle('clicked-filter');
            })
        })
    }
}