class Filter extends Component {
    constructor(filters){
        super();
        // this.filters = filters || [];
        this.drawFilter(filters)
    } 

    drawFilter(array){
        for(let i = 0; i < array.length; i++){
            const filterBox = new Component($nR('#filter'));
            filterBox.addClass('filter-object-wrap');

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