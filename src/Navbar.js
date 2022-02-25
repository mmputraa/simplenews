import React from "react";
import './App.css';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap'

class Navigation extends React.Component {

    render() {

        return(
            <div>
                  <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className="navbar-brand">NEWSWORLD</Navbar.Brand>
                        <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="please, search here..."
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button className="search" variant="outline-primary">Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;