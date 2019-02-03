import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { graphql } from "react-apollo";
import { EightBaseAppProvider } from '@8base/app-provider';
import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';
import Sidebar from './shared/Sidebar';
import Routes from './routes/index';
import { ToastContainer, toast } from 'react-toastify';
// import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';
import { jobOpnings, goalJobSkills, currentJobSkills, employee, employeeList, UserSkillList } from "./graphql/query";
import  Navbar from "./components/navbar"

const ENDPOINT_URL = 'https://api.8base.com/cjrmowyc0000001qghp3ajxap'
const AUTH_CLIENT_ID = 'qGHZVu5CxY5klivm28OPLjopvsYp0baD';
const AUTH_DOMAIN = 'auth.8base.com';

const authClient = new WebAuth0AuthClient({
  domain: AUTH_DOMAIN,
  clientId: AUTH_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/auth`,
});

class App extends React.PureComponent {

  onRequestSuccess = ({ operation }) => {
    const message = operation.getContext()["TOAST_SUCCESS_MESSAGE"];

    if (message) {
      toast.success(message);
    }
  };

  onRequestError = ({ graphQLErrors }) => {
    const hasGraphQLErrors = Array.isArray(graphQLErrors) && graphQLErrors.length > 0;

    if (hasGraphQLErrors) {
      graphQLErrors.forEach(error => {
        toast.error(error.message);
      });
    }
  };

  render() {
    return (
// <<<<<<< HEAD
//       <div>
//       <Profile />
//       </div>
// =======
     <BrowserRouter>
      < EightBaseAppProvider
        uri={ENDPOINT_URL}
        authClient={authClient}
        onRequestSuccess={this.onRequestSuccess}
        onRequestError={this.onRequestError}
      >
      {({ loading }) => (
        <div>
            <Sidebar />
            <Routes />
            
        </div>   
       )}
     </EightBaseAppProvider>
    </BrowserRouter>
// >>>>>>> 18905e1f7600a564ef560317d2030c30371de8e0
    );
  }
}

export default App;
