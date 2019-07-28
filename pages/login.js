import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import LoginForm from '../src/LoginForm';

const Login = () => (
  <Container>
    <Row>
      <Col xs="6" sm="4"></Col>
      <Col xs="6" sm="4"><LoginForm /></Col>
      <Col sm="4"></Col>
    </Row>
  </Container>
);

export default Login;