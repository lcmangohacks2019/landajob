import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { EightBaseAppProvider } from '@8base/app-provider';
import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';
import Sidebar from './shared/Sidebar';
import PopupCardExample from './shared/Popupcard';
import Profile from './components/Profile';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';

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
     <BrowserRouter>
      < EightBaseAppProvider
        uri={ENDPOINT_URL}
        authClient={authClient}
        onRequestSuccess={this.onRequestSuccess}
        onRequestError={this.onRequestError}
      >
      {({ loading }) => (
        <div id="App">
          <Sidebar />
          <div id="page-wrap">
            <h1>Testing the sidebar</h1>
          </div>
          <h1> <PopupCardExample /> </h1>
          <h3> <Profile /> </h3>
          <h4> <UserCard /> </h4>
        </div>
       )}
     </EightBaseAppProvider>
    </BrowserRouter>
    );
  }
}

export default App;
