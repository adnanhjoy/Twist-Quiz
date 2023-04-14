import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ErrorPage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <h1>404</h1>
            <p>Sorry Page Not Found</p>
            <LinkContainer to='/'>
            <Button>Back To Home Page</Button>
            </LinkContainer>
        </div>
    );
};

export default ErrorPage;