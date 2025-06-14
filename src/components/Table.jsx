import { TableContainer, TableCell, TableRow, Table as MaterialTable, TableHead, TableBody } from "@mui/material";
import {TextField} from "@mui/material";
import styles from './styles/Table.module.css';
import { Paper } from "@mui/material";
import { useState, useEffect } from "react";


function THead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell className={styles.cell} align="center" > # </TableCell>
                <TableCell className={styles.cell} align="center"> Usuário </TableCell>
                <TableCell className={styles.cell} align="center"> Senha </TableCell> 
            </TableRow>
        </TableHead>
    );
}

function TBody({ usersList }) {
    return (
        <TableBody> 
            {
                usersList.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className={styles.cell} align="center"> 
                            {index+1} 
                        </TableCell>

                        <TableCell className={styles.cell} align="center">
                            {item.user}
                        </TableCell>

                        <TableCell className={styles.cell} align="center">
                            {item.passw}
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    );
}

function Table({ usersListState }) {
    const { usersList } = usersListState;
    return (
        <TableContainer component={Paper} elevation={3} className={styles.tableContainer}>
            <MaterialTable>
                <THead />
                <TBody usersList={ usersList } />
            </MaterialTable>
        </TableContainer>
    );
}

export default Table;