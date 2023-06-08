import React from 'react'
import "./portfolio.css"
import Recc from "../assets/rec2.svg";
import Face from "../assets/rec3.svg";
import Html from "../assets/html.svg";
import Javascript from "../assets/javascript.svg";
import Man from "../assets/maan.svg";
import Girl from "../assets/girl2.svg";
import Circle from "../assets/circle.svg";
import Icon from "../assets/icon.svg" 
import Down from "../assets/down.svg";
import Light from "../assets/light.svg";
import Poly from "../assets/poly.svg";
import Bell from "../assets/bell.svg";
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="form-portfolio">
      <div className="sidebar">
        <div className="empty-state">
          <div className="instance-parent">
            <div className="nav-wrapper">
              <div className="nav">
                <img className="icon" alt="" src={Circle} />
                <Link to="/profile" className="home">Profile</Link>
                <div className="nav-child" />
              </div>
            </div>
            <div className="nav-wrapper">
              <div className="nav">
                <img className="icon" alt="" src={Circle} />
                <Link to="/social" className="home8">Socials</Link>
                <div className="nav-child" />
              </div>
            </div>
            <div className="nav-frame">
              <div className="nav">
                <img className="icon" alt="" src={Circle} />
                <div className="home home45">Portfolio</div>
                <div className="nav-child" />
              </div>
            </div>
            <div className="nav-wrapper">
              <div className="nav">
                <img className="icon" alt="" src={Circle} />
                <Link to='/plane' className="home">Resume</Link>
                <div className="nav-child" />
              </div>
            </div>
          </div>
          <div className="empty-state-child" />
        </div>
      </div>
      <div className="navigation">
        <div className="codedamn-wrapper">
          <b className="codedamn">codedamn</b>
        </div>
        <div className="navbarssearch-field-parent">
          <div className="navbarssearch-field">
            <img className="search-icon" alt="" src={Icon}/>
            <div className="placeholder">Search</div>
          </div>
          <div className="frame-parent">
            <div className="frame-group">
              <div className="frame-wrapper">
                <div className="parent">
                  <b className="b">🔥</b>
                  <img className="lightning-icon" alt="" src={Light} />
                  <div className="placeholder1">2</div>
                </div>
              </div>
              <div className="frame-container">
                <div className="polygon-parent">
                  <img className="frame-child" alt="" src="/polygon-8.svg" />
                  <div className="xp">XP</div>
                </div>
                <b className="b1">🔥</b>
                <b className="placeholder2">1.2K</b>
              </div>
              <div className="bell-parent">
                <img className="bell-icon" alt="" src={Bell}/>
                <div className="ellipse-parent">
                  <div className="frame-item" />
                  <b className="b2">1</b>
                </div>
              </div>
            </div>
            <div className="profile">
              <div className="rectangle-parent">
                <img
                  className="frame-inner"
                  alt=""
                  src={Girl}
                />
                <div className="badge">
                  <img className="badge-child" alt="" src={Poly} />
                  <b className="b3">5</b>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="base-button">
              <div className="text">Get Pro</div>
              <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="courses-parent">
              <div className="placeholder">Courses</div>
              <img
                className="material-symbolsarrow-back-io-icon"
                alt=""
                src={Down}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="playgrounds">
          <div className="nav4">
            <b className="codedamn">Playgrounds</b>
            <div className="nav5">
              <div className="placeholder">See all</div>
              <img className="arrow-right-icon" alt="" src="/arrowright1.svg" />
            </div>
          </div>
          <div className="grid">
            <div className="projects-inner">
              <div className="playground-option">
                <div className="playground-card1">
                  <div className="card-inner">
                    <img className="html-5-icon" alt="" src={Html} />
                    <div className="card-content">
                      <div className="card-text">
                        <div className="title">Playground title</div>
                        <div className="copy">
                          <div className="text2">HTML/CSS</div>
                          <div className="copy-child" />
                          <div className="text2">1 min ago</div>
                        </div>
                      </div>
                      <div className="card-details">
                        <div className="avatars">
                          <img
                            className="avatars-child"
                            alt=""
                            src={Man}
                          />
                          <img
                            className="avatars-item"
                            alt=""
                            src={Girl}
                          />
                          <img
                            className="avatars-inner"
                            alt=""
                            src="/ellipse-25@2x.png"
                          />
                        </div>
                        <div className="contributors">
                          <span>{`Shared with `}</span>
                          <b>Adam, Anna</b>
                          <span>.. +7 more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-circle-vertical">
                    <div className="ellipse-group">
                      <div className="ellipse-div" />
                      <div className="ellipse-div" />
                      <div className="ellipse-div" />
                    </div>
                  </div>
                </div>
                <div className="control-icons1" />
              </div>
              <div className="playground-option1">
                <div className="playground-card1">
                  <div className="card-inner">
                    <img className="html-5-icon" alt="" src={Javascript} />
                    <div className="card-content">
                      <div className="card-text">
                        <div className="title">Playground title</div>
                        <div className="copy">
                          <div className="text2">HTML/CSS</div>
                          <div className="copy-child" />
                          <div className="text2">1 min ago</div>
                        </div>
                      </div>
                      <div className="card-details">
                        <div className="avatars">
                          <img
                            className="avatars-child"
                            alt=""
                            src={Man}
                          />
                          <img
                            className="avatars-item"
                            alt=""
                            src={Man}
                          />
                          <img
                            className="avatars-inner"
                            alt=""
                            src="/ellipse-251@2x.png"
                          />
                        </div>
                        <div className="contributors">
                          <span>{`Shared with `}</span>
                          <b>Adam, Anna</b>
                          <span>.. +7 more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-circle-vertical">
                    <div className="ellipse-group">
                      <div className="ellipse-div" />
                      <div className="ellipse-div" />
                      <div className="ellipse-div" />
                    </div>
                  </div>
                </div>
                <div className="control-icons1" />
              </div>
            </div>
            <div className="projects-inner">
              <div className="playground-option1">
                <div className="playground-card1">
                  <div className="card-inner">
                    <img
                      className="html-5-icon"
                      alt=""
                      src={Javascript}
                    />
                    <div className="card-content">
                      <div className="card-text">
                        <div className="title">Playground title</div>
                        <div className="copy">
                          <div className="text2">HTML/CSS</div>
                          <div className="copy-child" />
                          <div className="text2">1 min ago</div>
                        </div>
                      </div>
                      <div className="card-details">
                        <div className="avatars">
                          <img
                            className="avatars-child"
                            alt=""
                            src={Man}
                          />
                          <img
                            className="avatars-item"
                            alt=""
                            src={Girl}
                          />
                          <img
                            className="avatars-inner"
                            alt=""
                            src="/ellipse-25@2x.png"
                          />
                        </div>
                        <div className="contributors">
                          <span>{`Shared with `}</span>
                          <b>Adam, Anna</b>
                          <span>.. +7 more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-circle-vertical">
                    <div className="ellipse-group">
                      <div className="ellipse-div" />
                      <div className="ellipse-div" />
                      <div className="ellipse-div" />
                    </div>
                  </div>
                </div>
                <div className="control-icons1" />
              </div>
              <div className="playground-option1">
                <div className="playground-card1">
                  <div className="card-inner">
                    <img className="html-5-icon" alt="" src={Html} />
                    <div className="card-content">
                      <div className="card-text">
                        <div className="title">Playground title</div>
                        <div className="copy">
                          <div className="text2">HTML/CSS</div>
                          <div className="copy-child" />
                          <div className="text2">1 min ago</div>
                        </div>
                      </div>
                      <div className="card-details">
                        <div className="avatars">
                          <img
                            className="avatars-child"
                            alt=""
                            src={Man}
                          />
                          <img
                            className="avatars-item"
                            alt=""
                            src={Man}
                          />
                          <img
                            className="avatars-inner"
                            alt=""
                            src="/ellipse-251@2x.png"
                          />
                        </div>
                        <div className="contributors">
                          <span>{`Shared with `}</span>
                          <b>Adam, Anna</b>
                          <span>.. +7 more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-circle-vertical">
                    <div className="ellipse-group">
                      <div className="ellipse-div" />
                      <div className="ellipse-div" />
                      <div className="ellipse-div" />
                    </div>
                  </div>
                </div>
                <div className="control-icons1" />
              </div>
            </div>
          </div>
        </div>
        <div className="playgrounds">
          <div className="nav4">
            <b className="codedamn">Projects</b>
            <div className="nav5">
              <div className="placeholder">See all</div>
              <img className="arrow-right-icon" alt="" src="/arrowright1.svg" />
            </div>
          </div>
          <div className="grid1">
            <div className="projects-inner">
              <div className="projects-card-11">
                <img
                  className="projects-card-1-child"
                  alt=""
                  src={Recc}
                />
                <div className="masterbadgesecondaryoffsmal-parent">
                  <div className="avatars">
                    <div className="masterbadge">
                      <div className="dot" />
                      <div className="text15">Badge</div>
                    </div>
                  </div>
                  <div className="avatars">
                    <div className="masterbadge">
                      <div className="dot" />
                      <div className="text15">Badge</div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent1">
                  <div className="personal-portfolio-website-parent">
                    <div className="personal-portfolio-website">
                      Personal Portfolio Website
                    </div>
                    <div className="text-parent">
                      <div className="text2">HTML/CSS</div>
                      <div className="copy-child" />
                      <div className="text2">Javascript</div>
                      <div className="copy-child" />
                      <div className="text2">1 min ago</div>
                    </div>
                    <div className="menu-circle-vertical4">
                      <div className="ellipse-group">
                        <div className="ellipse-div" />
                        <div className="ellipse-div" />
                        <div className="ellipse-div" />
                      </div>
                    </div>
                  </div>
                  <div className="card-details">
                    <div className="avatars">
                      <img
                        className="avatars-child"
                        alt=""
                        src={Man}
                      />
                      <img
                        className="avatars-item"
                        alt=""
                        src={Girl}
                      />
                      <img
                        className="avatars-inner"
                        alt=""
                        src="/ellipse-25@2x.png"
                      />
                    </div>
                    <div className="contributors">3 contributors</div>
                    <div className="min-ago">1 min ago</div>
                  </div>
                </div>
                <img className="upload-icon" alt="" src="/upload.svg" />
              </div>
              <div className="projects-card-11">
                <img
                  className="projects-card-1-child"
                  alt=""
                  src={Face}
                />
                <div className="masterbadgesecondaryoffsmal-parent">
                  <div className="avatars">
                    <div className="masterbadge">
                      <div className="dot" />
                      <div className="text15">Badge</div>
                    </div>
                  </div>
                  <div className="avatars">
                    <div className="masterbadge">
                      <div className="dot" />
                      <div className="text15">Badge</div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent1">
                  <div className="personal-portfolio-website-parent">
                    <div className="personal-portfolio-website">
                      Personal Portfolio Website
                    </div>
                    <div className="text-parent">
                      <div className="text2">HTML/CSS</div>
                      <div className="copy-child" />
                      <div className="text2">Javascript</div>
                      <div className="copy-child" />
                      <div className="text2">1 min ago</div>
                    </div>
                    <div className="menu-circle-vertical4">
                      <div className="ellipse-group">
                        <div className="ellipse-div" />
                        <div className="ellipse-div" />
                        <div className="ellipse-div" />
                      </div>
                    </div>
                  </div>
                  <div className="card-details">
                    <div className="avatars">
                      <img
                        className="avatars-child"
                        alt=""
                        src={Man}
                      />
                      <img
                        className="avatars-item"
                        alt=""
                        src={Man}
                      />
                      <img
                        className="avatars-inner"
                        alt=""
                        src="/ellipse-251@2x.png"
                      />
                    </div>
                    <div className="contributors">3 contributors</div>
                    <div className="min-ago">1 min ago</div>
                  </div>
                </div>
                <img className="upload-icon" alt="" src="/upload1.svg" />
              </div>
            </div>
            <div className="projects-inner">
              <div className="projects-card-11">
                <img
                  className="projects-card-1-child"
                  alt=""
                  src={Face}
                />
                <div className="masterbadgesecondaryoffsmal-parent">
                  <div className="avatars">
                    <div className="masterbadge">
                      <div className="dot" />
                      <div className="text15">Badge</div>
                    </div>
                  </div>
                  <div className="avatars">
                    <div className="masterbadge">
                      <div className="dot" />
                      <div className="text15">Badge</div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent1">
                  <div className="personal-portfolio-website-parent">
                    <div className="personal-portfolio-website">
                      Personal Portfolio Website
                    </div>
                    <div className="text-parent">
                      <div className="text2">HTML/CSS</div>
                      <div className="copy-child" />
                      <div className="text2">Javascript</div>
                      <div className="copy-child" />
                      <div className="text2">1 min ago</div>
                    </div>
                    <div className="menu-circle-vertical4">
                      <div className="ellipse-group">
                        <div className="ellipse-div" />
                        <div className="ellipse-div" />
                        <div className="ellipse-div" />
                      </div>
                    </div>
                  </div>
                  <div className="card-details">
                    <div className="avatars">
                      <img
                        className="avatars-child"
                        alt=""
                        src={Man}
                      />
                      <img
                        className="avatars-item"
                        alt=""
                        src={Girl}
                      />
                      <img
                        className="avatars-inner"
                        alt=""
                        src="/ellipse-25@2x.png"
                      />
                    </div>
                    <div className="contributors">3 contributors</div>
                    <div className="min-ago">1 min ago</div>
                  </div>
                </div>
                <img className="upload-icon" alt="" src="/upload.svg" />
              </div>
              <div className="projects-card-11">
                <img
                  className="projects-card-1-child"
                  alt=""
                  src={Face}
                />
                <div className="masterbadgesecondaryoffsmal-parent">
                  <div className="avatars">
                    <div className="masterbadge">
                      <div className="dot" />
                      <div className="text15">Badge</div>
                    </div>
                  </div>
                  <div className="avatars">
                    <div className="masterbadge">
                      <div className="dot" />
                      <div className="text15">Badge</div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent1">
                  <div className="personal-portfolio-website-parent">
                    <div className="personal-portfolio-website">
                      Personal Portfolio Website
                    </div>
                    <div className="text-parent">
                      <div className="text2">HTML/CSS</div>
                      <div className="copy-child" />
                      <div className="text2">Javascript</div>
                      <div className="copy-child" />
                      <div className="text2">1 min ago</div>
                    </div>
                    <div className="menu-circle-vertical4">
                      <div className="ellipse-group">
                        <div className="ellipse-div" />
                        <div className="ellipse-div" />
                        <div className="ellipse-div" />
                      </div>
                    </div>
                  </div>
                  <div className="card-details">
                    <div className="avatars">
                      <img
                        className="avatars-child"
                        alt=""
                        src={Man}
                      />
                      <img
                        className="avatars-item"
                        alt=""
                        src={Man}
                      />
                      <img
                        className="avatars-inner"
                        alt=""
                        src="/ellipse-251@2x.png"
                      />
                    </div>
                    <div className="contributors">3 contributors</div>
                    <div className="min-ago">1 min ago</div>
                  </div>
                </div>
                <img className="upload-icon" alt="" src="/upload1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons1">
          <div className="avatars">
            <div className="masterbutton">
              <div className="text35">Cancel</div>
            </div>
          </div>
          <div className="new-button1">
            <div className="masterbutton1">
              <div className="text35">Save changes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
