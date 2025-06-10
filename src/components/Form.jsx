import TextField from '@mui/material/TextField';
import styles from './styles/Form.module.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { use, useState } from 'react';

function Form({ formState }) {
    const { user, setUser, passw, setPassw, list, setList } = formState;
    
    function submit(){
        setList([...list, {user, passw}]);
        setUser('');
        setPassw('');
    }

    return (
        <Paper className={styles.paper} elevation={3}>
            <h2>Cadastre-se</h2>

            <TextField 
                variant="outlined" 
                label="Usuario" 
                color="secondary"
                value={user}
                onChange={event => setUser(event.target.value)}
            />

            <TextField 
                variant="outlined"
                label="Senha" 
                type="password" 
                color="secondary" 
                value={passw}
                onChange={event => setPassw(event.target.value)} 
            />

            <Button 
                className={styles.button} 
                variant="contained" 
                color="primary" 
                onClick={submit} 
            >
                Enviar
            </Button>
        </Paper>
    );
}

export default Form;
