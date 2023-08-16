import React from "react";
import { BiLogoLinkedin,BiLogoInstagram,BiLogoFacebook,BiPhoneCall,BiLogoTwitter } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => (
  <footer
    className="page-footer footer-container font-small blue pt-4"
    style={{ backgroundColor: "#F8F9FA" }}
  >
    <div className="container-fluid text-center text-md-left w-250 d-flex justify-content-center align-content-center">
      <div className="m-5 d-flex justify-content-center align-content-center">
        <div className="d-flex w-50 text-left justify-content-center align-content-center">
          <div className="col-md-6 mt-md-0 mt-3 me-5 text-md-start border-end ">
            <h5 className="text-uppercase">Solutions</h5>
            <p className="text-muted">
              E-Mobility Vehicle Testing Engine Testing Advanced Test Rigs Test
              Equipment Central Platform Driving Robot Solution Brix Lite Test
              Data Management Brix Lab Facility Management Distributed Brix.
            </p>
          </div>

          <div className="col-md-6 mt-md-0 mt-3 me-5 text-md-start border-end  d-flex flex-column justify-content-around">
            <div className="d-flex">
              <span className="mt-3 text-secondary me-3">
                <TiContacts size={30} className="" />
              </span>
              <span>
                <p className="text-muted mt-3">
                  SYS Technology Solutions Pvt. Ltd, 25/5, Rajiv Gandhi Infotech
                  Park, Hinjawadi, Phase 3, Pune 411057, India.
                </p>
              </span>
            </div>
            <div className="d-flex text-secondary">
              <span>
                <BiPhoneCall size={30} className="me-3" />{" "}
              </span>
              <span>
                <p className="text-muted">+91 98790876567</p>
              </span>
            </div>
            <div className="d-flex text-secondary">
              <span>
                {" "}
                <AiOutlineMail size={30} className="me-3" />
              </span>
              <span>
                <p className="text-muted">info@iasys.co.in</p>
              </span>
            </div>
          </div>

          <div className="col-md-6 mt-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled ">
              <li className="text-md-start d-flex justify-content-around">
                <a
                  href="#!"
                  className="footer-link text-secondary text-decoration-none d-flex w-50"
                >
                  <span className="me-3">
                    <BiLogoInstagram size={30} />
                  </span>
                  <span>
                    <p>Instagram</p>
                  </span>
                </a>
              </li>
              <li className="d-flex justify-content-around">
                <a
                  href="#!"
                  className="footer-link text-md-start text-secondary text-decoration-none d-flex w-50"
                >
                  <span className="me-4">
                    <BiLogoLinkedin size={30} />
                  </span>
                  <span>
                    <p>Linkedin</p>
                  </span>
                </a>
              </li>
              <li className="d-flex justify-content-around">
                <a
                  href="#!"
                  className="footer-link text-md-start text-secondary text-decoration-none d-flex w-50"
                >
                  <span className="me-3">
                    <BiLogoFacebook size={30} />
                  </span>
                  <span>
                    <p>Facebook</p>
                  </span>
                </a>
              </li>
              <li className="d-flex justify-content-around">
                <a
                  href="#!"
                  className="footer-link text-secondary text-start text-decoration-none d-flex w-50"
                >
                  <span className="me-4">
                    {" "}
                    <BiLogoTwitter size={30} />
                  </span>
                  <span className="">
                    <p>Twitter</p>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3 mt-5">
      © 2020 Copyright:
      <a href="https://github.com/shivamshukla1151/" className="m-2">
        Shivam Shukla
      </a>
    </div>
  </footer>
);

export default Footer;