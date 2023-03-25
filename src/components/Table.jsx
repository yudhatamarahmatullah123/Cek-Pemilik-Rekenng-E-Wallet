import React from "react";
import { Table, Container, Col, Row } from "react-bootstrap";

const TableComponent = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12} className="mt-5">
                        <h4 className="text-center">Hasil Pencarian</h4>
                        <Table striped bordered hover className="text-center">
                            <thead>
                                <tr>
                                    <th>Nomor Rekening</th>
                                    <th>Nama Pemilik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11111111</td>
                                    <td>Mark</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TableComponent