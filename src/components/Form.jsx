import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './styles/Form.module.css';

function Form() {
    return (
        <Paper className={styles.paper} elevation={3}>
            <h2>Cadastre-se</h2>
            <TextField variant='outlined' label='Usuario' color='secondary' />
            <TextField variant='outlined' label='Senha' type='password' color='secondary' />
            <Button className={styles.button} variant='contained' color='primary'>Enviar</Button>
        </Paper>
    );
}

export default Form;
