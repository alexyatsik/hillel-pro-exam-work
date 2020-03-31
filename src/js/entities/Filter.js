class Filter extends Component {
    constructor(category){
        super();
        // this.filters = filters || [];
        this.drawFilter(category)
    } 

    drawFilter(category){
        for(let key in category){
            console.log(key);
            const filterBox = new Component($nR('#filter'));
            filterBox.addClass('filter-category-wrap');
            
            for(let i = 0; i < category[key].length; i++){
                const characteristics = category[key][i].characteristics;
                // console.log(characteristics)

                for(let elem in characteristics){
                    console.log(`${elem}: ${characteristics[elem]}`)
                }
            }
        }


        for(let i = 0; i < array.length; i++){
            const filterBox = new Component($nR('#filter'));
            filterBox.addClass('filter-category-wrap');

            for(let key in array[i]){
                const filterItemHead = new Element('h3', filterBox);
                filterItemHead.addClass('filter-item__head');
                filterItemHead.html(`${capitalize(key)}`);

                
                const filterItemList = new Element('ul', filterBox);
                filterItemList.addClass('filter-item__list');


                const filterItemValue = new Element('li', filterItemList);
                filterItemValue.addClass('filter-item__value');
                filterItemValue.html(`${capitalize(array[i][key])}`);
            }
        }
    }
}