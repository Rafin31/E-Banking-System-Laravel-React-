import React from 'react';
import Client_Sidemenu from '../Layouts/client_sidemenu';
import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Client_EditProfile() {
    const user = (JSON.parse(window.sessionStorage.getItem('user')));
    const history = useHistory();

    const [error, setError] = useState({
        error: []
    })
    const [data, setData] = useState({
        user_name: "",
        phone_number: "",
        email: "",
        address: "",
        user_type: "",
    });
    useEffect(() => {
        if (window.sessionStorage.getItem('status') === 'true')
            loadEditUser();
    }, [])
    const loadEditUser = () => {
        const result = axios.get(`http://127.0.0.1:8000/api/edituser/${user.id}`)
            .then(response => {
                setData(response.data.users)
            })
            .catch(error => {
                alert("something Went Wrong");
            })

    }

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const submitted = (e) => {
        e.preventDefault();
        // console.log(data);
        Edit();
        //console.log(error);

    }

    const Edit = () => {
        const result = axios.post(`http://127.0.0.1:8000/api/edituseroparation/${user.id}`, JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
            .then(response => {
                if (response.data.status === 200) {
                    alert("Successfully edited");
                    history.push("/Client_Profile")
                } else {
                    setError({
                        error: response.data.error
                    })
                }
            })
            .catch(error => {
                alert("Something Went Wrong");
            })

    }
    return (
        <>
            <Client_Sidemenu />
            <div className="content">
                <div class="container-fluid">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="card m-lg-5">
                                    <div class="card-body">
                                        <div class="form-validation">
                                            <form onSubmit={(e) => submitted(e)} class="form-valide">

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-skill">User Type <span
                                                        class="text-danger"></span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <select class="form-control" name="user_type" id="val-skill"
                                                            name="val-skill" onChange={(e) => onchange(e)} name="user_type" value={data.user_type} disabled >
                                                            <option >User Type</option>
                                                            <option value="clients">Clients</option>
                                                            <option value="bank_manager">Bank Manager</option>
                                                            <option value="noney_exchange_officer">Money exchange officer
                                                            </option>
                                                            <option value="admin">Admin</option>
                                                        </select>

                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.user_type}</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-username">Username <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-username"
                                                            name="user_name" placeholder="Enter a username.." onChange={(e) => onchange(e)} name="user_name" value={data.user_name} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.user_name}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-email">Email <span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-email" name="email"
                                                            placeholder="Your valid email.." onChange={(e) => onchange(e)} name="email" value={data.email} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.email}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="val-confirm-password">Address <span
                                                            class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-confirm-password"
                                                            name="address" placeholder="Address" onChange={(e) => onchange(e)} name="address" value={data.address} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.address}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">Phone (BD)
                                                        <span class="text-danger">*</span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control" id="val-phoneus"
                                                            name="phone_number" placeholder="+88 01754789658" onChange={(e) => onchange(e)} name="phone_number" value={data.phone_number} />
                                                        {/* error */}
                                                        <div className="error alert-danger">
                                                            <p>{error.error.phone_number}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-lg-4 col-form-label" for="val-phoneus">

                                                    </label>
                                                    <div class="col-lg-6">
                                                        <button type="submit"
                                                            class="btn btn-primary w-100">Edit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}


export default Client_EditProfile;