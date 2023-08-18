import React, {useState, useEffect}  from "react";
import "../css/pages/User.scss"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import {setUser} from "../Actions/user.action";
import { useNavigate } from 'react-router-dom';
import {fetchUserProfile} from "../Api/api.call"

function User() {

    const token = useSelector((state) => state.tokenReducer);
    const [userData, setUserData] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/EditName');
    };

    useEffect(() => {
        if (!token) {
            navigate('/Sign');
            return;
        }
        const fetchUserData = () => {
            fetchUserProfile(token)
                .then(data => {
                    const { email, firstName, lastName } = data.body
                    setUserData(data);
                    dispatch(setUser({ email, firstName, lastName }));
                })
                .catch(error => {
                    console.error('Erreur :', error.message);
                });
        };
        fetchUserData();
    }, []);

    return (
        <section className="user-section">
            <div className="header-user">
                {userData ? (
                    <>
                        <h1 className="user-title">Welcome back<br />{userData.body.firstName} {userData.body.lastName}</h1>
                    </>
                ) : (
                    <>
                        <h1 className="user-title">Welcome back<br /></h1>
                    </>
                )}
                <button onClick={handleClick} className="edit-button">Edit name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </section>
    )
}
export default User