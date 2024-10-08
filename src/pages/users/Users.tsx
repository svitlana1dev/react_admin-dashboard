import { useEffect } from "react";
import axios from "axios";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { useState } from "react";
import Add from "../../components/add/Add";
import { User } from "types/types";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "./noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstname",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastname",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const toggleModal = () => {
    setOpen((currentState) => !currentState);
  };

  useEffect(() => {
    setUsers([]);
    axios
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id: number) => {
    setUsers((currentUsers) => currentUsers.filter((user) => +user.id != id));
  };

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button className="btn-icon" onClick={toggleModal}>
          <img src={require("../../assets/images/icons/plus.png")} alt="add" />
        </button>
      </div>
      <DataTable
        slug="users"
        columns={columns}
        rows={users}
        onDelete={handleDelete}
      />
      {open && <Add slug="user" columns={columns} onClose={toggleModal} />}
    </div>
  );
};

export default Users;
