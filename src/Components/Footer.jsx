import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "../Style/footer.css";
const footer = () => {
  return (
    <>
      <div className="footerdiv">
        <div className="dev">
          <span>Developer-Shashank_Shekhar</span>
          <br/>
          <br/>
          <span>Location-Raipur,India</span>
          <br />
        </div>
        <div className="end">
          Copyright © www.KhaLo.com all rights are reserved!!!
        </div>
        <div className="social">
          <AiFillFacebook className="scoialImg" />
          <span className="scoialWord">Facebook</span>
          <br/>
          <AiFillLinkedin className="scoialImg" />
          <span className="scoialWord">Linkedin</span>
          <br/>
          <AiFillInstagram className="scoialImg" />
          <span className="scoialWord">Instagram</span>
          <br />
        </div>
      </div>
    </>
  );
};
export default footer;
