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
  padding: "1px 6px 1px 6px",
  borderBottom: "1px solid #808080",
  verticalAlign: "top",
  //border: "1px solid #909090",
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
  width: "90%",
});

interface PlayerTableProps {
  Data: string[][];
}

export class PlayerTable extends React.Component<PlayerTableProps> {
  render() {
    return (
      <PlayerTableContainer>
        <Table size="small" aria-label="Attributes">
          <TableHead>
            <TableRow>
              {this.props.Data[0].map((item, index) => {
                return index === 0 ? (
                  <PlayerTableHeaderCell>{item}</PlayerTableHeaderCell>
                ) : (
                  <PlayerTableHeaderCell align="center">
                    {item}
                  </PlayerTableHeaderCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.Data.slice(1).map((row) => {
              return (
                <TableRow
                  key={row[0]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {row.map((value, index) => {
                    return index === 0 ? (
                      <PlayerTableCell>{value}</PlayerTableCell>
                    ) : (
                      <PlayerTableCell align="center">{value}</PlayerTableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </PlayerTableContainer>
    );
  }
}
