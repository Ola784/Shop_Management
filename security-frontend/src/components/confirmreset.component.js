
import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';

import { Router, Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./home.component";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { connect } from "react-redux";
import { forgotpass } from "../actions/auth";
import axios from "axios";
import ResetPassword from "./resetpassword.component";

class ConfirmReset extends Component {

    checkEmailValid = () => {
       // console.log("aaaaaaaaaaaaaaaaaaa");
        axios.get('http://localhost:8080/confirm-reset', {params: { confirmationToken: this.confirmationToken}})
        .then(response => {
            this.setState({
                message: response.data.message
                
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    constructor(props) {
        super(props);
        //console.log("a a a a ");
        const query = new URLSearchParams(this.props.location.search);
        const token = query.get('confirmationToken')
        this.state ={
            message: ""
            }
        this.confirmationToken = token;
       // console.log(this.confirmationToken);
        this.checkEmailValid();
    }

    

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                    <Route path="/reset-password" render={(props) => <ResetPassword {...props}/>}/>
                        <Route path='' render={() => {
                            return this.state.message === "Valid link." ? <Redirect to={{
                              pathname:  '/reset-password',
                              state: {confirmationToken: this.confirmationToken}}}/> : <Home/>
                        }} />
                    </Switch>
                </BrowserRouter>
            </div>


       
    );
    }
};


export default ConfirmReset;
