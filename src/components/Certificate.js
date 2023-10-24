import React from "react";
import "./Certificate.css";
import { Card } from "react-bootstrap";

const Certificate = () => {
  const certifications = [
    {
        "certificationId": 1,
        "certificateName" : "AWS Certified Solutions Architect - Associate",
        "price":12000,
        "description":"AWS Certified Solutions Architect - Associate showcases knowledge and skills in AWS technology, across a wide range of AWS services. The focus of this certification is on the design of cost and performance optimized solutions, demonstrating a strong understanding of the AWS Well-Architected Framework. This certification can enhance the career profile and earnings of certified individuals and increase your credibility and confidence in stakeholder and customer interactions."
    },
    {
        "certificationId": 2,
        "certificateName" : "Oracle Certified Professional, Java EE 7 Application Developer Certification",
        "price":9000,
        "description":"The Oracle Java EE 7 Application Developer exam validates programming capability to develop and deploy applications using Java Platform, Enterprise Edition 7. It is targeted to intermediate to advanced level Java Front-End and Back-end application developers, architects, and software engineers who possess expertise utilizing Java EE 7 technology to create web-based user interfaces using JavaScript along with JSPs, JSFs, servlets and handle business logic. Up-to-date training and hands-on program"
    },
    {
        "certificationId": 3,
        "certificateName" : "AWS Certified Data Analytics - Specialty",
        "price":5000,
        "description":"Earning AWS Certified Data Analytics – Specialty validates expertise in using AWS data lakes and analytics services to get insights from data."
    },
    {
        "certificationId": 4,
        "certificateName" : "International Software Testing Qualifications Board (ISTQB) Certification",
        "price":20000,
        "description":"This certification is most widely recognized for software testing at a foundational level as well as an advanced level. Currently, expert-level certification is being developed. For all these levels, the working groups of ISTQB are operating internationally so that the candidates can prepare well for the roles like software testers, test managers, test analysts, IT directors, and QA managers i.e. quality assurance managers."
    }
]

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Body>
          <Card.Title>{card.certificateName}</Card.Title>
          <Card.Text><b>ID: </b>{card.certificationId}</Card.Text>
          <Card.Text><b>Price: </b>₹{card.price}</Card.Text>
          <Card.Text><b>Description: </b>{card.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{certifications.map(renderCard)}</div>;
};

export default Certificate;
