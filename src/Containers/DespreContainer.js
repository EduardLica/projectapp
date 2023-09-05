import React from "react";
import HoneyImage from "./../assets/img/honey.jpg";
import Button from "react-bootstrap/Button";
import "./../assets/CSS/DespreContainer.css";

const DespreContainer = () => {
  return (
    <div className="backgroundcontainer">
      <div className="containerdespre">
        <div className="textdespre">
          <h1>Mierea Ursului</h1>
          <p>
            Este o pasiune a familiei începută în anul 2005, transformată 7 ani
            mai târziu într-o afacere de familie.
          </p>
          <p>
            Anul 2012 a venit cu un progres în care am hotărât să extindem
            această activitate, astfel efectivul a ajuns la aproximativ 100 de
            familii de albine și o producție considerabilă, ocazie cu care
            mierea produsă de albinuțele noastre harnice a ajuns la un număr mai
            mare de clienți.
          </p>
          <Button className="custom-button" href="/about">
            Afla mai multe...
          </Button>
        </div>

        <div className="imagedespre">
          <img
            src={HoneyImage}
            alt="Imagine"
            className="img-fluid"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DespreContainer;
