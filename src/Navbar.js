import React from "react";
import './App.css';
import { Container, Navbar, Form, FormControl, Button } from 'react-bootstrap'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
    };

   onSearchChange = e => {
   this.setState({
        searchText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    render() {

        return(
            <div>
                  <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand className="navbar-brand">NEWSWORLD</Navbar.Brand>
                        <Form className="d-flex" onSubmit={this.handleSubmit}>
                            <FormControl
                            type="search"
                            onChange={this.onSearchChange}
                            placeholder="please, search here..."
                            className="me-2"
                            aria-label="Search"
                            ref={(input) => this.query = input}
                            />
                            <Button className="search" variant="outline-primary" type='submit'>Search</Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;