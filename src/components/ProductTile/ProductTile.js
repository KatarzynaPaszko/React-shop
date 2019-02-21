import React from 'react';
import { string } from 'prop-types';
import styles from './ProductTile.module.css'

const ProductTile = ({
    image,
    name,
    amount
}) => {
    return (
        <div className={styles.product}>
            <img src={image} alt={name} />
            <p className={styles.price}>${amount}</p>
            <h3>{name}</h3>
        </div>
    )
}

ProductTile.propTypes = {
    image: string.isRequired,
    name: string.isRequired,
    amount: string.isRequired
}


export default ProductTile;