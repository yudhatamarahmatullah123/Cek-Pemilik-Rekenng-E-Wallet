import React, { useState, useEffect } from 'react'
import bankScrapping from "../../data/bankScrapping";
import axios from "axios"
import API_URL from "../utils/constant"
import { Input, ButtonComponent, TableComponent, AuthorComponent } from "../components";
import { Spinner } from "react-bootstrap";

const Home = () => {
    const [bank, setBank] = useState([]);
    const [accountBank, setAccountBank] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState("");
    const [jenis, setJenis] = useState("");
    const [errorAccount, setErrorAccount] = useState(false);
    const [errorNumber, setErrorNumber] = useState(false);
    useEffect(() => {
        bankScrapping.then((result) => {
            setBank(result);
        });

    }, []);

    const changeAccountBank = (data) => {
        setAccountBank(data);
    }

    const changeAccountNumber = (data) => {
        setAccountNumber(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (accountBank.trim("") == "" || accountNumber.trim("") == "") {
            if (accountBank.trim("") == "") {
                setErrorAccount(true);
            } else {
                setErrorAccount(false);
            }

            if (accountNumber.trim("") == "") {
                setErrorNumber(true);
            } else {
                setErrorNumber(false);
            }

            return false;
        }

        setLoading(true);

        let jenis = accountBank.split("_")[0];
        const formData = new FormData();

        if (jenis == "bank") {
            formData.append("account_number", accountNumber);
            formData.append("bank_code", accountBank);
            setJenis("bank");
            search("/api/check-rekening", formData)
        } else {
            formData.append("phone_number", accountNumber);
            formData.append("ewallet_code", accountBank);
            setJenis("e-wallet");
            search("/api/check-ewallet", formData)
        }
    }

    const search = (parameter, data) => {
        axios.post(API_URL + parameter, data, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        }).then(res => {
            setResult(JSON.stringify(res.data));
            setLoading(false);
        }).catch(error => {
            alert("Error :" + error)
        })
    }

    return (
        <div>
            <h4 className="text-center mt-5 fw-bold">Cek Pemilik Rekening / E-Wallet</h4>
            <AuthorComponent />
            <Input bank={bank} accountBank={accountBank} accountNumber={accountNumber} changeAccountBank={changeAccountBank} changeAccountNumber={changeAccountNumber} errorAccount={errorAccount} errorNumber={errorNumber} />
            <ButtonComponent handleSubmit={handleSubmit} />
            <SpinnerComponent loading={loading} />
            <TableComponent result={result} jenis={jenis} />
        </div>
    )
}

const SpinnerComponent = ({ loading }) => {
    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-3">
                <Spinner animation="border" role="status"></Spinner>
            </div>
        );
    }
}
export default Home