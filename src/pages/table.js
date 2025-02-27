import React from "react";
import { Table, Container, Button } from "react-bootstrap";

const data = [
  { id: 1, name: "John Doe", age: 28, city: "New York" },
  { id: 2, name: "Jane Smith", age: 32, city: "Los Angeles" },
  { id: 3, name: "Alice Johnson", age: 25, city: "Chicago" },
];

function Financial() {
  return <>
    <Container className="mt-4">
      <div className="table-responsive">
        <table  className="custom-table table table-striped table-hover">
          
            <tr>
              <th className="rounded-start">#</th> {/* First column rounded */}
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th className="rounded-end">Action</th> {/* Last column rounded */}
            </tr>
         
          <tbody>
          {data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>
                  <Button variant="primary" size="sm">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  </>;
}

export default Financialassa;
