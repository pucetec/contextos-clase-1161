import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

const Head = () => {
  const { email, setEmail, setPassword, login } = useAuth();
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        display: "block",
        height: "100px",
      }}
    >
      Cabeza {email}
      <Row>
        <Col>
          <Form.Control onChange={(e) => setEmail(e.target.value)} />
          {"Usuario"}
        </Col>
        <Col>
          <Form.Control onChange={(e) => setPassword(e.target.value)} />
          {"Contraseña"}
        </Col>
        <Col>
          <Button onClick={() => login()}>Ingresar</Button>
        </Col>
      </Row>
    </div>
  );
};
export default Head;
