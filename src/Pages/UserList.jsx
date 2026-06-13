import { useEffect, useState } from "react";
import Api from "../Api/axios";
import { useNavigate } from "react-router-dom";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

function UserList() {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getUsers = async () => {
    setLoading(true);
    const response = await Api.get("/students");
    // console.log(response);
    setUserdata(response.data);
    setLoading(false);
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
  // loading data
  if (loading) {
    return <h2>Loading Students data please wait....</h2>;
  }
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          background: "lightgreen",
        }}
      >
        <h2>Library Management System</h2>
        <Button
  label="Logout"
  onClick={handleLogout}
  style={{
    backgroundColor: "#dc2626",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
    margin: "5px"
  }}
/>
<Button
  label="Add"
  onClick={() => navigate("/add")}
  style={{
    backgroundColor: "#16a34a",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
    margin: "5px"
  }}
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
        <Column
          field="seatno"
          header="Seat No."
          style={{ width: "3%" }}
        ></Column>
        <Column
          field="date"
          header="Register Date"
          filter
          filterPlaceholder="Search"
          showFilterMenu = {false}
          style={{  minWidth:"150px"}}
          sortable
        ></Column>
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search"
           showFilterMenu = {false}
          style={{ minWidth:"150px"}}
          sortable
        ></Column>
        <Column
          field="phone"
          header="Phone"
          filter
          filterPlaceholder="Search"
           showFilterMenu = {false}
              style={{ minWidth:"150px"}}
          sortable
        ></Column>
        <Column
          field="fees"
          header="fees Status"
          filter
          filterPlaceholder="Search"
           showFilterMenu = {false}
          style={{  minWidth:"150px"}}
          sortable
        ></Column>
        <Column
          field="seat"
          header="seat Availability"
          filter
          filterPlaceholder="Search"
           showFilterMenu = {false}
          style={{ minWidth:"150px"}}
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
