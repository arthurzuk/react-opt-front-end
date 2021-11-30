import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthService from '../../services/auth.service.js';
import userService from '../../services/user.service.js';
import { AiFillBell } from "react-icons/ai";
import { IconContext } from 'react-icons';

export default function Menu() {
  var login = AuthService.authUser();
  var admin = null;
  var not = {status:null};
  if (login) {
    admin = login.autorizacao === 'ROLE_ADMIN';
    not = userService.getNotify();
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="/">Gymarker</Navbar.Brand>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="/politicas">
                Termos e Políticas
              </Nav.Link>
            </Nav>
            {login && (
              <Nav>
                <Nav.Link eventKey={2} href="/seguranca">
                  Segurança e Privacidade
                </Nav.Link>
              </Nav>
            )}
            {admin && (
                <Nav>
                  <Nav.Link eventKey={2} href="/dev">
                    Credenciais
                  </Nav.Link>
                </Nav>
            )}
            {login === null && (
              <Nav>
                <Nav.Link eventKey={2} href="/login">
                  Login
                </Nav.Link>
              </Nav>
            )}
            {not.status === false && (
            <Nav>
              <IconContext.Provider value={{color: 'red'}}>
                <NavDropdown title={<AiFillBell/>} id="nav-dropdown">
                  <NavDropdown.Item class="text-danger" eventKey="Termo" href="/seguranca">Novo Termo!</NavDropdown.Item>
                </NavDropdown>
              </IconContext.Provider>            
            </Nav>
            )}
            {not.status === true && (
            <Nav>
              <IconContext.Provider value={{ color: 'green'}}>
                <NavDropdown title={<AiFillBell/>} id="nav-dropdown">
                  <NavDropdown.Item class="text-success" eventKey="Termo" href="/seguranca">Termo Atualizado!</NavDropdown.Item>
                </NavDropdown>
              </IconContext.Provider>            
            </Nav>
            )}
            {login === true && (
              <Nav>
                <Nav.Link eventKey={2} href="/login">
                  Sair
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
