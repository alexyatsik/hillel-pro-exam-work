class Filter extends Component {
    constructor(category){
        super();
        const filterObject = this.getFilterObject(category);
        this.drawFilters(filterObject);
    } 

    getFilterObject(currentCategory){
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
                if(elem.characteristics[keyMap]){
                    filtersCollection[keyMap].add(elem.characteristics[keyMap]);
                }
            })
        })
       
        return filtersCollection;
    }

    drawFilters(filterObject){
        const filterBox = new Component($nR('#filter'));
        filterBox.addClass('filter-category-wrap');

        for(let filterName in filterObject){
            const filterItemHead = new Element('h3', filterBox);
            filterItemHead.addClass('filter-item__head');
            filterItemHead.html(`${capitalize(filterName)}`);
            const filterItemList = new Element('ul', filterBox);
            filterItemList.addClass('filter-item__list');
            
            for(let filterValue of filterObject[filterName]){
                const filterItemValue = new Element('li', filterItemList);
                filterItemValue.addClass('filter-item__value');
                filterItemValue.html(`${capitalize(filterValue)}`);
            }
        }
    }
}