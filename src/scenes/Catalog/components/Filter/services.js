import products from '../../../../data/products.json';

class FilterServices {
    static getProducents() {
        return products
            .map(product => product.manufacture)
            .filter(
                (manufacture, index, manufactures) =>
                    manufactures.indexOf(manufacture) === index
            );
    }
}

export default FilterServices;

