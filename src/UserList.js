import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res.data);
        setListOfUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>User List</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {listOfUsers && listOfUsers.map((el) => (
          <Card key={el.id} style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/1200x/ee/e7/ee/eee7ee781d177742e1b964fe666a43a6.jpg"
              style={{ height: '150px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>ID: {el.id}</Card.Title>
              <Card.Title>Name: {el.name}</Card.Title>
              <Card.Text>Username: {el.username}</Card.Text>
              <Card.Text>Email: {el.email}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default UserList;
