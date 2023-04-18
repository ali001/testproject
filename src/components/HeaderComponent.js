import React, { Component } from "react";
import { Navbar, NavbarBrand,Nav,NavbarToggler,NavItem,Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink } from 'react-router-dom';
class Header extends Component {
        
    constructor(props){
        super(props);
        this.state ={
            isNavOpen :false,
            isModalOpen :false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    handleLogin (event){
         this.toggleModal();
         alert("Username:" + this.username.value + "Password:"+ this.password.value + "Remember:" + this.remember.checked);
         event.preventDefault();
    }
    render() {
        return (
            <>
                <Navbar dark color="primary" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/logo.png" width="41" height="30" alt="logo"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal} style={{color:'#fff'}}>
                                    <span className="fa fa-sign-in"></span> Login
                                </Button>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron jumbotron-fluid jumbotron-color">
                    <div className="container">
                        <h1 className="display-4">Company Details </h1>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                      <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                          <Label htmlFor="username">Username</Label>
                          <Input type="text" id="username" name="username"
                          innerRef={(input) =>this.username=input} />
                        </FormGroup>
                        <FormGroup>
                          <Label htmlFor="password">Password</Label>
                          <Input type="password" id="password" name="password" 
                          innerRef={(input) =>this.password=input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check >
                                <Input type="checkbox" name="remember" 
                                innerRef={(input) =>this.remember=input}/>
                                Remember Me !
                            </Label>

                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                      </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }

}

export default Header;