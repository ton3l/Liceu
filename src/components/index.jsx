import styles from './styles/App.module.css';
import { useState } from 'react';
import Search from './Search';
import Table from './Table';
import Form from './Form';
import Nav from './Nav';

function App() {
    
    const [usersList, setUsersList] = useState([]);

    return (
        <div className={styles.app}>
            <Nav />

            <Form 
                listState={{ usersList, setUsersList }} 
            />

            <Search usersListState={{ usersList, setUsersList }}/>

            <Table usersListState={{ usersList, setUsersList }} />
        </div>
    );
}

export default App;
