import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function AppTable({ data, buttonStatus = false, onClickButton }) {
  return (
    <TableContainer component={Paper}>
      <Stack spacing={2}>

        {buttonStatus && (
          <Box display={"flex"} flexDirection={"row-reverse"} pr={2}>
            <Button onClick={onClickButton} color="success" variant="contained">
              Add Shehia
            </Button>
          </Box>
        )}

        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">NAME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row,index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.boundary_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Stack>
    </TableContainer>
  );
}
