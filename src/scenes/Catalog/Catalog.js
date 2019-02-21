import React, { Component } from 'react';
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ProductTile from "../../components/ProductTile/ProductTile"
import Filter from './components/Filter/Filter'
import products from "../../data/products.json";
import CatalogServices from './services';
import styles from './Catalog.module.css'

class Catalog extends Component {
    constructor() {
        super();
        this.state = { products };
    }

    updateProducts = (producent, name) => {
        let filteredProducts = products;

        if (producent !== 'All') {
            filteredProducts = CatalogServices.filterByProducent(producent);
        }

        if (name) {
            filteredProducts = CatalogServices.filterByName(name, filteredProducts);
        }
        this.setState({ products: filteredProducts });
    };

    render() {
        const title = "Catalog";
        return (
            <Container>
                <Title title={title} />
                <div className={styles.catalog}>
                    <div className={styles.columnLeft}>
                        <Filter onProducentChange={this.updateProducts} />
                    </div>
                    <div className={styles.columnRight}>
                        <div className="products">
                            {this.state.products.map(product => (
                                <ProductTile
                                    key={product.id}
                                    image={product.image}
                                    alt={product.name}
                                    amount={product.amount}
                                    name={product.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Catalog;