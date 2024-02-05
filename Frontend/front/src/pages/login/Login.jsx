import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
  
    try {
      console.log("values are ", username, email, password, type);
      const add = await axios.post('http://localhost:5000/users/', {
        username,
        email,
        password,
        type,
      });
  
      // Clear form input values
      setUsername('');
      setEmail('');
      setPassword('');
      setType('');
    } catch (error) {
      console.log(error);
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      console.log("values are ", email, password);
      const add = await axios.post('http://localhost:5000/users/login', {
        email,
        password,
      });
  console.log("add is ", add);
      // Clear form input values
      setUsername('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <>
  <NavBar />
    <Form onSubmit={handleAddUser}>
      <h1>register</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridType">
          <Form.Label>Type</Form.Label>
          <Form.Select onChange={(e) => setType(e.target.value)} value={type}>
            <option value="">Select Type</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    <Form onSubmit={handleLogin}>
      <h1>login</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formLoginGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        </Row>

        <Row className="mb-3">

        <Form.Group as={Col} controlId="formLoginGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

      </Row>

      <Button variant="primary" type="submit">
        login
      </Button>
    </Form>


    
    </>
  );
}

export default Login;
