import React, { Component } from 'react';
import { string } from 'prop-types';
import styles from './Title.module.css';

class Title extends Component {
    render() {
        return <h1 className={styles.headerBig}>{this.props.title}</h1>
    }
};

Title.propTypes = {
    title: string.isRequired,
};

export default Title;