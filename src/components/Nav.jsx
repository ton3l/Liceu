import './styles/Nav.css';
import logo from '../assets/imgs/logo.png';

function Nav() {
    return (
        <nav className="nav">
            <div id='logo'>
                <img src={logo} alt="" />
                <h1>Liceu</h1>
            </div>
        </nav>
    );
}

export default Nav;
