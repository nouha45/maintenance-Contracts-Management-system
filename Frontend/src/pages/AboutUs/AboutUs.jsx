import * as React from "react";
import "./aboutUs.css";
import logo from "../../assets/logoGBL.png"

export default class AboutUsPage extends React.Component {


  render() {
    return (
      <div className="aboutUs">
        <img className="logo" src={logo} alt="gbl-in" width="200" height="200" />
     <div className="description">   <p >
          GBL INC SARL AU is a Moroccan company based in Casablanca. We are on the market since October 2020, and we
          have have have had the privilege to accompany some clients at national and international level.
          
        </p></div>
      <a href="https://gbl-inc.org/">  <button className="buttons btn-hover color-1" >
        go to official website
        </button></a>
      </div>
    );
  }
}