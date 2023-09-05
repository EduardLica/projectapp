import React from "react";
import fb from "./../assets/img/fb.png";
import insta from "./../assets/img/insta.png";
import address from "./../assets/img/address.png";
import phone from "./../assets/img/phone.png";
import mail from "./../assets/img/email.png";
import "./../assets/CSS/Contact.css";

function Contact() {
  return (
    <div className="spacer">
      <div className="contact">
        <div className="contact-titlu">
          <h2>Pagina de Contact</h2>
        </div>

        <div className="contact-container">
          <div>
            <img src={address} alt="adresa" className="contact-img" />
            Sat Chechiş, Comuna Dumbraviţa, nr. 49/B, Judeţul Maramureş
          </div>

          <div>
            <img src={phone} alt="telefon" className="contact-img" />
            Telefon: 0722.222.222
          </div>

          <div>
            <img src={mail} alt="e-mail" className="contact-img" />
            E-mail: miereaursului@gmail.com
          </div>

          <div>
            <img src={fb} alt="facebook" className="contact-img" />
            www.facebook.com/MiereaUrsului
          </div>

          <div>
            <img src={insta} alt="instagram" className="contact-img" />
            www.instagram.com/MiereaUrsului
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
