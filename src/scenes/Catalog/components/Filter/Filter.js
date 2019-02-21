import React, { Component } from 'react';
import FilterServices from '../Filter/services';
import styles from "./Filter.module.css";

const initialValue = {
    producent: 'All',
    searchInputValue: '',
}
class Filter extends Component {
    constructor() {
        super();
        this.state = initialValue
    };

    updateInputValue = event => {
        this.setState({ searchInputValue: event.target.value });
        this.props.onProducentChange(this.state.producent, event.target.value);
    };

    updateProducent = event => {
        this.setState({ producent: event.target.value });
        this.props.onProducentChange(event.target.value, this.state.searchInputValue);
    };

    clearSearchInputValue = () => {
        this.setState(initialValue);
        this.props.onProducentChange(initialValue.producent, initialValue.searchInputValue);
    };

    render() {
        const producents = ['All', ...FilterServices.getProducents()];

        return (
            <div className={styles.filter}>
                <div className={styles.filterHeader}>
                    <h4>Search</h4>
                    <button className={styles.clear} onClick={this.clearSearchInputValue}>Clear</button>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="search..."
                        onChange={this.updateInputValue}
                        value={this.state.searchInputValue}
                    />
                </div>
                <h4>Manufacturer</h4>
                <div>
                    {producents.map((producentName, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                name="manufacturere"
                                id={producentName}
                                value={producentName}
                                onChange={this.updateProducent}
                                checked={this.state.producent === producentName}
                            />
                            <label htmlFor="apple">{producentName}</label>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default Filter;