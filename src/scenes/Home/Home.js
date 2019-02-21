import React, { Component } from 'react';
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ProductTile from "../../components/ProductTile/ProductTile"
import HomeServices from './services';
import styles from './Home.module.css';

class Home extends Component {
    render() {
        const title = "Welcome to our store";
        const desktops = HomeServices.getFeaturedDesktops();
        const tablets = HomeServices.getFeaturedTablets();
        return (
            <Container>
                <Title title={title} />
                <h2 className={styles.headerSmall}>Desktops</h2>
                <div className="products">
                    {desktops.map(product => (
                        <ProductTile
                            key={product.id}
                            image={product.image}
                            alt={product.name}
                            amount={product.amount}
                            name={product.name}
                        />
                    ))}
                </div>
                <h2 className={styles.headerSmall}>Tablets</h2>
                <div className="products">
                    {tablets.map(product => (
                        <ProductTile
                            key={product.id}
                            image={product.image}
                            alt={product.name}
                            amount={product.amount}
                            name={product.name}
                        />
                    ))}
                </div>
            </Container>
        );
    }
}

export default Home;