import React from "react";
import Figure from "react-bootstrap/Figure";
import './Inicial.css';

export default function Inicial() {
  return (
    <>
    <div className="center">
        <span>Gymarker o seu app de agendamento de academia</span>
    </div>
        <Figure>
          <Figure.Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
          />
        </Figure>
    </>
  );
}
