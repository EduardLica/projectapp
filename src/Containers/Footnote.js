import React from "react";
import fb from "./../assets/img/fb.png";
import insta from "./../assets/img/insta.png";
import "./../assets/CSS/Footnote.css";

function Footnote() {
  return (
    <div className="footnote-container">
      <p>© 2023 Mierea Ursului. Toate drepturile rezervate.</p>
      <div className="social-icons">
        <img src={fb} alt="facebook" className="footnote-img" />
        <img src={insta} alt="instagram" className="footnote-img" />
      </div>
    </div>
  );
}

export default Footnote;
