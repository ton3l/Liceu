import TextField from '@mui/material/TextField';
import styles from './styles/Search.module.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import{ useState } from 'react';

function Search({ usersListState }) {
    const { usersList } = usersListState;
    const [search, setSearch] = useState('');
    const [inputAble, setInputAble] = useState(true);
    const [results, setResults] = useState([]);

    function submit(){
        if(usersList.length === 0){
            return;
        }

        const searched = usersList.find(user => user.user === search);
        const searchedIndex = usersList.find(user => searched.user === search);
    }

    return (
        <Paper className={styles.paper} elevation={3}>
            <h2>Pesquisar</h2>

            <TextField 
                variant="outlined" 
                label="Pesquisa"
                onChange={event => setSearch(event.target.value)}
            />

            <Button 
                variant="contained" 
                onClick={submit} 
            >
                Pesquisar
            </Button>

            <TextField 
                variant="outlined" 
                label="Usuário"
                slotProps={
                    {
                        input: {
                            disabled: inputAble
                        }
                    }
                }
            />
            <TextField 
                variant="outlined" 
                label="Password"
                slotProps={
                    {
                        input: {
                            disabled: inputAble
                        }
                    }
                }
            />
            <div className={styles.buttons}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g className="edit-outline"><g fill="currentColor" fillRule="evenodd" className="Vector" clipRule="evenodd"><path d="M2 6.857A4.857 4.857 0 0 1 6.857 2H12a1 1 0 1 1 0 2H6.857A2.857 2.857 0 0 0 4 6.857v10.286A2.857 2.857 0 0 0 6.857 20h10.286A2.857 2.857 0 0 0 20 17.143V12a1 1 0 1 1 2 0v5.143A4.857 4.857 0 0 1 17.143 22H6.857A4.857 4.857 0 0 1 2 17.143z"/><path d="m15.137 13.219l-2.205 1.33l-1.033-1.713l2.205-1.33l.003-.002a1.2 1.2 0 0 0 .232-.182l5.01-5.036a3 3 0 0 0 .145-.157c.331-.386.821-1.15.228-1.746c-.501-.504-1.219-.028-1.684.381a6 6 0 0 0-.36.345l-.034.034l-4.94 4.965a1.2 1.2 0 0 0-.27.41l-.824 2.073a.2.2 0 0 0 .29.245l1.032 1.713c-1.805 1.088-3.96-.74-3.18-2.698l.825-2.072a3.2 3.2 0 0 1 .71-1.081l4.939-4.966l.029-.029c.147-.15.641-.656 1.24-1.02c.327-.197.849-.458 1.494-.508c.74-.059 1.53.174 2.15.797a2.9 2.9 0 0 1 .845 1.75a3.15 3.15 0 0 1-.23 1.517c-.29.717-.774 1.244-.987 1.457l-5.01 5.036q-.28.281-.62.487m4.453-7.126s-.004.003-.013.006z"/></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2m2 0h8v-6.8L10.46 9H8z"/></svg>
            </div>
        </Paper>
    );
}

export default Search;
