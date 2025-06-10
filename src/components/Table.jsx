import { TableContainer, TableCell, TableRow, Table as Mtable, TableHead, TableBody } from "@mui/material";
import { Paper } from "@mui/material";
import styles from './styles/Table.module.css';

function Table({ list }) {
    return (
        <TableContainer component={Paper} elevation={3} className={styles.tableContainer}>
            <Mtable >
                <TableHead>
                    <TableRow>
                        <TableCell> # </TableCell>
                        <TableCell> Usuário </TableCell>
                        <TableCell> Senha </TableCell> 
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        list.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell> {index+1} </TableCell>
                                <TableCell> {item.user} </TableCell>
                                <TableCell> {item.passw} </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Mtable>
        </TableContainer>
    )
}

export default Table;