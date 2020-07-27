import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "../styles/dash.css";
import "../styles/App.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App-header">
      <div className="centered">
        <h2>Hey !!</h2>
        <h3>Welcome to my site</h3>
      </div>

      <Button color="primary" onClick={toggle}>
        About Me
      </Button>
      <Collapse isOpen={isOpen}>
        <Card className="card card-body">
          <CardBody>
            I am Shaik Luqmaan, currently in my final semester pursuing Computer
            Science Engineering from MJCET. I am very passionate and looking to
            pursue a challenging career and be a part of a progressive
            organization that give opportunities to enhance my knowledge, skills
            and to work with sheer hard work, dedication and determination.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Dashboard;
