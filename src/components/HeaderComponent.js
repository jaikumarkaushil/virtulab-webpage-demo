import React, { Component } from 'react';
import { Nav, Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem} from 'reactstrap';
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-scroll';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  
    this.state = {
      isMenuOpen: false,
      isModalOpen: true,
    };
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "scrolled") {
          this.setState({ status: "scrolled" });
        }
      } 
      else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
      }
    }
 });
  }

  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }
// If modal is required !
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen    
    });
  }

  

  render () {
    return (
        <Navbar dark fixed="top" id={this.state.status === "scrolled" ? "header-color" : "header"} expand="md">
          <NavbarBrand href="/" className="p-0 m-0 order-1">
            <img className="d-block d-md-none" src="assets/images/VirtuLab by DD Icon_White png 1@2x.svg" alt="brand-logo.svg"/>
            <img className="d-none d-md-block" src="assets/images/VirtuLab by DD Icon_White png 2@2x.svg" alt="brand-logo.svg"/>
          </NavbarBrand>          
          <Collapse isOpen={this.state.isMenuOpen} navbar className="order-5 order-md-2 flex-row align-items-center justify-content-end">
            <Nav navbar className="mt-3 mt-md-0 d-flex flex-row justify-content-between">
              <NavItem>
                <Link onClick={window.innerWidth<576 ? this.toggleMenu : null } smooth={true} offset={-95} to="use-cases" duration={2000} className="header-link">USE CASE</Link>
              </NavItem>
              <NavItem>
                <Link onClick={window.innerWidth<576 ? this.toggleMenu : null } smooth={true} offset={-90} to="features" duration={2000} className="header-link">FEATURES</Link>
              </NavItem>
              <NavItem>
                <Link onClick={window.innerWidth<576 ? this.toggleMenu : null } smooth={true} offset={-20} to="FAQs" duration={2000} className="header-link">FAQ</Link>
              </NavItem>
              <NavItem>
                <Link onClick={window.innerWidth<576 ? this.toggleMenu : null } smooth={true} to="contact" duration={2000} className="header-link">CONTACT</Link>
              </NavItem>
            </Nav>
          </Collapse>
          <Link smooth={true} to="contact" duration={2000} className="order-2 order-md-3 headerbutton-white">TEST DRIVE</Link>
          <Link smooth={true} to="contact"  duration={2000} className="order-3 order-md-4 headerbutton-blue"><span className="pl-3 pl-md-0">BUY</span></Link>
          <NavbarToggler onClick={this.toggleMenu} className="order-4"/>
          {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Virtulab Welcomes You!</ModalHeader>
            <ModalBody>
                <p >Hi! Welcome</p>
            </ModalBody>
          </Modal> */}
        </Navbar>
    );
  }
}


export default Header;