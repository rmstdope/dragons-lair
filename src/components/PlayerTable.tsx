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
  padding: "2px 6px 2px 6px",
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
  row1: string;
  row2?: string;
  row3?: string;
  row4?: string;
  Data: string[][];
}

export default class PlayerTable extends React.Component<PlayerTableProps> {
  render() {
    return (
      <PlayerTableContainer>
        <Table size="small" aria-label="Attributes">
          <TableHead>
            <TableRow>
              <PlayerTableHeaderCell> {this.props.row1}</PlayerTableHeaderCell>
              {this.props.row2 != null ? (
                <PlayerTableHeaderCell align="center">
                  {this.props.row2}
                </PlayerTableHeaderCell>
              ) : (
                ""
              )}
              {this.props.row3 != null ? (
                <PlayerTableHeaderCell align="center">
                  {this.props.row3}
                </PlayerTableHeaderCell>
              ) : (
                ""
              )}
              {this.props.row4 != null ? (
                <PlayerTableHeaderCell align="center">
                  {this.props.row4}
                </PlayerTableHeaderCell>
              ) : (
                ""
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.Data.map((row) => (
              <TableRow
                key={row[0]}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <PlayerTableCell>{row[0]}</PlayerTableCell>
                {this.props.row2 != null ? (
                  <PlayerTableCell align="center">{row[1]}</PlayerTableCell>
                ) : (
                  ""
                )}
                {this.props.row3 != null ? (
                  <PlayerTableCell align="center">{row[2]}</PlayerTableCell>
                ) : (
                  ""
                )}
                {this.props.row4 != null ? (
                  <PlayerTableCell align="center">{row[3]}</PlayerTableCell>
                ) : (
                  ""
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PlayerTableContainer>
    );
  }
}
