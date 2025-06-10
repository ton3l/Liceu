import styles from './styles/App.module.css';
import { useState } from 'react';
import Table from './Table';
import Form from './Form';
import Nav from './Nav';

function App() {
    const [user, setUser] = useState('');
    const [passw, setPassw] = useState('');
    const [list, setList] = useState([]);

    return (
        <div className={styles.app}>
            <Nav />

            <Form 
                formState={{ user, setUser, passw, setPassw, list, setList }} 
            />

            <Table list={list} />
        </div>
    );
}

export default App;
