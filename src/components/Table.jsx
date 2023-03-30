import React from "react";
import { Table, Container, Col, Row, Alert } from "react-bootstrap";

const TableComponent = ({ result, jenis }) => {
    if (result) {
        let hasil = JSON.parse(result);
        let status = hasil.status
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={12} className="mt-3">
                            <h4 className="text-center">Hasil Pencarian</h4>
                            <AlertComponent status={status} jenis={jenis} />
                            <TableData status={status} data={hasil.data} jenis={jenis} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

const AlertComponent = ({ status, jenis }) => {
    if (status === "failed") {
        return (
            <div className="text-center">
                <Alert variant="danger">
                    {(jenis == "bank") ? "Nomor Rekening Tidak Ditemukan!." : "Nomor E-Wallet Tidak Ditemukan / Terkena Limit!."}
                </Alert>
            </div>
        );
    }

}
const TableData = ({ status, data, jenis }) => {
    if (status == "success") {
        return (
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>{(jenis == "bank") ? "Bank" : "E-Wallet"}</th>
                        <th>Nomor {(jenis == "bank") ? "Rekening" : "E-Wallet"}</th>
                        <th>Nama Pemilik</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{(jenis == "bank") ? data.bank_name : data.ewallet_name}</td>
                        <td>{(jenis == "bank") ? data.account_number : data.phone_number}</td>
                        <td>{data.customer_name}</td>
                    </tr>

                </tbody>
            </Table>
        );
    }
}
export default TableComponent