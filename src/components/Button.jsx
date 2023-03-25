import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

const ButtonComponent = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Button variant="success" as="input" type="submit" value="Check" className="col-md-12" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ButtonComponent