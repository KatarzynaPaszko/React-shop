import React from "react";
import styles from './Container.module.css';
import PropTypes from 'prop-types';

const Container = (props) => (

    <div className={styles.container}>
        {props.children}
    </div>
);

Container.propTypes = {
    children: PropTypes.node.isRequired
};

export default Container;