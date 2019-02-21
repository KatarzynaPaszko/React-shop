import products from '../../data/products.json';

class HomeServices {
    static getFeaturedDesktops() {
        return products.filter(
            product => product.category === 'desktop' && product.featured
        );
    }

    static getFeaturedTablets() {
        return products.filter(
            product => product.category === 'tablet' && product.featured
        );
    }
}

export default HomeServices;

