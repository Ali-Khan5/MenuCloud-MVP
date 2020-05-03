import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  ColButton,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";
import classnames from "classnames";

const Tab = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Delivery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Take Out
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <h3 className="mb-3">Restaurants Name</h3>
              <p className="md-3">address</p>
              <hr />
              <Form>
                <div className="form-row">
                  <FormGroup className="col-md-6">
                    <label htmlFor="inputEmail4">Credit Card Number</label>
                    <Input
                      id="inputEmail4"
                      placeholder="Email"
                      type="email"
                    ></Input>
                  </FormGroup>
                  <FormGroup className="col-md-2">
                    <label htmlFor="inputZip">CVV</label>
                    <Input id="inputZip" type="text"></Input>
                  </FormGroup>
                </div>
               
                <div className="form-row">
                  <FormGroup className="col-md-6">
                  <label htmlFor="inputState">Card Expiration</label>
                    <Input id="inputState" type="select">
                      <option selected="">Month</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </Input>
                  </FormGroup>
                  <FormGroup className="col-md-4">
                    <label htmlFor="inputyear">Year</label>
                    <Input id="inputyear" type="Number" placeholder="2020"></Input>
                      
                  </FormGroup>
                  <FormGroup className="col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <Input id="inputZip" type="text"></Input>
                  </FormGroup>
              
               
               <FormGroup className="col-md-6">
                    <label htmlFor="Phone">Phone Number</label>
                    <Input id="Phone" type="Number"></Input>
                  </FormGroup>
                </div>
                <hr/>
              </Form>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tab;
