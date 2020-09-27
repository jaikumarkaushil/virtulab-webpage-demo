import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isMenuOpen: false,
      isModalOpen: false,
    };
  }
  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
      });
    }
  closeMenu() {
      this.setState({isMenuOpen: false})
    }
  handleStateChange (state) {
    this.setState({isMenuOpen: state.isOpen})  
  } 

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen    // this will change the state of modal to negation of the isModalOpen
    });
}

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
    event.preventDefault();

}

  render () {
    return (
      <div>
        <Navbar dark fixed="top" className="container">
          <NavbarBrand href="/" className="p-0 m-0">
            <img src="assets/images/VirtuLab by DD Icon_White png 1@2x.svg" alt="brand-logo.svg"/>
          </NavbarBrand>
          <Nav navbar className="d-flex flex-row align-items-center justify-content-end">
            <NavItem>
              <Link smooth={true} offset={-70} to="use-cases" duration={2000} className="header-link">USE CASE</Link>
            </NavItem>
            <NavItem>
              <Link smooth={true} offset={-81} to="features" duration={2000} className="header-link">FEATURES</Link>
            </NavItem>
            <NavItem>
              <Link smooth={true} to="FAQs" duration={2000} className="header-link">FAQ</Link>
            </NavItem>
            <NavItem>
              <Link smooth={true} to="contact" duration={2000} className="header-link" duration={2000}>CONTACT</Link>
            </NavItem>
            <NavItem>
                <Link smooth={true} to="/" duration={2000} className="headerbutton-white">TEST DRIVE</Link>
            </NavItem>
            <NavItem>
              <Link smooth={true} to="/"  duration={2000} className="headerbutton-blue">BUY</Link>
            </NavItem>
          </Nav>
        </Navbar>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username"
                        innerRef={(input) => this.username = input} 
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"
                        innerRef={(input) => this.password = input} 
                    />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="remember"
                        innerRef={(input) => this.remember = input}  />
                        Remember me
                    </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
        </ModalBody>
      </Modal>
      {/* <Menu width={"300px"} noOverlay isOpen={this.state.isMenuOpen} onClick={this.toggleMenu}
      onStateChange={(state) => this.handleStateChange(state)}>
          <Nav vertical className="navlinkStyle">
              <h1 className="mt-4">Prarukh</h1>
              <hr/>
            <NavItem>
                <NavLink className="nav-link" onClick={this.closeMenu} to='/home'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link"  onClick={this.closeMenu} to='/menu'>Menu</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link"  onClick={this.closeMenu} to='/aboutus'>About Us</NavLink>
            </NavItem>
            <NavItem className="my-5 d-lg-none">
              <HashLink smooth to="/home/#reservation" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
              <button className="button2"><span className="fa fa-ticket fa-lg"></span> Reservation</button>
              </HashLink>
            </NavItem>
            <NavItem className="my-5 d-lg-none">
              <button className="button2" color="success" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</button>
            </NavItem>
          </Nav>
        </Menu> */}
      </div>
    );
  }
}


export default Header;