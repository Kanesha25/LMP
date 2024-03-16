import { Box } from "@mui/material";
import Userform from "./Userform";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    //program eka start ekedima wenna ona dewal
    getUsers();
  }, []);

  // sample data itka iwath kara API EKA CLL KARA GENIMA
  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users") // backend eken data eka illanawa, ee gaththu data eka thamai response ekk widihata enne
      .then((Response) => {
        //ee gaththu response eka console eke pennanawa
        //console.log(Response.data.response); mekedi console eke output eka enawa
        setUsers(Response.data?.response || []); // response eka awata passe mokkhari isue ekakin data ek nethi unoth emty arry ekk pennanna
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3001/api/createuser", payload)
      .then((Response) => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);
    const payload = {
      id: data.id,
      name: data.name,
    };
    Axios.post("http://localhost:3001/api/updateUser", payload)
      .then((Response) => {
        getUsers();
        setSubmitted(false);
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  const deleteUser = (data) => {
    Axios.post("http://localhost:3001/api/deleteUser", data)
      .then((Response) => {
        getUsers();
      })
      .catch((error) => {
        console.error("Axios Error : ", error);
      });
  };

  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <Userform
        addUser={addUser}
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UsersTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={(data) =>
          window.confirm("Are you sure ?") && deleteUser(data)
        }
      />
    </Box>
  );
};

export default Users;
