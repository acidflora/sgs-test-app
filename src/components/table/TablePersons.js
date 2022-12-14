import Table from "react-bootstrap/Table";
import React from "react";

const TablePersons = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>City</th>
          <th>Department</th>
          <th>Brigade</th>
          <th>Shift</th>
        </tr>
      </thead>
      <tbody>
        {props.persons.map((x, i) => (
          <tr key={i}>
            <td>{x.id}</td>
            <td>{x.name}</td>
            <td>{x.city}</td>
            <td>{x.department}</td>
            <td>{x.brigade}</td>
            <td>{x.shift}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TablePersons;
