import products from '../../data/products.json';

class CatalogServices {
    static filterByProducent(producent) {
        return products.filter(product => product.manufacture === producent);
    }

    static filterByName(name, products) {
        return products.filter(product =>
            product.name.toLowerCase().includes(name.toLowerCase())
        );
    }
}

export default CatalogServices;
