import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const StyledTableRow = styled(TableRow)`
  :hover {
    cursor: pointer;
  }
`;

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    width: '60%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const PokeTable = (props) => {
  console.log(props);
  const { history, pokemons } = props;

  const classes = useStyles({});

  const rows = pokemons;

  const handleClick = (row) => {
    history.push(`/${row.id}`);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Pokedex ID</TableCell>
            <TableCell align="right">Pokemon Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.id} hover={true} onClick={() => handleClick(row)}>
              <TableCell component="th" scope="row">{row.number}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PokeTable;
