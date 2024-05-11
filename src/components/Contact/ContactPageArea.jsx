import React from "react";
import ContactForm from "./ContactForm";

const ContactPageArea = () => {
  return (
    <section className="contact-area pt-130 pb-130">
      <div className="container">
        <div className="inner-contact-info-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">
                  <a href="tel:0123456789">+23 (000) 68 603</a>
                  <a href="tel:0123456789">+55 (000) 68 879</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="content">
                  <a href="mailto:Envato@gmail.com">Envato@gmail.com</a>
                  <a href="mailto:Envato@gmail.com">Envato@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="content">
                  <p>
                    66 broklyn golden street <br />
                    600 New york. USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          <div className="row align-items-center g-0">
            <div className="col-lg-6">
              <div className="contact-img">
                <img src="/img/images/contact_img.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-content">
                <h2 className="title">Contact for Services</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageArea;
