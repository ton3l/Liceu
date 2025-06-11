import TextField from '@mui/material/TextField';
import styles from './styles/Form.module.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Form() {
    
    function submit(){
        
    }

    return (
        <Paper className={styles.paper} elevation={3}>
            <h2>Cadastre-se</h2>

            <TextField 
                variant="outlined" 
                label="Pesquise" 
                color="secondary"
                // onChange={event => setUser(event.target.value)}
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
