import Nav from './Nav';
import Form from './Form';
import styles from './styles/App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <Nav />
            <Form />
        </div>
    );
}

export default App;
