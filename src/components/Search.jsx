import TextField from '@mui/material/TextField';
import styles from './styles/Form.module.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Form() {
    
    function submit(){
        
    }

    return (
        <Paper className={styles.paper} elevation={3}>
            <h2>Pesquisar</h2>

            <TextField 
                variant="outlined" 
                label="Usuário" 
                color="secondary"
                // onChange={event => setUser(event.target.value)}
            />

            <Button 
                className={styles.button} 
                variant="contained" 
                color="secondary" 
                onClick={submit} 
            >
                Enviar
            </Button>
        </Paper>
    );
}

export default Form;
