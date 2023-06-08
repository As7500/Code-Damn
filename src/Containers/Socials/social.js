import React from 'react'
import "./social.css"
import Girl from "../assets/girl2.svg";
import Circle from "../assets/circle.svg";
import Icon from "../assets/icon.svg" 
import Down from "../assets/down.svg";
import Light from "../assets/light.svg";
import Poly from "../assets/poly.svg";
import Bell from "../assets/bell.svg";
import { Link } from 'react-router-dom';

function social() {
  return (
    <div className="form-socials">
    <div className="sidebar1">
      <div className="empty-state1">
        <div className="instance-group">
          <div className="nav-wrapper1">
            <div className="nav8">
              <img className="icon4" alt="" src={Circle} />
              <Link to="/profile" className="home4">Profile</Link>
              <div className="nav-child1" />
            </div>
          </div>
          <div className="nav-wrapper2">
            <div className="nav8">
              <img className="icon4" alt="" src={Circle} />
              <div className="home4 home45">Socials</div>
              <div className="nav-child1" />
            </div>
          </div>
          <div className="nav-wrapper1">
            <div className="nav8">
              <img className="icon4" alt="" src={Circle} />
              <div className="home4">Portfolio</div>
              <div className="nav-child1" />
            </div>
          </div>
          <div className="nav-wrapper1">
            <div className="nav8">
              <img className="icon4" alt="" src={Circle} />
              <Link to="/plane" className="home4">Resume</Link>
              <div className="nav-child1" />
            </div>
          </div>
        </div>
        <div className="empty-state-item" />
      </div>
    </div>
    <div className="navigation1">
      <div className="codedamn-container">
        <b className="codedamn1">codedamn</b>
      </div>
      <div className="navbarssearch-field-group">
        <div className="navbarssearch-field1">
          <img className="search-icon1" alt="" src={Icon} />
          <div className="placeholder3">Search</div>
        </div>
        <div className="frame-parent9">
          <div className="frame-parent10">
            <div className="frame-wrapper2">
              <div className="group">
                <b className="b4">🔥</b>
                <img
                  className="lightning-icon1"
                  alt=""
                  src={Light}
                />
                <div className="placeholder4">2</div>
              </div>
            </div>
            <div className="frame-parent11">
              <div className="polygon-group">
                <img className="polygon-icon" alt="" src={Poly} />
                <div className="xp1">XP</div>
              </div>
              <b className="b5">🔥</b>
              <b className="placeholder5">1.2K</b>
            </div>
            <div className="bell-group">
              <img className="bell-icon1" alt="" src={Bell} />
              <div className="ellipse-parent11">
                <div className="frame-child44" />
                <b className="b6">1</b>
              </div>
            </div>
          </div>
          <div className="profile1">
            <div className="rectangle-group">
              <img
                className="frame-child45"
                alt=""
                src={Girl}
              />
              <div className="badge1">
                <img className="badge-item" alt="" src={Poly} />
                <b className="b7">5</b>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons2">
          <div className="base-button1">
            <div className="text37">Get Pro</div>
            <img
              className="master-inputvuesaxlinearpro-icon"
              alt=""
              src="/arrowright2.svg"
            />
          </div>
        </div>
        <div className="frame-wrapper3">
          <div className="courses-group">
            <div className="placeholder3">Courses</div>
            <img
              className="material-symbolsarrow-back-io-icon1"
              alt=""
              src={Down}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="center-column">
      <div className="form">
        <div className="input">
          <div className="label">GitHub</div>
          <div className="master-input">
          <input
            className="input1"
            type="text"
             placeholder="Username"
             
          />

            <div className="helper-text">Minimum 6 characters</div>
          </div>
        </div>
        <div className="input">
          <div className="label">Linkedin</div>
          <div className="master-input1">
          <input
            className="input1"
            type="text"
             placeholder="Linkedin profile URL"
          />
            <div className="helper-text">Minimum 6 characters</div>
          </div>
        </div>
        <div className="input">
          <div className="label">Facebook</div>
          <div className="master-input1">
          <input
            className="input1"
            type="text"
             placeholder="Facebook profile URL"
          />
            <div className="helper-text">Minimum 6 characters</div>
          </div>
        </div>
        <div className="input">
          <div className="label">Instagram</div>
          <div className="master-input1">
          <input
            className="input1"
            type="text"
             placeholder="Instagram profile URL"
          />
            <div className="helper-text">Minimum 6 characters</div>
          </div>
        </div>
        <div className="input">
          <div className="label">Dribbble</div>
          <div className="master-input1">
          <input
            className="input1"
            type="text"
             placeholder="Dribbble profile URL"
          />
            <div className="helper-text">Minimum 6 characters</div>
          </div>
        </div>
        <div className="input">
          <div className="label">Behance</div>
          <div className="master-input1">
          <input
            className="input1"
            type="text"
             placeholder="Behance profile URL"
          />
            <div className="helper-text">Minimum 6 characters</div>
          </div>
        </div>
      </div>
      <div className="buttons3">
        <div className="new-button2">
          <div className="masterbutton2">
            <div className="text44">Cancel</div>
          </div>
        </div>
        <div className="new-button3">
          <div className="masterbutton3">
            <div className="text44">Save changes</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default social
