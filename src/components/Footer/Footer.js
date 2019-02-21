import React from "react";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = () => (
    <footer className={styles.footer}>
        <Container>
            <p>Shop © 2020</p>
            <p>Designed by Katarzyna Paszko</p>
        </Container>
    </footer>
);

export default Footer;