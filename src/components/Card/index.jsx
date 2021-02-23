import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const index = ({topic, company, description, image}) => {
    return (
        <Card className="mt-5 maxw" >
                <Card.Img variant="top" src={image} className="float-center rounded-circle mx-auto img-fluid" id="profile"/>
                <Card.Body>
                <h4 className="text-center" id="company">{company}</h4>
                <h2 className="text-center" style={{ fontWeight: 900 }}>{topic}</h2>
                    <hr id="bodyDivider"/>
                    <Card.Text className="text-center">
                        {description} 
                    </Card.Text>
                 </Card.Body>
        </Card>
    );
};

export default index;