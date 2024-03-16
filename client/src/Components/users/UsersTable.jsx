import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            //row kiyla variable ekk gnnawa eka user kenekwa represent karanna, users.js eke prasadwa
            //rows wala data nethnm, 0 ta waga wishalada (if statement eka wage) rows.length > 0 ?
            rows.length > 0 ? (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <Button
                      sx={{ margin: "0px 10px" }}
                      onClick={() =>
                        selectedUser({ id: row.id, name: row.name })
                      }
                    >
                      Update
                    </Button>
                    <Button
                      sx={{ margin: "0px 10px" }}
                      onClick={() => deleteUser({ id: row.id })}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
                //mulin liyala thiyena id code eka -
                //prasadta adalawa table cell ekk gannawa eka, th ekk widihata weda karana
                //meka liyanne ID ekata, emanisa ekka one prasadge id eka, row eke id, row.id
                //den meken wenne data 500k thibbath eke mul data eka witharak 500k pennananwa,
                //apita one defferent data 500ma pennawnna
                //ewita  map function eka haraha repeat weddi key eken kiyanawa row.id gnn kiyla

                // data 0ta wada nethnm NO DATA
              ))
            ) : (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  No data
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UsersTable;
