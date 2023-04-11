import React from "react";
import {Navbar,Container} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai";
import {BsCalendar4} from "react-icons/bs"
import {GoLocation} from "react-icons/go";
import Card from 'react-bootstrap/Card';
import img1 from "./1.png";



export default function Home(){
    return(
    <>
    <Navbar className="nav" bg="dark" variant="dark">
        <Container>
            <h1>Choose the form of payment</h1>
            <span className="close"><AiOutlineClose size={20}/></span>
        </Container>
      </Navbar><br/>
    {/* <h1>Ya Ali (R.A) madad</h1> */}
    <div className="obj">
    <Card className="card-object">
        <div className="john">J</div>
      <Card.Body className="detail">John
      <p>(88) 99602-2404</p>
      </Card.Body>
      <button className="logout">Log out</button>
    </Card>
    </div>
    <br/>
    <h2>Selected service</h2><br/>
    <div className="select">
    <Card className="service">
        <img src={img1}/>
      <Card.Body className="lesson">
        <Card.Title className="title">Japnese lessons</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><BsCalendar4 className="icons"/> Nov 7 , 2020 . 11:30</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted"><GoLocation className="icon"/> Client's place</Card.Subtitle>
        <Card.Text className="price">
          Rp 350.000
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div><br/>
    <div className="form">
    <label className="label1">Enter your location</label><br/>
    <input className="input1" type="text" placeholder="Enter address"/><br/>
    <label className="label2">Note (optional)</label><br/>
    <input className="input2" type="text" placeholder="Enter text here"/><br/>
    
    </div><br/><br/><br/>
    <p className="head1"><strong>Choose a way to pay</strong></p>
    <div className="btn">
        <button className="cash">Cash</button>
        <button className="credit">Credit card</button><br/>
        <button className="bank">eWallet/<br/>Virtual bank</button>
    </div><br/>
    <div className="lorem">
    <input className="box" type="checkbox"/><span className="check">Lorem ipsum dolor sit amet, consectetur<a href="#"> adipiscing elit</a></span>
    </div><br/>
<footer>
    <p className="previous">Previous</p>
    <button className="next">Next</button>
</footer><br/>

    </>
    )
}
