import React, { useState } from 'react';
import "./prof.css"

import Girl from "../assets/girl2.svg";
import Circle from "../assets/circle.svg";
import Icon from "../assets/icon.svg" 
import Down from "../assets/down.svg";
import Light from "../assets/light.svg";
import Poly from "../assets/poly.svg";
import Bell from "../assets/bell.svg";
import Calc from "../assets/calc.svg"; 
import On from "../assets/on.svg";
import { Link } from "react-router-dom";

function profile() {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div className="form-profile">
    <div className="sidebar2">
      <div className="empty-state2">
        <div className="instance-container">
          <div className="nav-wrapper5">
            <div className="nav12">
              <img className="icon8" alt="" src={Circle} />
              <div className="home8 home45">Profile</div>
              <div className="nav-child5" />
            </div>
          </div>
          <div className="nav-wrapper6">
            <div className="nav12">
              <img className="icon8" alt="" src={Circle} />
              <Link to="/social" className="home8">Socials</Link>
              <div className="nav-child5" />
            </div>
          </div>
          <div className="nav-wrapper6">
            <div className="nav12">
              <img className="icon8" alt="" src={Circle} />
              <Link to="/portfolio" className="home8">Portfolio</Link>
              <div className="nav-child5" />
            </div>
          </div>
          <div className="nav-wrapper6">
            <div className="nav12">
              <img className="icon8" alt="" src={Circle} />
              <Link to="/plane" className="home8">Resume</Link>
              <div className="nav-child5" />
            </div>
          </div>
        </div>
        <div className="empty-state-inner" />
      </div>
    </div>
    <div className="form1">
      <div className="avatar">
        <img className="avatar-child" alt="" src={Girl} />
        <div className="buttons4">
          <div className="new-button4">
            <div className="masterbutton4">
              <div className="text46">Upload new picture</div>
            </div>
          </div>
          <div className="new-button5">
            <div className="masterbutton5">
              <div className="text46">Delete</div>
            </div>
          </div>
        </div>
      </div>
      <div className="form2">
        <div className="label-frame">
          <div className="label6">Display name</div>
          <div className="masterinput">
          <input type="text" className="input13" placeholder="Marina Budarina"/>
            <div className="helper-text6">
              Name entered above will be used for all issued certificates
            </div>
          </div>
        </div>
        <div className="label-frame">
          <div className="label6">About</div>
          <div className="master-input7">
            <input type="text" className="input15" placeholder="About Me"/>
            <div className="helper-text7">
              Name entered above will be used for all issued certificates
            </div>
          </div>
        </div>
        <div className="label-frame">
          <div className="label6">Profession</div>
          <input type="text" className="master-input7 input17 text48" placeholder="Student"/>
        </div>
        <div className="masterinput-style">
          <div className="masterinput">
            <div className="label-frame">
              <div className="label6">Date of birth</div>
              <div className="input-frame">
                <div className="left-content">
                  <div className="text-cursor">
                    <div className="input18">Input</div>
                    <div className="cursor">
                      <div className="rectangle" />
                    </div>
                    <div className="placeholder6">DD/MM/YY</div>
                  </div>
                </div>
                <div className="right-content">
                  <img className="icon-right" alt="" src={Calc}/>
                </div>
              </div>
            </div>
            <div className="helper-text9">Helper text</div>
          </div>
        </div>
        <div className="masterinput-style">
          <div className="masterinput">
            <div className="label-frame">
              <div className="label6">Gender</div>
              <div className="input-frame">
      <div className="left-content">
        <div className="text-cursor">
          <div className="input18">Input</div>
          <div className="cursor">
            <div className="rectangle" />
          </div>
          <div className="placeholder6">What is your gender</div>
        </div>
      </div>
      <div className="right-content">
        <select className="icon-right" value={selectedGender} onChange={handleGenderChange}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
            </div>
            <div className="helper-text9">Helper text</div>
          </div>
        </div>
      </div>
      <div className="visibility">
        <div className="label-frame">
          <b className="title4">Section visibility</b>
          <div className="text51">
            Select which sections and content should show on your profile
            page.
          </div>
        </div>
        <div className="visibility-options">
          <div className="visibility-option">
            <div className="content1">
              <b className="title5">Followers and following</b>
              <div className="text52">
                Shows your followers and the users you follow on codedamn
              </div>
            </div>
            <img
              className="control-icons4"
              alt=""
              src={On}
            />
          </div>
          <div className="visibility-option">
            <div className="content1">
              <b className="title5">XP</b>
              <div className="text52">Shows the XP you have earned</div>
            </div>
            <img
              className="control-icons4"
              alt=""
              src={On}
            />
          </div>
          <div className="visibility-option">
            <div className="content1">
              <b className="title5">Achievement badges</b>
              <div className="text52">
                Shows your relative percentile and proficiency
              </div>
            </div>
            <img
              className="control-icons4"
              alt=""
              src={On}
            />
          </div>
        </div>
      </div>
      <div className="buttons5">
        <div className="new-button4">
          <div className="masterbutton5">
            <div className="text46">Cancel</div>
          </div>
        </div>
        <div className="new-button7">
          <div className="masterbutton4">
            <div className="text46">Save changes</div>
          </div>
        </div>
      </div>
    </div>
    <div className="navigation2">
      <div className="right-content">
        <b className="codedamn2">codedamn</b>
      </div>
      <div className="navbarssearch-field-container">
        <div className="navbarssearch-field2">
          <img className="search-icon2" alt="" src={Icon} />
          <div className="title5">Search</div>
        </div>
        <div className="frame-parent12">
          <div className="frame-parent13">
            <div className="frame-wrapper4">
              <div className="container">
                <b className="b8">🔥</b>
                <img
                  className="lightning-icon2"
                  alt=""
                  src={Light}
                />
                <div className="placeholder9">2</div>
              </div>
            </div>
            <div className="frame-parent14">
              <div className="polygon-container">
                <img className="frame-child46" alt="" src="/polygon-8.svg" />
                <div className="xp2">XP</div>
              </div>
              <b className="b9">🔥</b>
              <b className="placeholder10">1.2K</b>
            </div>
            <div className="bell-container">
              <img className="bell-icon2" alt="" src={Bell} />
              <div className="ellipse-parent12">
                <div className="frame-child47" />
                <b className="b10">1</b>
              </div>
            </div>
          </div>
          <div className="profile2">
            <div className="rectangle-container">
              <img
                className="frame-child48"
                alt=""
                src={Girl}
              />
              <div className="badge2">
                <img className="badge-inner" alt="" src={Poly} />
                <b className="b11">5</b>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons6">
          <div className="base-button2">
            <div className="text57">Get Pro</div>
            <img
              className="master-inputvuesaxlinearpro-icon6"
              alt=""
              src="/arrowright3.svg"
            />
          </div>
        </div>
        <div className="frame-wrapper5">
          <div className="courses-container">
            <div className="title5">Courses</div>
            <img
              className="material-symbolsarrow-back-io-icon2"
              alt=""
              src={Down}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default profile
