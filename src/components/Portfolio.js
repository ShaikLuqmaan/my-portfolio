import React, { useState } from "react";
import {
  Collapse,
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
} from "reactstrap";
import "../styles/App.css";
import "../styles/dash.css";

const Portfolio = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [state, setState] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const trigger = () => setIsClose(!isClose);
  const press = () => setState(!state);
  return (
    <div className="App-header">
      <div>
        <br></br>
        <Button
          color="primary"
          onClick={toggle}
          style={{ marginBottom: "1rem" }}
        >
          Baymax
        </Button>

        <Collapse isOpen={isOpen}>
          <Card className="card card-body">
            <CardBody>
              A simple C++ application that collects medical details and
              symptoms from a user and return diagnosis along with Doctor’s
              recommendation.
            </CardBody>
          </Card>
        </Collapse>
      </div>
      <div>
        <Button
          color="primary"
          onClick={trigger}
          style={{ marginBottom: "1rem" }}
        >
          Indecisive App
        </Button>
        <Collapse isOpen={isClose}>
          <Card className="card card-body">
            <CardBody>
              Indecisive App is a React web application that is used to make
              decisions. All you have to do is add options and the application
              will randomly choose an option for you. This Project can be
              accessed here:
              <br></br>
              <a
                href="https://github.com/ShaikLuqmaan/indecisive-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github/ShaikLuqmaan/indecisive-app
              </a>
            </CardBody>
          </Card>
        </Collapse>{" "}
      </div>

      <div>
        <Button
          color="primary"
          onClick={press}
          style={{ marginBottom: "1rem" }}
        >
          Stackhub
        </Button>
        <Collapse isOpen={state}>
          <Card className="card card-body">
            <CardBody>
              Code Playground is a platform for the coding community of
              Muffakham Jah College of Engineering & Technology. The platform
              aims to encourage students to voice their queries related to
              programming in order to improve their problem solving and
              analytical skills. Each user, on registering and logging in, can
              question their doubts as well as resolve others’ doubts. The users
              cam also upvote other posts and view other profiles.
              <br></br>
              <a
                href="https://github.com/ShaikLuqmaan/stackhub "
                target="_blank"
                rel="noopener noreferrer"
              >
                Github/ShaikLuqmaan/stackhub
              </a>
            </CardBody>
          </Card>
        </Collapse>{" "}
      </div>

      <div>
        <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
          Hangman
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card className="card card-body">
            <CardBody>
              Hangman is a word game developed using Java where computer chooses
              a word and the user attempts to guess the word one letter at a
              time. If a guessed letter appears in the word, all instances of it
              are revealed. If not the guesser looses a chance. If the guesser
              figures out the secret before he or she runs out of chances, he or
              she wins. If not the computer wins.
              <br></br>
              <a
                href="https://github.com/ShaikLuqmaan/hangman-java  "
                target="_blank"
                rel="noopener noreferrer"
              >
                Github/ShaikLuqmaan/hangman
              </a>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
};

export default Portfolio;
