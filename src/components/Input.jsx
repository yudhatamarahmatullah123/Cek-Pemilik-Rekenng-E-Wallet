import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Container } from "react-bootstrap";
import bankScrapping from "../../data/bankScrapping";
import fs from "fs";

const Input = () => {
    const [bank, setBank] = useState([]);

    useEffect(() => {
        bankScrapping.then((result) => {
            setBank(result);
        });
        // setBank(bankScrapping);
    }, []);
    return (
        <div>
            <Container fluid>
                <Row className="mt-5">
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Account Bank / E-Wallet</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Pilih Bank / E-Wallet </option>
                                {bank && bank.map((data, index) => (

                                    <option value="1" key={index} > {data.nama_bank}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="number" placeholder="Nomor rekening bank / E-wallet" />
                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Input