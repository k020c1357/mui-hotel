import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { OrderContext } from '../context/OrderContext';

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DialogTables() {
  const classes = useStyles();
  const { state } = useContext(OrderContext);

  function createData(name, value) {
    return { name, value };
  }

  let dateIn = state.selectedDateIn.toDateString();
  let dateOut = state.selectedDateOut.toDateString();
  let breakfast = (state.foodType.checkedA ? "あり" : "なし");
  let dinner = (state.foodType.checkedB ? "あり" : "なし");

  const rows = [
    createData('チェックイン', dateIn),
    createData('チェックアウト', dateOut),
    createData('部屋タイプ', state.roomType),
    createData('大人', state.adultNumber),
    createData('子ども', state.childrenNumber),
    createData('乳幼児', state.babyNumber),
    createData('部屋数', state.roomNumber),
    createData('朝食', breakfast),
    createData('夕食', dinner),
  ];



  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}