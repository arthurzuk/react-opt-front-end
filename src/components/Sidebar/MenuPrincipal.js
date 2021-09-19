import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Menu({ login }) {
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
            {
                login !== true && <Nav>
                    <Nav.Link eventKey={2} href="/seguranca">
                        Segurança e Privacidade
                    </Nav.Link>
                </Nav>
            }
            {
                login !== true && <Nav>
                    <Nav.Link eventKey={2} href="/login">
                        Login
                    </Nav.Link>
                </Nav>
            }

            {
                login === true && <Nav>
                    <Nav.Link eventKey={2} href="/login">
                        Sair
                    </Nav.Link>
                </Nav>
            }
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}