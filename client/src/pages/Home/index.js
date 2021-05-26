import React, { useState } from "react";
import "./style.css";
import { FaDownload, FaGithub } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import axios from "axios";

import Image from "../../assets/img/coding__4.svg";
import About from "../../assets/img/about.svg";
import Contact from "../../assets/img/contact.svg";
import Project from "../../assets/img/project.svg";

// About Section Imports

import Git from "../../assets/img/about/git.svg";
import JS from "../../assets/img/about/js.svg";
import R from "../../assets/img/about/react.svg";
import Mongo from "../../assets/img/about/mongo.svg";
import Node from "../../assets/img/about/nodejs.svg";
import Python from "../../assets/img/about/python.svg";

// Social Import
import Github from "../../assets/img/social/github.svg";
import LinkedIn from "../../assets/img/social/linkedin.svg";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { name: name, email: email, message: message };
    const response = await axios.post("/message", data);
    console.log(response);
  };
  const projectList = [
    {
      title: "Price Tracker",
      desc: "Price Tracker for E-commerce Website",
      tech__stack: "MERN Stack",
    },
    {
      title: "Image Classification Using Neural Network",
      desc: "Image clasification using neural network and support vector machine",
      tech__stack: "Neural Network",
    },
  ];
  return (
    <div className="home">
      <div className="intro container">
        <img className="intro__image" src={Image} />
        <div className="intro__info">
          <div className="info__container">
            <h1>Hi, I'm Alok</h1>
            <h4>FullStack Developer</h4>
            <div className="info__container__button flex">
              <button className="flex align__center">
                Contact Me
                <AiFillMessage style={{ margin: "0rem 0.5rem" }} />
              </button>
              <button className="flex align__center">
                Resume
                <FaDownload style={{ margin: "0rem 0.5rem" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="about container" id="about">
        <img className="about__image" src={About} />
        <div className="about__info">
          <div className="about__info__header">Technology Stack</div>
          <div className="about__list">
            <ul className="flex flex__col">
              <li className="flex ul__li align__center">
                <img src={JS} style={{ width: "32px", height: "32px" }} />
                <span className="technology span__basis">JavaScript</span>
                <progress
                  className="progress progress__basis"
                  value={70}
                  max={100}
                />
                <span className="level span__basis">Advanced</span>
              </li>
              <li className="flex ul__li align__center">
                <img src={R} style={{ width: "32px", height: "32px" }} />
                <span className="technology span__basis">React JS</span>
                <progress className="progress" value={70} max={100} />
                <span className="level span__basis">Advanced</span>
              </li>

              <li className="flex ul__li align__center">
                <img src={Mongo} style={{ width: "32px", height: "32px" }} />
                <span className="technology span__basis">MongoDB</span>
                <progress className="progress" value={45} max={100} />
                <span className="level span__basis">Intermediate</span>
              </li>
              <li className="flex ul__li align__center">
                <img src={Node} style={{ width: "32px", height: "32px" }} />
                <span className="technology span__basis">Node JS</span>
                <progress className="progress" value={50} max={100} />
                <span className="level span__basis">Intermediate</span>
              </li>
              <li className="flex ul__li align__center">
                <img src={Python} style={{ width: "32px", height: "32px" }} />
                <span className="technology span__basis">Python</span>
                <progress className="progress" value={40} max={100} />
                <span className="level span__basis">Intermediate</span>
              </li>
              <li className="flex ul__li align__center">
                <img src={Git} style={{ width: "32px", height: "32px" }} />
                <span className="technology span__basis">GitHub</span>
                <progress className="progress" value={50} max={100} />
                <span className="level span__basis">Intermediate</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project container" id="project">
        <img className="project__image" src={Project} />
        <div className="project__title">
          <h2>Projects</h2>
        </div>
        <div className="project__info">
          {projectList.map((element) => {
            return (
              <div className="project__wrapper">
                <div className="title">{element["title"]}</div>
                <div className="description">{element["desc"]}</div>
                <div className="tech__stack">{element["tech__stack"]}</div>
                <a href="#" className="flex github__link">
                  <FaGithub
                    style={{
                      margin: "0.5rem 0.2rem",
                      fontSize: "1.5rem",
                      color: "#8c38f3",
                    }}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="contact container" id="contact">
        {/* Contact Image */}
        <div className="contact__info">
          <img className="contact__image" src={Contact} />
          <div className="contact__header">Contact Me</div>
          <div className="contact__form">
            <form className="flex flex__col">
              <input
                className=""
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className=""
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="form__button" onClick={onSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="contact__info">
          <div className="social">
            <div>
              <img
                className="pd_mg cursor"
                src={Github}
                style={{ width: "90px", height: "70px" }}
              />
              <img
                className="pd_mg cursor"
                src={LinkedIn}
                style={{ width: "115px", height: "70px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
