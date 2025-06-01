import styles from './styles/Nav.module.css';
import logo from '../assets/imgs/logo.png';

function Nav() {
    return (
        <nav className={styles.nav}>
            <div id={styles.logo}>
                <img src={logo} alt='Logo: oppened 8bit book' />
                <h1>Liceu</h1>
            </div>
        </nav>
    );
}

export default Nav;
