import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap";

const ButtonComponent = ({ handleSubmit }) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Button variant="success" as="input" type="submit" value="Check" className="col-md-12" onClick={(event) => handleSubmit(event)} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ButtonComponent