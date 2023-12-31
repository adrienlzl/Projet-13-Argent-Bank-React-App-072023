import React, { useState } from 'react';
import { useSelector } from "react-redux"
import "../css/pages/EditName.scss"
import { useNavigate } from "react-router-dom";
import {editNameCallApi} from "../Api/api.call";

function EditName() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const token = useSelector((state) => state.tokenReducer);
    const navigate = useNavigate();

    if (!token) {
        navigate('/Sign');
        return ;
    }
    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleSubmit = () => {
        if (firstName.trim() === '' || lastName.trim() === '') {
            return;
        }
        editNameCallApi(token, firstName, lastName)
            .then(() => {
                navigate("/User");
            })
            .catch((error) => {
                console.error('Erreur lors de la requête :', error);
            });
    }
    return (
        <section className="edit-name-section">
            <div className="edit-name-contenaire">
            <h1 className="edit-name-title">Edit name</h1>
            <div className="edit-name-wrapper">
                <label htmlFor="firstName">Frist name</label>
                <input
                    className="edit-name-input"
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={handleChangeFirstName}
                />
            </div>
            <div  className="edit-name-wrapper">
                <label htmlFor="lastName">Last name</label>
                <input
                    className="edit-name-input"
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={handleChangeLastName}
                />
            </div>
            <button className="edit-name-button" onClick={handleSubmit}>Submit</button>
            </div>
        </section>
    )
}
export default EditName