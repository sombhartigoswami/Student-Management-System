import { useEffect, useState } from "react";
import Api from "../Api/axios";
import { useNavigate } from "react-router-dom";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

function UserList() {
  const [userdata, setUserdata] = useState([]);
  const navigate = useNavigate();

  const getUsers = async () => {
    const response = await Api.get("/students");
    // console.log(response);
    setUserdata(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // function for Delete Student Data
  const terminateStudent = async (id) => {
    // console.log("delete button was clicked");
    await Api.delete(`/students/${id}`);
    getUsers();
  };

  // function for Edit and Delete Button
  const actionBtn = (rowdata) => (
    <>
      <Button
        label="Edit"
        onClick={() => navigate(`/edit/${rowdata.id}`)}
        style={{
          margin: "5px",
          background: "yellowgreen",
          padding: "7px",
          border: "none",
        }}
      />
      <Button
        label="Delete"
        onClick={() => terminateStudent(rowdata.id)}
        style={{
          margin: "5px",
          background: "red",
          padding: "7px",
          border: "none",
        }}
      />
    </>
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "lightgreen",
        }}
      >
        <h2>STUDENT MANAGEMENT SYSTEM</h2>
        <Button
          label="Add"
          style={{ margin: "10px" }}
          onClick={() => navigate("/add")}
        />
      </div>
      <DataTable
        value={userdata}
        showGridlines
        stripedRows
        paginator
        rows={4}
        size="small"
        filterDisplay="row"
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="id" header="Id"></Column>
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search"
          style={{ width: "25%" }}
          sortable
        ></Column>
        <Column
          field="email"
          header="Email"
          filter
          filterPlaceholder="Search"
          style={{ width: "25%" }}
          sortable
        ></Column>
        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search"
          style={{ width: "25%" }}
          sortable
        ></Column>
        <Column
          header="Action"
          body={actionBtn}
          style={{ width: "13%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
export default UserList;
