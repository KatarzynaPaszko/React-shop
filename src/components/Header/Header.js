import React from "react";
import { Link } from 'react-router-dom';
import Container from "../Container/Container";
import styles from "./Header.module.css";

const Header = () => (
    <header>
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.nav}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </Container>
        </nav>
    </header>
);

export default Header;