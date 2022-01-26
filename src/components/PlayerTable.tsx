import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const PlayerTableCell = styled(
  TableCell,
  {}
)({
  fontSize: 12,
  padding: "4px 10px 4px 10px",
});

const PlayerTableHeaderCell = styled(
  PlayerTableCell,
  {}
)({
  textTransform: "uppercase",
  fontWeight: "bold",
});

const PlayerTableContainer = styled(
  TableContainer,
  {}
)({
  borderRadius: 10,
  border: "2px solid #909090",
  backgroundColor: "#505060",
  opacity: 0.5,
  width: "max-content",
});

interface RowData {
  name: string;
  value1: number;
  value2: number;
}

interface PlayerTableProps {
  row1: string;
  row2: string;
  row3: string;
  Data: RowData[];
}

export default class PlayerTable extends React.Component<PlayerTableProps> {
  render() {
    return (
      <PlayerTableContainer>
        <Table size="small" aria-label="Attributes">
          <TableHead>
            <TableRow>
              <PlayerTableHeaderCell> {this.props.row1}</PlayerTableHeaderCell>
              <PlayerTableHeaderCell align="center">
                {this.props.row2}
              </PlayerTableHeaderCell>
              <PlayerTableHeaderCell align="center">
                {this.props.row3}
              </PlayerTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.Data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <PlayerTableCell>{row.name}</PlayerTableCell>
                <PlayerTableCell align="center">{row.value1}</PlayerTableCell>
                <PlayerTableCell align="center">{row.value2}</PlayerTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PlayerTableContainer>
    );
  }
}
