import { React, useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
function User() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:4000/user`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">User Details</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Button
                  onClick={() => {
                    var newData = data.filter(function (el) {
                      return el.name !== user.name;
                    });
                    setData(newData);
                  }}
                  variant="danger"
                >
                  Delete user
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default User;
