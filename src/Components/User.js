import { React, useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
function User() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:4000/api/v1/user`);
   
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
          {data.user?.map((e) => (
            <tr key={e._id}>
              <td>{e.fullname}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>
                <Button
                  onClick={() => {
                  
                 
                    var newData = data.user.filter(function (el) {
                      console.log(el._id);
                      return el._id !== e._id;
                    });
                    console.log(newData);
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
