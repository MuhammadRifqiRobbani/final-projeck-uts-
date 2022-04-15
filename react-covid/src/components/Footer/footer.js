import styles from "./footer.module.css";


function Footer() {
    return ( < >
        <
        nav className = { styles.footer } >
        <
        div className = { styles.container } >
        <
        div className = { styles.footer__title } >
        <
        h2 > Covid ID < /h2> <
        p > Developed by rifqi < /p> < /
        div > <
        div className = { styles.footer__nav } >
        <
        ul >
        <
        Nav > global < /Nav> <
        Nav > indonesia < /Nav> <
        Nav > provinsi < /Nav> <
        Nav > about < /Nav> < /
        ul > <
        /div> < /
        div > <
        /nav> < / >
    );
}

export default Footer;